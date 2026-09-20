"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Eye,
  Mail,
  Phone,
  RefreshCw,
  Trash2,
} from "lucide-react";

const statusOptions = [
  "all",
  "new",
  "contacted",
  "quoted",
  "converted",
  "closed",
];

function formatDate(date) {
  if (!date) return "—";

  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) {
    return "—";
  }

  return parsedDate.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function getStatusClass(status) {
  switch (status) {
    case "contacted":
      return "bg-yellow-100 text-yellow-700";

    case "quoted":
      return "bg-purple-100 text-purple-700";

    case "converted":
      return "bg-green-100 text-green-700";

    case "closed":
      return "bg-gray-100 text-gray-700";

    case "new":
    default:
      return "bg-blue-100 text-blue-700";
  }
}

export default function QuotesPage() {
  const [quotes, setQuotes] = useState([]);
  const [status, setStatus] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [deletingId, setDeletingId] = useState("");

  async function loadQuotes() {
    try {
      setLoading(true);
      setError("");

      const response = await fetch("/api/quote", {
        method: "GET",
        cache: "no-store",
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.message || "Unable to load quotes."
        );
      }

      setQuotes(
        Array.isArray(data?.quotes)
          ? data.quotes
          : []
      );
    } catch (error) {
      console.error("QUOTES PAGE ERROR:", error);

      setError(
        error.message ||
          "Unable to load quotes right now."
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadQuotes();
  }, []);

  async function deleteQuote(id) {
    if (!id) return;

    const confirmed = window.confirm(
      "Are you sure you want to delete this quote?"
    );

    if (!confirmed) {
      return;
    }

    try {
      setDeletingId(id);
      setError("");

      const response = await fetch(
        `/api/quote?id=${encodeURIComponent(id)}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.message || "Unable to delete quote."
        );
      }

      setQuotes((currentQuotes) =>
        currentQuotes.filter(
          (quote) => quote.id !== id
        )
      );
    } catch (error) {
      console.error(
        "DELETE QUOTE ERROR:",
        error
      );

      setError(
        error.message ||
          "Unable to delete the quote."
      );
    } finally {
      setDeletingId("");
    }
  }

  const filteredQuotes =
    status === "all"
      ? quotes
      : quotes.filter(
          (quote) => quote.status === status
        );

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              Quotes
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              Manage quote requests from your website.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={loadQuotes}
              disabled={loading}
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <RefreshCw
                size={17}
                className={
                  loading ? "animate-spin" : ""
                }
              />

              Refresh
            </button>

            <Link
              href="/admin"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
            >
              <ArrowLeft size={17} />

              Dashboard
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <section className="mx-auto max-w-7xl px-6 py-8">
        {/* Status filters */}
        <div className="mb-6 flex flex-wrap gap-2">
          {statusOptions.map((option) => {
            const active = status === option;

            return (
              <button
                key={option}
                type="button"
                onClick={() => setStatus(option)}
                className={`rounded-full px-4 py-2 text-sm font-medium capitalize transition ${
                  active
                    ? "bg-blue-600 text-white"
                    : "bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-50"
                }`}
              >
                {option}
              </button>
            );
          })}
        </div>

        {/* Error */}
        {error && (
          <div className="mb-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        )}

        {/* Loading */}
        {loading ? (
          <div className="rounded-xl border border-slate-200 bg-white p-10 text-center">
            <RefreshCw
              size={24}
              className="mx-auto animate-spin text-blue-600"
            />

            <p className="mt-3 text-sm text-slate-500">
              Loading quotes...
            </p>
          </div>
        ) : filteredQuotes.length === 0 ? (
          /* Empty */
          <div className="rounded-xl border border-slate-200 bg-white p-12 text-center">
            <Mail
              size={40}
              className="mx-auto text-slate-300"
            />

            <h2 className="mt-4 text-lg font-semibold text-slate-900">
              No quotes found
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              There are no quote requests for this
              filter.
            </p>
          </div>
        ) : (
          /* Table */
          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[1050px]">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Name
                    </th>

                    <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Business
                    </th>

                    <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Email
                    </th>

                    <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Phone
                    </th>

                    <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Service
                    </th>

                    <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Date
                    </th>

                    <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Status
                    </th>

                    <th className="px-5 py-4 text-right text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {filteredQuotes.map((quote) => (
                    <tr
                      key={quote.id}
                      className="border-b border-slate-100 last:border-b-0 hover:bg-slate-50"
                    >
                      {/* Name */}
                      <td className="px-5 py-4">
                        <p className="font-semibold text-slate-900">
                          {quote.name || "—"}
                        </p>
                      </td>

                      {/* Business */}
                      <td className="px-5 py-4">
                        <p className="text-sm text-slate-600">
                          {quote.businessName || "—"}
                        </p>
                      </td>

                      {/* Email */}
                      <td className="px-5 py-4">
                        {quote.email ? (
                          <a
                            href={`mailto:${quote.email}`}
                            className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-blue-600"
                          >
                            <Mail size={15} />

                            {quote.email}
                          </a>
                        ) : (
                          <span className="text-sm text-slate-400">
                            —
                          </span>
                        )}
                      </td>

                      {/* Phone */}
                      <td className="px-5 py-4">
                        {quote.phone ? (
                          <a
                            href={`tel:${quote.phone}`}
                            className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-blue-600"
                          >
                            <Phone size={15} />

                            {quote.phone}
                          </a>
                        ) : (
                          <span className="text-sm text-slate-400">
                            —
                          </span>
                        )}
                      </td>

                      {/* Service */}
                      <td className="px-5 py-4">
                        <p className="text-sm text-slate-600">
                          {quote.service || "—"}
                        </p>
                      </td>

                      {/* Date */}
                      <td className="whitespace-nowrap px-5 py-4 text-sm text-slate-600">
                        {formatDate(
                          quote.createdAt
                        )}
                      </td>

                      {/* Status */}
                      <td className="px-5 py-4">
                        <span
                          className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold capitalize ${getStatusClass(
                            quote.status
                          )}`}
                        >
                          {quote.status || "new"}
                        </span>
                      </td>

                      {/* Actions */}
                      <td className="px-5 py-4">
                        <div className="flex justify-end gap-2">
                          <Link
                            href={`/admin/quotes/${quote.id}`}
                            className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                          >
                            <Eye size={16} />

                            View
                          </Link>

                          <button
                            type="button"
                            onClick={() =>
                              deleteQuote(quote.id)
                            }
                            disabled={
                              deletingId ===
                              quote.id
                            }
                            className="inline-flex items-center gap-2 rounded-lg border border-red-200 px-3 py-2 text-sm font-medium text-red-600 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-50"
                          >
                            <Trash2 size={16} />

                            {deletingId ===
                            quote.id
                              ? "Deleting..."
                              : "Delete"}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Result count */}
        {!loading &&
          filteredQuotes.length > 0 && (
            <p className="mt-4 text-sm text-slate-500">
              Showing {filteredQuotes.length}{" "}
              {filteredQuotes.length === 1
                ? "quote"
                : "quotes"}
            </p>
          )}
      </section>
    </main>
  );
}