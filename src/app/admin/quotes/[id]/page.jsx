"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  ArrowLeft,
  Building2,
  CalendarDays,
  Mail,
  MapPin,
  Phone,
  RefreshCw,
  Save,
  User,
} from "lucide-react";

const statusOptions = [
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

  return parsedDate.toLocaleString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
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

export default function QuoteDetailsPage() {
  const params = useParams();

  const quoteId = params?.id;

  const [quote, setQuote] = useState(null);
  const [status, setStatus] = useState("new");

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function loadQuote() {
    if (!quoteId) {
      return;
    }

    try {
      setLoading(true);
      setError("");
      setSuccess("");

      const response = await fetch("/api/quote", {
        method: "GET",
        cache: "no-store",
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.message || "Unable to load quote."
        );
      }

      const quotes = Array.isArray(data?.quotes)
        ? data.quotes
        : [];

      const foundQuote = quotes.find(
        (item) => item.id === quoteId
      );

      if (!foundQuote) {
        throw new Error("Quote not found.");
      }

      setQuote(foundQuote);
      setStatus(foundQuote.status || "new");
    } catch (error) {
      console.error(
        "QUOTE DETAILS ERROR:",
        error
      );

      setError(
        error.message ||
          "Unable to load this quote."
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadQuote();
  }, [quoteId]);

  async function updateStatus() {
    if (!quoteId || !status) {
      return;
    }

    try {
      setSaving(true);
      setError("");
      setSuccess("");

      const response = await fetch("/api/quote", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: quoteId,
          status,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.message ||
            "Unable to update quote status."
        );
      }

      setQuote((currentQuote) =>
        currentQuote
          ? {
              ...currentQuote,
              status,
            }
          : currentQuote
      );

      setSuccess("Quote status updated successfully.");
    } catch (error) {
      console.error(
        "UPDATE QUOTE STATUS ERROR:",
        error
      );

      setError(
        error.message ||
          "Unable to update quote status."
      );
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-slate-50">
        <div className="mx-auto flex min-h-screen max-w-4xl items-center justify-center px-6">
          <div className="text-center">
            <RefreshCw
              size={28}
              className="mx-auto animate-spin text-blue-600"
            />

            <p className="mt-3 text-sm text-slate-500">
              Loading quote...
            </p>
          </div>
        </div>
      </main>
    );
  }

  if (error && !quote) {
    return (
      <main className="min-h-screen bg-slate-50">
        <div className="mx-auto max-w-4xl px-6 py-10">
          <Link
            href="/admin/quotes"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-blue-600"
          >
            <ArrowLeft size={17} />
            Back to Quotes
          </Link>

          <div className="mt-6 rounded-xl border border-red-200 bg-red-50 p-6">
            <h1 className="text-lg font-semibold text-red-800">
              Unable to load quote
            </h1>

            <p className="mt-2 text-sm text-red-700">
              {error}
            </p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-5">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              Quote Details
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              View and manage this quote request.
            </p>
          </div>

          <Link
            href="/admin/quotes"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
          >
            <ArrowLeft size={17} />
            Back to Quotes
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-4xl px-6 py-8">
        {error && (
          <div className="mb-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        )}

        {success && (
          <div className="mb-6 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
            {success}
          </div>
        )}

        {quote && (
          <div className="space-y-6">
            {/* Customer information */}
            <div className="rounded-xl border border-slate-200 bg-white">
              <div className="border-b border-slate-200 px-6 py-5">
                <h2 className="text-lg font-semibold text-slate-900">
                  Customer Information
                </h2>
              </div>

              <div className="grid gap-6 px-6 py-6 sm:grid-cols-2">
                <div className="flex items-start gap-3">
                  <User
                    size={19}
                    className="mt-0.5 text-slate-400"
                  />

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Name
                    </p>

                    <p className="mt-1 font-medium text-slate-900">
                      {quote.name || "—"}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail
                    size={19}
                    className="mt-0.5 text-slate-400"
                  />

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Email
                    </p>

                    {quote.email ? (
                      <a
                        href={`mailto:${quote.email}`}
                        className="mt-1 block font-medium text-blue-600 hover:underline"
                      >
                        {quote.email}
                      </a>
                    ) : (
                      <p className="mt-1 font-medium text-slate-900">
                        —
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone
                    size={19}
                    className="mt-0.5 text-slate-400"
                  />

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Phone
                    </p>

                    {quote.phone ? (
                      <a
                        href={`tel:${quote.phone}`}
                        className="mt-1 block font-medium text-blue-600 hover:underline"
                      >
                        {quote.phone}
                      </a>
                    ) : (
                      <p className="mt-1 font-medium text-slate-900">
                        —
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Building2
                    size={19}
                    className="mt-0.5 text-slate-400"
                  />

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Business
                    </p>

                    <p className="mt-1 font-medium text-slate-900">
                      {quote.businessName || "—"}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin
                    size={19}
                    className="mt-0.5 text-slate-400"
                  />

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Postcode
                    </p>

                    <p className="mt-1 font-medium text-slate-900">
                      {quote.postcode || "—"}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CalendarDays
                    size={19}
                    className="mt-0.5 text-slate-400"
                  />

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Submitted
                    </p>

                    <p className="mt-1 font-medium text-slate-900">
                      {formatDate(
                        quote.createdAt
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote information */}
            <div className="rounded-xl border border-slate-200 bg-white">
              <div className="border-b border-slate-200 px-6 py-5">
                <h2 className="text-lg font-semibold text-slate-900">
                  Quote Request
                </h2>
              </div>

              <div className="space-y-6 px-6 py-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Service
                  </p>

                  <p className="mt-2 font-medium text-slate-900">
                    {quote.service || "—"}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Message
                  </p>

                  <div className="mt-2 rounded-lg bg-slate-50 p-4">
                    <p className="whitespace-pre-wrap text-sm leading-6 text-slate-700">
                      {quote.message || "No message provided."}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Status */}
            <div className="rounded-xl border border-slate-200 bg-white">
              <div className="border-b border-slate-200 px-6 py-5">
                <h2 className="text-lg font-semibold text-slate-900">
                  Quote Status
                </h2>
              </div>

              <div className="px-6 py-6">
                <div className="mb-5">
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold capitalize ${getStatusClass(
                      status
                    )}`}
                  >
                    {status}
                  </span>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
                  <div className="flex-1">
                    <label
                      htmlFor="quote-status"
                      className="mb-2 block text-sm font-medium text-slate-700"
                    >
                      Change status
                    </label>

                    <select
                      id="quote-status"
                      value={status}
                      onChange={(event) =>
                        setStatus(event.target.value)
                      }
                      className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    >
                      {statusOptions.map(
                        (option) => (
                          <option
                            key={option}
                            value={option}
                          >
                            {option
                              .charAt(0)
                              .toUpperCase() +
                              option.slice(1)}
                          </option>
                        )
                      )}
                    </select>
                  </div>

                  <button
                    type="button"
                    onClick={updateStatus}
                    disabled={saving}
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {saving ? (
                      <RefreshCw
                        size={17}
                        className="animate-spin"
                      />
                    ) : (
                      <Save size={17} />
                    )}

                    {saving
                      ? "Saving..."
                      : "Save Status"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}