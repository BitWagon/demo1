"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ShieldCheck,
  LogOut,
  Users,
  FileText,
  Mail,
  AlertCircle,
  RefreshCw,
  MessageSquare,
  Building2,
} from "lucide-react";

export default function AdminPage() {
  const router = useRouter();

  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [logoutLoading, setLogoutLoading] =
    useState(false);
  const [error, setError] = useState("");

  /*
   * Load all dashboard information.
   */
  async function loadDashboard(
    showRefreshLoading = false
  ) {
    try {
      if (showRefreshLoading) {
        setRefreshing(true);
      } else {
        setLoading(true);
      }

      setError("");

      const response = await fetch(
        "/api/admin/dashboard",
        {
          method: "GET",
          credentials: "include",
          cache: "no-store",
        }
      );

      const data = await response.json();

      /*
       * Session expired or invalid.
       */
      if (response.status === 401) {
        router.replace("/admin/login");
        return;
      }

      if (!response.ok || !data.success) {
        throw new Error(
          data.message ||
            "Unable to load dashboard."
        );
      }

      setDashboard(data);
    } catch (error) {
      console.error(
        "ADMIN DASHBOARD ERROR:",
        error
      );

      setError(
        error.message ||
          "Unable to load dashboard."
      );
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }

  /*
   * Automatically load dashboard
   * when admin enters /admin.
   */
  useEffect(() => {
    loadDashboard();
  }, []);

  /*
   * Logout admin.
   */
  async function handleLogout() {
    setLogoutLoading(true);

    try {
      const response = await fetch(
        "/api/admin/logout",
        {
          method: "POST",
          credentials: "include",
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.message ||
            "Unable to logout."
        );
      }
    } catch (error) {
      console.error(
        "ADMIN LOGOUT ERROR:",
        error
      );
    } finally {
      /*
       * Always return to login after logout.
       */
      router.replace("/admin/login");
      router.refresh();
    }
  }

  /*
   * Format MongoDB dates.
   */
  function formatDate(date) {
    if (!date) {
      return "—";
    }

    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())) {
      return "—";
    }

    return parsedDate.toLocaleDateString(
      "en-GB",
      {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }
    );
  }

  /*
   * Loading state.
   */
  if (loading) {
    return (
      <main className="min-h-screen bg-slate-50">
        <div className="flex min-h-screen items-center justify-center">
          <div className="flex items-center gap-3 text-slate-600">
            <RefreshCw className="h-5 w-5 animate-spin" />

            <span className="text-sm font-medium">
              Loading admin dashboard...
            </span>
          </div>
        </div>
      </main>
    );
  }

  /*
   * Error state.
   */
  if (error && !dashboard) {
    return (
      <main className="min-h-screen bg-slate-50">
        <div className="mx-auto flex min-h-screen max-w-lg items-center justify-center px-6">
          <div className="w-full rounded-3xl border border-red-200 bg-white p-8 text-center shadow-sm">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-red-50">
              <AlertCircle className="h-7 w-7 text-red-600" />
            </div>

            <h1 className="mt-5 text-xl font-bold text-slate-900">
              Unable to load dashboard
            </h1>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              {error}
            </p>

            <button
              type="button"
              onClick={() =>
                loadDashboard(true)
              }
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              <RefreshCw className="h-4 w-4" />
              Try Again
            </button>
          </div>
        </div>
      </main>
    );
  }

  const statistics =
    dashboard?.statistics || {};

  const contacts =
    dashboard?.recentContacts || [];

  const quotes =
    dashboard?.recentQuotes || [];

  return (
    <main className="min-h-screen bg-slate-50">

      {/* ================= HEADER ================= */}

      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">

          <div className="flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600">
              <ShieldCheck className="h-6 w-6 text-white" />
            </div>

            <div>
              <p className="font-bold text-slate-900">
                Brand Admin
              </p>

              <p className="text-xs text-slate-500">
                Administration Dashboard
              </p>
            </div>

          </div>

          <div className="flex items-center gap-3">

            <button
              type="button"
              onClick={() =>
                loadDashboard(true)
              }
              disabled={refreshing}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <RefreshCw
                className={`h-4 w-4 ${
                  refreshing
                    ? "animate-spin"
                    : ""
                }`}
              />

              Refresh
            </button>

            <button
              type="button"
              onClick={handleLogout}
              disabled={logoutLoading}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <LogOut className="h-4 w-4" />

              {logoutLoading
                ? "Logging Out..."
                : "Logout"}
            </button>

          </div>

        </div>
      </header>


      {/* ================= DASHBOARD ================= */}

      <section className="px-6 py-8 lg:px-8">

        <div className="mx-auto max-w-7xl">

          {/* Heading */}

          <div className="mb-8">

            <h1 className="text-3xl font-bold tracking-tight text-slate-900">
              Admin Dashboard
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Overview of your contacts, quote
              requests and newsletter subscribers.
            </p>

          </div>


          {/* Error notification */}

          {error && (
            <div className="mb-6 flex items-center gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              <AlertCircle className="h-5 w-5 shrink-0" />
              <span>{error}</span>
            </div>
          )}


          {/* ================= STATISTICS ================= */}

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            <StatCard
              title="Total Contacts"
              value={
                statistics.totalContacts ??
                0
              }
              icon={Users}
            />

            <StatCard
              title="Total Quotes"
              value={
                statistics.totalQuotes ??
                0
              }
              icon={FileText}
            />

            <StatCard
              title="Subscribers"
              value={
                statistics.totalSubscribers ??
                0
              }
              icon={Mail}
            />

            <StatCard
              title="New Enquiries"
              value={
                statistics.newEnquiries ??
                0
              }
              icon={AlertCircle}
            />

          </div>


          {/* ================= CONTACTS ================= */}

          <section className="mt-10">

            <div className="mb-5 flex items-center justify-between">

              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  Recent Contact Enquiries
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Latest contact form submissions.
                </p>
              </div>

              <div className="rounded-xl bg-blue-50 p-3">
                <MessageSquare className="h-5 w-5 text-blue-600" />
              </div>

            </div>


            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

              {contacts.length === 0 ? (
                <EmptyState
                  icon={MessageSquare}
                  message="No contact enquiries yet."
                />
              ) : (
                <div className="overflow-x-auto">

                  <table className="w-full min-w-[800px]">

                    <thead>
                      <tr className="border-b border-slate-200 bg-slate-50">

                        <TableHeader>
                          Name
                        </TableHeader>

                        <TableHeader>
                          Email
                        </TableHeader>

                        <TableHeader>
                          Message
                        </TableHeader>

                        <TableHeader>
                          Date
                        </TableHeader>

                        <TableHeader>
                          Status
                        </TableHeader>

                      </tr>
                    </thead>

                    <tbody>

                      {contacts.map(
                        (contact) => (
                          <tr
                            key={contact.id}
                            className="border-b border-slate-100 last:border-0"
                          >

                            <TableCell bold>
                              {contact.name ||
                                "—"}
                            </TableCell>

                            <TableCell>
                              {contact.email ||
                                "—"}
                            </TableCell>

                            <TableCell>
                              <p className="max-w-[300px] truncate">
                                {contact.message ||
                                  "—"}
                              </p>
                            </TableCell>

                            <TableCell>
                              {formatDate(
                                contact.createdAt
                              )}
                            </TableCell>

                            <TableCell>
                              <StatusBadge
                                status={
                                  contact.status
                                }
                              />
                            </TableCell>

                          </tr>
                        )
                      )}

                    </tbody>

                  </table>

                </div>
              )}

            </div>

          </section>


          {/* ================= QUOTES ================= */}

          <section className="mt-10 pb-12">

            <div className="mb-5 flex items-center justify-between">

              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  Recent Quote Requests
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Latest business quote requests.
                </p>
              </div>

              <div className="rounded-xl bg-blue-50 p-3">
                <Building2 className="h-5 w-5 text-blue-600" />
              </div>

            </div>


            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

              {quotes.length === 0 ? (
                <EmptyState
                  icon={FileText}
                  message="No quote requests yet."
                />
              ) : (
                <div className="overflow-x-auto">

                  <table className="w-full min-w-[900px]">

                    <thead>

                      <tr className="border-b border-slate-200 bg-slate-50">

                        <TableHeader>
                          Business
                        </TableHeader>

                        <TableHeader>
                          Name
                        </TableHeader>

                        <TableHeader>
                          Service
                        </TableHeader>

                        <TableHeader>
                          Email
                        </TableHeader>

                        <TableHeader>
                          Date
                        </TableHeader>

                        <TableHeader>
                          Status
                        </TableHeader>

                      </tr>

                    </thead>

                    <tbody>

                      {quotes.map(
                        (quote) => (
                          <tr
                            key={quote.id}
                            className="border-b border-slate-100 last:border-0"
                          >

                            <TableCell bold>
                              {quote.businessName ||
                                "—"}
                            </TableCell>

                            <TableCell>
                              {quote.name ||
                                "—"}
                            </TableCell>

                            <TableCell>
                              {quote.service ||
                                "—"}
                            </TableCell>

                            <TableCell>
                              {quote.email ||
                                "—"}
                            </TableCell>

                            <TableCell>
                              {formatDate(
                                quote.createdAt
                              )}
                            </TableCell>

                            <TableCell>
                              <StatusBadge
                                status={
                                  quote.status
                                }
                              />
                            </TableCell>

                          </tr>
                        )
                      )}

                    </tbody>

                  </table>

                </div>
              )}

            </div>

          </section>

        </div>

      </section>

    </main>
  );
}


/*
 * ================= STAT CARD =================
 */

function StatCard({
  title,
  value,
  icon: Icon,
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="flex items-start justify-between">

        <div>

          <p className="text-sm font-medium text-slate-500">
            {title}
          </p>

          <p className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
            {value}
          </p>

        </div>

        <div className="rounded-xl bg-slate-100 p-3">
          <Icon className="h-5 w-5 text-slate-700" />
        </div>

      </div>

    </div>
  );
}


/*
 * ================= TABLE HEADER =================
 */

function TableHeader({ children }) {
  return (
    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
      {children}
    </th>
  );
}


/*
 * ================= TABLE CELL =================
 */

function TableCell({
  children,
  bold = false,
}) {
  return (
    <td
      className={`px-6 py-4 text-sm ${
        bold
          ? "font-semibold text-slate-900"
          : "text-slate-600"
      }`}
    >
      {children}
    </td>
  );
}


/*
 * ================= STATUS BADGE =================
 */

function StatusBadge({ status }) {
  const normalizedStatus = String(
    status || "new"
  ).toLowerCase();

  let label = normalizedStatus;

  if (normalizedStatus === "new") {
    label = "New";
  } else if (
    normalizedStatus === "contacted"
  ) {
    label = "Contacted";
  } else if (
    normalizedStatus === "in progress"
  ) {
    label = "In Progress";
  } else if (
    normalizedStatus === "completed"
  ) {
    label = "Completed";
  }

  let classes =
    "bg-slate-100 text-slate-700";

  if (normalizedStatus === "new") {
    classes =
      "bg-blue-50 text-blue-700";
  }

  if (
    normalizedStatus === "contacted"
  ) {
    classes =
      "bg-yellow-50 text-yellow-700";
  }

  if (
    normalizedStatus === "in progress"
  ) {
    classes =
      "bg-purple-50 text-purple-700";
  }

  if (
    normalizedStatus === "completed"
  ) {
    classes =
      "bg-green-50 text-green-700";
  }

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${classes}`}
    >
      {label}
    </span>
  );
}


/*
 * ================= EMPTY STATE =================
 */

function EmptyState({
  icon: Icon,
  message,
}) {
  return (
    <div className="flex min-h-[180px] flex-col items-center justify-center px-6 text-center">

      <div className="rounded-full bg-slate-100 p-4">
        <Icon className="h-6 w-6 text-slate-500" />
      </div>

      <p className="mt-4 text-sm text-slate-500">
        {message}
      </p>

    </div>
  );
}