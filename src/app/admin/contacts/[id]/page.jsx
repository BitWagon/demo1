"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  ArrowLeft,
  CalendarDays,
  CheckCircle2,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  RefreshCw,
  User,
} from "lucide-react";

const statusOptions = [
  {
    value: "new",
    label: "New",
  },
  {
    value: "read",
    label: "Read",
  },
  {
    value: "replied",
    label: "Replied",
  },
  {
    value: "closed",
    label: "Closed",
  },
];

function formatDate(date) {
  if (!date) return "—";

  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) {
    return "—";
  }

  return parsedDate.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

function formatDateTime(date) {
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

export default function ContactDetailsPage() {
  const params = useParams();

  const contactId = params?.id;

  const [contact, setContact] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function loadContact() {
    if (!contactId) {
      return;
    }

    try {
      setLoading(true);
      setError("");
      setSuccess("");

      /*
       * The existing API returns the contact list.
       * We find the requested contact by ID.
       */
      const response = await fetch("/api/contact", {
        method: "GET",
        cache: "no-store",
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.message ||
            "Unable to load contacts."
        );
      }

      const contacts = Array.isArray(data?.contacts)
        ? data.contacts
        : [];

      const foundContact = contacts.find(
        (item) => item.id === contactId
      );

      if (!foundContact) {
        throw new Error(
          "The requested contact could not be found."
        );
      }

      setContact(foundContact);
    } catch (error) {
      console.error(
        "CONTACT DETAILS ERROR:",
        error
      );

      setError(
        error.message ||
          "Unable to load contact details."
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadContact();
  }, [contactId]);

  async function updateStatus(newStatus) {
    if (!contact?.id || !newStatus) {
      return;
    }

    try {
      setSaving(true);
      setError("");
      setSuccess("");

      const response = await fetch("/api/contact", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: contact.id,
          status: newStatus,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.message ||
            "Unable to update contact status."
        );
      }

      if (data?.contact) {
        setContact(data.contact);
      } else {
        setContact((current) => ({
          ...current,
          status: newStatus,
        }));
      }

      setSuccess(
        "Contact status updated successfully."
      );
    } catch (error) {
      console.error(
        "UPDATE CONTACT STATUS ERROR:",
        error
      );

      setError(
        error.message ||
          "Unable to update contact status."
      );
    } finally {
      setSaving(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              Contact Details
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              View and manage this contact enquiry.
            </p>
          </div>

          <Link
            href="/admin/contacts"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
          >
            <ArrowLeft size={17} />

            Back to Contacts
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-6 py-8">
        {/* Loading */}
        {loading && (
          <div className="rounded-xl border border-slate-200 bg-white p-12 text-center">
            <RefreshCw
              size={26}
              className="mx-auto animate-spin text-blue-600"
            />

            <p className="mt-3 text-sm text-slate-500">
              Loading contact details...
            </p>
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="rounded-xl border border-red-200 bg-red-50 p-6">
            <p className="text-sm font-medium text-red-700">
              {error}
            </p>

            <button
              type="button"
              onClick={loadContact}
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-red-700"
            >
              <RefreshCw size={16} />

              Try Again
            </button>
          </div>
        )}

        {/* Contact */}
        {!loading && !error && contact && (
          <div className="space-y-6">
            {/* Main information */}
            <div className="rounded-xl border border-slate-200 bg-white">
              <div className="border-b border-slate-200 px-6 py-5">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">
                      {contact.name || "Unnamed Contact"}
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                      Contact enquiry
                    </p>
                  </div>

                  <span
                    className={`inline-flex w-fit rounded-full px-3 py-1.5 text-sm font-semibold capitalize ${getStatusClass(
                      contact.status
                    )}`}
                  >
                    {contact.status || "new"}
                  </span>
                </div>
              </div>

              <div className="grid gap-6 p-6 sm:grid-cols-2">
                {/* Name */}
                <div className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
                    <User size={19} />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Name
                    </p>

                    <p className="mt-1 font-medium text-slate-900">
                      {contact.name || "—"}
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
                    <Mail size={19} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Email
                    </p>

                    {contact.email ? (
                      <a
                        href={`mailto:${contact.email}`}
                        className="mt-1 block break-all font-medium text-blue-600 hover:underline"
                      >
                        {contact.email}
                      </a>
                    ) : (
                      <p className="mt-1 font-medium text-slate-900">
                        —
                      </p>
                    )}
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
                    <Phone size={19} />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Phone
                    </p>

                    {contact.phone ? (
                      <a
                        href={`tel:${contact.phone}`}
                        className="mt-1 block font-medium text-blue-600 hover:underline"
                      >
                        {contact.phone}
                      </a>
                    ) : (
                      <p className="mt-1 font-medium text-slate-900">
                        —
                      </p>
                    )}
                  </div>
                </div>

                {/* Date */}
                <div className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
                    <CalendarDays size={19} />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Submitted
                    </p>

                    <p className="mt-1 font-medium text-slate-900">
                      {formatDate(contact.createdAt)}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="rounded-xl border border-slate-200 bg-white">
              <div className="border-b border-slate-200 px-6 py-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                    <MessageSquare size={19} />
                  </div>

                  <div>
                    <h2 className="font-semibold text-slate-900">
                      Message
                    </h2>

                    <p className="text-sm text-slate-500">
                      Contact enquiry message
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="whitespace-pre-wrap text-sm leading-7 text-slate-700">
                  {contact.message || "No message provided."}
                </p>
              </div>
            </div>

            {/* Status management */}
            <div className="rounded-xl border border-slate-200 bg-white">
              <div className="border-b border-slate-200 px-6 py-5">
                <h2 className="font-semibold text-slate-900">
                  Update Status
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Change the current status of this enquiry.
                </p>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-3">
                  {statusOptions.map((option) => {
                    const active =
                      contact.status === option.value;

                    return (
                      <button
                        key={option.value}
                        type="button"
                        disabled={saving || active}
                        onClick={() =>
                          updateStatus(option.value)
                        }
                        className={`inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition ${
                          active
                            ? "bg-blue-600 text-white"
                            : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                        } ${
                          saving || active
                            ? "cursor-not-allowed opacity-70"
                            : ""
                        }`}
                      >
                        {active && (
                          <CheckCircle2 size={16} />
                        )}

                        {saving &&
                        !active &&
                        option.value !== contact.status ? (
                          <RefreshCw
                            size={16}
                            className="animate-spin"
                          />
                        ) : null}

                        {option.label}
                      </button>
                    );
                  })}
                </div>

                {success && (
                  <div className="mt-4 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
                    {success}
                  </div>
                )}

                <div className="mt-5 flex items-center gap-2 text-xs text-slate-400">
                  <MapPin size={14} />

                  Last updated:{" "}
                  {formatDateTime(
                    contact.updatedAt ||
                      contact.createdAt
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}