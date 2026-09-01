"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function QuotePage() {
  const [form, setForm] = useState({
    name: "",
    business: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);
  };

  return (
    <>
      <Navbar />

      <main>
        <section className="bg-slate-900 py-24">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-blue-400">
              Free Quote
            </span>

            <h1 className="mt-5 text-4xl md:text-6xl font-bold text-white">
              Let&apos;s find the right
              <span className="text-blue-400"> solution.</span>
            </h1>

            <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-300 leading-8">
              Tell us a little about your business and the services you are
              interested in.
            </p>
          </div>
        </section>

        <section className="py-20 bg-slate-50">
          <div className="max-w-4xl mx-auto px-6">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl border border-slate-200 p-7 md:p-10 shadow-sm"
            >
              {submitted && (
                <div className="mb-6 rounded-xl bg-green-50 border border-green-200 p-4 text-green-700">
                  Thanks! Your quote request has been submitted.
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Full Name
                  </label>

                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Business Name
                  </label>

                  <input
                    name="business"
                    value={form.business}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    placeholder="Business name"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5 mt-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Phone
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    placeholder="Phone number"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Service
                </label>

                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 bg-white"
                >
                  <option value="">Select a service</option>
                  <option value="energy">Business Energy</option>
                  <option value="electricity">Business Electricity</option>
                  <option value="gas">Business Gas</option>
                  <option value="broadband">Business Broadband</option>
                  <option value="phone-line">Business Phone Line</option>
                  <option value="water">Business Water</option>
                  <option value="card-machine">Card Machine</option>
                </select>
              </div>

              <div className="mt-5">
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Tell us about your requirements
                </label>

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={6}
                  placeholder="Tell us what you need..."
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none resize-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <button
                type="submit"
                className="mt-6 w-full rounded-xl bg-blue-600 py-3.5 text-white font-semibold hover:bg-blue-700 transition"
              >
                Request Free Quote
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}