"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  ShieldCheck,
  LogOut,
} from "lucide-react";

export default function AdminPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  async function handleLogout() {
    setLoading(true);

    try {
      await fetch("/api/admin/logout", {
        method: "POST",
      });
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      router.push("/admin/login");
      router.refresh();
    }
  }

  return (
    <main className="min-h-screen bg-slate-50">

      <div className="border-b border-slate-200 bg-white">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600">

              <ShieldCheck className="h-5 w-5 text-white" />

            </div>

            <div>

              <p className="font-bold text-slate-900">
                Brand Admin
              </p>

              <p className="text-xs text-slate-500">
                Administration
              </p>

            </div>

          </div>


          <button
            type="button"
            onClick={handleLogout}
            disabled={loading}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-60"
          >

            <LogOut className="h-4 w-4" />

            {loading ? "Logging Out..." : "Logout"}

          </button>

        </div>

      </div>


      <section className="px-6 py-16 lg:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-12">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50">

              <ShieldCheck className="h-7 w-7 text-blue-600" />

            </div>

            <h1 className="mt-7 text-3xl font-bold text-slate-900">
              Welcome to the Admin Area
            </h1>

            <p className="mt-4 max-w-2xl leading-7 text-slate-600">
              You are successfully logged in as an administrator.
              The admin management features can be added here later.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}