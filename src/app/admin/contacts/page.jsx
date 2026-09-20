"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Eye,
  Mail,
  Phone,
  Trash2,
  RefreshCw,
} from "lucide-react";

const statusOptions = [
  "all",
  "new",
  "read",
  "replied",
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
    case "read":
      return "bg-slate-100 text-slate-700";
    case "replied":
      return "bg-green-100 text-green-700";
    case "closed":
      return "bg-gray-100 text-gray-700";
    case "new":
    default:
      return "bg-blue-100 text-blue-700";
  }
}

export default function ContactsPage() {
  const [contacts, setContacts] = useState([]);
  const [status, setStatus] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [deletingId, setDeletingId] = useState("");

  async function loadContacts() {
    try {
      setLoading(true);
      setError("");

      const response = await fetch("/api/contact", {
        method: "GET",
        cache: "no-store",
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.message || "Unable to load contacts."
        );
      }

      setContacts(
        Array.isArray(data?.contacts)
          ? data.contacts
          : []
      );
    } catch (error) {
      console.error("CONTACTS PAGE ERROR:", error);

      setError(
        error.message ||
          "Unable to load contacts right now."
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadContacts();
  }, []);

  async function deleteContact(id) {
    if (!id) return;

    const confirmed = window.confirm(
      "Are you sure you want to delete this contact?"
    );

    if (!confirmed) {
      return;
    }

    try {
      setDeletingId(id);
      setError("");

      const response = await fetch(
        `/api/contact?id=${encodeURIComponent(id)}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.message || "Unable to delete contact."
        );
      }

      setContacts((currentContacts) =>
        currentContacts.filter(
          (contact) => contact.id !== id
        )
      );
    } catch (error) {
      console.error(
        "DELETE CONTACT ERROR:",
        error
      );

      setError(
        error.message ||
          "Unable to delete the contact."
      );
    } finally {
      setDeletingId("");
    }
  }

  const filteredContacts =
    status === "all"
      ? contacts
      : contacts.filter(
          (contact) => contact.status === status
        );

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              Contacts
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              Manage contact form enquiries.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={loadContacts}
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
              Loading contacts...
            </p>
          </div>
        ) : filteredContacts.length === 0 ? (
          /* Empty */
          <div className="rounded-xl border border-slate-200 bg-white p-12 text-center">
            <Mail
              size={40}
              className="mx-auto text-slate-300"
            />

            <h2 className="mt-4 text-lg font-semibold text-slate-900">
              No contacts found
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              There are no contact enquiries for this
              filter.
            </p>
          </div>
        ) : (
          /* Table */
          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[900px]">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Name
                    </th>

                    <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Email
                    </th>

                    <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Phone
                    </th>

                    <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Message
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
                  {filteredContacts.map((contact) => (
                    <tr
                      key={contact.id}
                      className="border-b border-slate-100 last:border-b-0 hover:bg-slate-50"
                    >
                      <td className="px-5 py-4">
                        <p className="font-semibold text-slate-900">
                          {contact.name || "—"}
                        </p>
                      </td>

                      <td className="px-5 py-4">
                        <a
                          href={`mailto:${contact.email}`}
                          className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-blue-600"
                        >
                          <Mail size={15} />

                          {contact.email || "—"}
                        </a>
                      </td>

                      <td className="px-5 py-4">
                        {contact.phone ? (
                          <a
                            href={`tel:${contact.phone}`}
                            className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-blue-600"
                          >
                            <Phone size={15} />

                            {contact.phone}
                          </a>
                        ) : (
                          <span className="text-sm text-slate-400">
                            —
                          </span>
                        )}
                      </td>

                      <td className="max-w-[260px] px-5 py-4">
                        <p
                          className="truncate text-sm text-slate-600"
                          title={contact.message || ""}
                        >
                          {contact.message || "—"}
                        </p>
                      </td>

                      <td className="whitespace-nowrap px-5 py-4 text-sm text-slate-600">
                        {formatDate(
                          contact.createdAt
                        )}
                      </td>

                      <td className="px-5 py-4">
                        <span
                          className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold capitalize ${getStatusClass(
                            contact.status
                          )}`}
                        >
                          {contact.status || "new"}
                        </span>
                      </td>

                      <td className="px-5 py-4">
                        <div className="flex justify-end gap-2">
                          <Link
                            href={`/admin/contacts/${contact.id}`}
                            className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                          >
                            <Eye size={16} />

                            View
                          </Link>

                          <button
                            type="button"
                            onClick={() =>
                              deleteContact(
                                contact.id
                              )
                            }
                            disabled={
                              deletingId ===
                              contact.id
                            }
                            className="inline-flex items-center gap-2 rounded-lg border border-red-200 px-3 py-2 text-sm font-medium text-red-600 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-50"
                          >
                            <Trash2 size={16} />

                            {deletingId ===
                            contact.id
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
          filteredContacts.length > 0 && (
            <p className="mt-4 text-sm text-slate-500">
              Showing {filteredContacts.length}{" "}
              {filteredContacts.length === 1
                ? "contact"
                : "contacts"}
            </p>
          )}
      </section>
    </main>
  );
}