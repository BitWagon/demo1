"use client";

import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function QuoteSection() {
  const [formData, setFormData] = useState({
    business: "",
    name: "",
    email: "",
    phone: "",
    service: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setSuccess("");
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          message: "Quote request submitted from the homepage.",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Unable to submit your quote request."
        );
      }

      setSuccess(data.message);

      setFormData({
        business: "",
        name: "",
        email: "",
        phone: "",
        service: "",
      });
    } catch (err) {
      setError(
        err.message || "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-blue-600">
        <div className="grid gap-12 p-8 md:p-12 lg:grid-cols-2 lg:p-16">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-100">
              Get Started
            </p>

            <h2 className="mt-5 text-4xl font-black text-white md:text-5xl">
              Let's find the right solution for your business.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Tell us what you need and we'll help you
              explore the available options.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Quick enquiry",
                "Simple process",
                "Business-focused support",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-white"
                >
                  <CheckCircle2 size={19} />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-white p-8">
            <h3 className="text-2xl font-black text-slate-900">
              Request a free quote
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Start by telling us a little about your business.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-7 space-y-4"
            >
              <input
                type="text"
                name="business"
                value={formData.business}
                onChange={handleChange}
                placeholder="Business Name"
                required
                disabled={loading}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500 disabled:bg-slate-50"
              />

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                disabled={loading}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500 disabled:bg-slate-50"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Business Email"
                required
                disabled={loading}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500 disabled:bg-slate-50"
              />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                disabled={loading}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500 disabled:bg-slate-50"
              />

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                disabled={loading}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-600 outline-none focus:border-blue-500 disabled:bg-slate-50"
              >
                <option value="">
                  Select a service
                </option>

                <option value="Business Energy">
                  Business Energy
                </option>

                <option value="Connectivity">
                  Connectivity
                </option>

                <option value="Business Water">
                  Business Water
                </option>

                <option value="Card Machines">
                  Card Machines
                </option>
              </select>

              {error && (
                <div className="rounded-xl bg-red-50 p-4 text-sm text-red-700">
                  {error}
                </div>
              )}

              {success && (
                <div className="rounded-xl bg-green-50 p-4 text-sm text-green-700">
                  {success}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-4 font-bold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading
                  ? "Submitting..."
                  : "Request Free Quote"}

                {!loading && (
                  <ArrowRight size={18} />
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}