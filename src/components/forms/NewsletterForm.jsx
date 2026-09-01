"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) return;

    setLoading(true);
    setSubmitted(false);
    setError("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Unable to subscribe right now."
        );
      }

      setSubmitted(true);
      setEmail("");
    } catch (error) {
      setError(
        error.message || "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-3 rounded-xl border border-green-400/20 bg-green-400/10 p-4 text-sm text-green-300"
      >
        <CheckCircle2 className="h-5 w-5 shrink-0" />

        <span>
          You're subscribed! Thank you for joining our newsletter.
        </span>
      </motion.div>
    );
  }

  return (
    <div>
      <div className="mb-4">
        <h3 className="text-lg font-bold text-white">
          Stay Updated
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-400">
          Subscribe to receive business updates, useful insights and
          service news.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            disabled={loading}
            className="min-w-0 flex-1 rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 disabled:opacity-60"
          />

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: loading ? 1 : 1.03 }}
            whileTap={{ scale: loading ? 1 : 0.97 }}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Joining..." : "Subscribe"}

            {!loading && <ArrowRight className="h-4 w-4" />}
          </motion.button>
        </div>

        {error && (
          <p className="mt-3 text-sm text-red-400">
            {error}
          </p>
        )}
      </form>
    </div>
  );
}