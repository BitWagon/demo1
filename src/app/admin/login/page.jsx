"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  LockKeyhole,
  Mail,
  ArrowRight,
  ShieldCheck,
  Eye,
  EyeOff,
} from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Invalid email or password.");
        setLoading(false);
        return;
      }

      router.push("/admin");
      router.refresh();
    } catch (error) {
      console.error("Admin login request error:", error);

      setError(
        "Unable to connect to the server. Please try again."
      );

      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-white">

      <div className="mx-auto flex min-h-[calc(100vh-6rem)] max-w-md items-center justify-center">

        <div className="w-full">

          {/* Brand */}
          <div className="mb-8 text-center">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 shadow-xl shadow-blue-600/20">

              <ShieldCheck className="h-8 w-8 text-white" />

            </div>

            <h1 className="mt-6 text-3xl font-bold">
              Brand Admin
            </h1>

            <p className="mt-2 text-sm text-slate-400">
              Secure administrator login
            </p>

          </div>


          {/* Login Card */}
          <div className="rounded-3xl border border-white/10 bg-white p-8 shadow-2xl sm:p-10">

            <div className="mb-8">

              <h2 className="text-2xl font-bold text-slate-900">
                Admin Login
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Sign in to access the administration area.
              </p>

            </div>


            {/* Error */}
            {error && (
              <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                {error}
              </div>
            )}


            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              {/* Email */}
              <div>

                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Admin Email
                </label>

                <div className="relative">

                  <Mail className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(event) =>
                      setEmail(event.target.value)
                    }
                    placeholder="admin@brandsolution.co.uk"
                    autoComplete="email"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-12 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                  />

                </div>

              </div>


              {/* Password */}
              <div>

                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Password
                </label>

                <div className="relative">

                  <LockKeyhole className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(event) =>
                      setPassword(event.target.value)
                    }
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-12 pr-12 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword((current) => !current)
                    }
                    aria-label={
                      showPassword
                        ? "Hide password"
                        : "Show password"
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-slate-700"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>

                </div>

              </div>


              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-4 text-sm font-bold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
              >

                {loading ? (
                  <>
                    <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Signing In...
                  </>
                ) : (
                  <>
                    Sign In
                    <ArrowRight className="h-5 w-5" />
                  </>
                )}

              </button>

            </form>


            <div className="mt-8 border-t border-slate-100 pt-6">

              <p className="text-center text-xs leading-5 text-slate-400">
                This area is restricted to authorised administrators.
              </p>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}