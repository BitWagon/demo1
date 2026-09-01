"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
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

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <>
      <Navbar />

      <main>
        <section className="bg-slate-900 py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl">
              <span className="text-sm font-semibold uppercase tracking-wider text-blue-400">
                Contact Us
              </span>

              <h1 className="mt-5 text-4xl md:text-6xl font-bold text-white">
                Let&apos;s talk about your
                <span className="text-blue-400"> business.</span>
              </h1>

              <p className="mt-6 text-lg text-slate-300 leading-8">
                Have a question or need help finding the right service?
                Contact our team and tell us what you need.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-5 gap-10">
              <div className="lg:col-span-2">
                <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                  Get In Touch
                </span>

                <h2 className="mt-3 text-3xl font-bold text-slate-900">
                  How can we help?
                </h2>

                <p className="mt-4 text-slate-600 leading-7">
                  Complete the form and send us your enquiry. Our team can
                  review your message and get back to you.
                </p>

                <div className="mt-8 space-y-5">
                  <div className="rounded-2xl bg-white border border-slate-200 p-5">
                    <p className="text-sm text-slate-500">Email</p>
                    <p className="mt-1 font-semibold text-slate-900">
                      hello@example.com
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white border border-slate-200 p-5">
                    <p className="text-sm text-slate-500">Phone</p>
                    <p className="mt-1 font-semibold text-slate-900">
                      +44 0000 000000
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white border border-slate-200 p-5">
                    <p className="text-sm text-slate-500">Business Hours</p>
                    <p className="mt-1 font-semibold text-slate-900">
                      Monday - Friday
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-3">
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-3xl border border-slate-200 p-7 md:p-10 shadow-sm"
                >
                  {submitted && (
                    <div className="mb-6 rounded-xl bg-green-50 border border-green-200 p-4 text-green-700 text-sm">
                      Thank you! Your message has been submitted successfully.
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Full Name
                      </label>

                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Email Address
                      </label>

                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="you@example.com"
                        className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                      />
                    </div>
                  </div>

                  <div className="mt-5">
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                  <div className="mt-5">
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Message
                    </label>

                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="How can we help?"
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none resize-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-6 w-full rounded-xl bg-blue-600 py-3.5 text-white font-semibold hover:bg-blue-700 transition"
                  >
                    Send Message
                  </button>

                  <p className="mt-4 text-xs text-slate-500 text-center">
                    By submitting this form, you agree to our privacy policy.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}