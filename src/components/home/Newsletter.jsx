"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Unable to subscribe right now."
        );
      }

      setSuccess(data.message);
      setEmail("");
    } catch (err) {
      setError(
        err.message || "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
          Stay Updated
        </p>

        <h2 className="mt-4 text-3xl font-black text-slate-900 md:text-4xl">
          Get useful business updates
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-slate-600">
          Subscribe to receive useful information, updates and
          business insights.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setSuccess("");
              setError("");
            }}
            placeholder="Enter your email address"
            required
            disabled={loading}
            className="flex-1 rounded-full border border-slate-200 px-5 py-4 outline-none focus:border-blue-500 disabled:cursor-not-allowed disabled:bg-slate-50"
          />

          <button
            type="submit"
            disabled={loading}
            className="rounded-full bg-blue-600 px-7 py-4 font-bold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Subscribing..." : "Subscribe"}
          </button>
        </form>

        {success && (
          <p className="mx-auto mt-4 max-w-xl rounded-xl bg-green-50 p-4 text-sm font-medium text-green-700">
            {success}
          </p>
        )}

        {error && (
          <p className="mx-auto mt-4 max-w-xl rounded-xl bg-red-50 p-4 text-sm font-medium text-red-700">
            {error}
          </p>
        )}
      </div>
    </section>
  );
}