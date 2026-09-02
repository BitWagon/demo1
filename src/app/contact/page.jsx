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
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-slate-900 py-24 md:py-32">
          <div className="absolute inset-0 opacity-20">
            <img
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1800&q=85"
              alt="Business professionals meeting and discussing business matters"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute inset-0 bg-slate-900/85" />

          <div className="relative mx-auto max-w-7xl px-6">
            <div className="max-w-3xl">
              <span className="text-sm font-semibold uppercase tracking-wider text-blue-400">
                Contact Us
              </span>

              <h1 className="mt-5 text-4xl font-bold text-white md:text-6xl">
                Let&apos;s talk about your
                <span className="text-blue-400"> business.</span>
              </h1>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                Have a question or need help finding the right service?
                Contact our team and tell us what you need.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full border border-slate-700 bg-slate-950/70 px-4 py-2 text-sm text-slate-300">
                  Business-focused support
                </span>

                <span className="rounded-full border border-slate-700 bg-slate-950/70 px-4 py-2 text-sm text-slate-300">
                  Straightforward enquiries
                </span>

                <span className="rounded-full border border-slate-700 bg-slate-950/70 px-4 py-2 text-sm text-slate-300">
                  Support when you need it
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Introduction */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                  Get In Touch
                </span>

                <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
                  How can we help?
                </h2>

                <p className="mt-4 text-lg leading-8 text-slate-600">
                  Complete the form and send us your enquiry. Our team can
                  review your message and get back to you.
                </p>

                <p className="mt-4 leading-8 text-slate-600">
                  Whether you have a question about one of our business
                  services, want to discuss your requirements, or simply need
                  more information before making a decision, you can contact
                  us using the form.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-slate-200 p-5">
                    <h3 className="font-bold text-slate-900">
                      General Enquiries
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Ask a question about our services, enquiry process or
                      how we may be able to help your business.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 p-5">
                    <h3 className="font-bold text-slate-900">
                      Business Requirements
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Tell us about a particular business requirement and
                      provide details about what you are looking for.
                    </p>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-[2rem]">
                <img
                  src="https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=1400&q=85"
                  alt="Business professionals communicating in a modern office"
                  className="h-[480px] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-10 lg:grid-cols-5">
              <div className="lg:col-span-2">
                <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                  Contact Information
                </span>

                <h2 className="mt-3 text-3xl font-bold text-slate-900">
                  We&apos;re here to help.
                </h2>

                <p className="mt-4 leading-7 text-slate-600">
                  If you have a question or would like to discuss your
                  requirements, use the details below or send us a message
                  through the contact form.
                </p>

                <div className="mt-8 space-y-5">
                  <div className="rounded-2xl border border-slate-200 bg-white p-5">
                    <p className="text-sm text-slate-500">Email</p>

                    <p className="mt-1 font-semibold text-slate-900">
                      hello@example.com
                    </p>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      Send us your general enquiry or business question.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-white p-5">
                    <p className="text-sm text-slate-500">Phone</p>

                    <p className="mt-1 font-semibold text-slate-900">
                      +44 0000 000000
                    </p>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      Contact us to discuss your requirements.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-white p-5">
                    <p className="text-sm text-slate-500">Business Hours</p>

                    <p className="mt-1 font-semibold text-slate-900">
                      Monday - Friday
                    </p>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      Our business enquiries are handled during normal
                      working hours.
                    </p>
                  </div>
                </div>

                <div className="mt-6 overflow-hidden rounded-3xl">
                  <img
                    src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85"
                    alt="Professional business team working together"
                    className="h-64 w-full object-cover"
                  />
                </div>
              </div>

              <div className="lg:col-span-3">
                <form
                  onSubmit={handleSubmit}
                  className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10"
                >
                  {submitted && (
                    <div className="mb-6 rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-700">
                      Thank you! Your message has been submitted successfully.
                    </div>
                  )}

                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
                      Send Us A Message
                    </h2>

                    <p className="mt-2 leading-7 text-slate-600">
                      Tell us what you need and provide any details that may
                      help us understand your enquiry.
                    </p>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-slate-700">
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
                      <label className="mb-2 block text-sm font-semibold text-slate-700">
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
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
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
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Message
                    </label>

                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="How can we help?"
                      className="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-6 w-full rounded-xl bg-blue-600 py-3.5 font-semibold text-white transition hover:bg-blue-700"
                  >
                    Send Message
                  </button>

                  <p className="mt-4 text-center text-xs text-slate-500">
                    By submitting this form, you agree to our privacy policy.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* How We Can Help */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Business Support
              </span>

              <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
                What can you contact us about?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Our contact page is designed for businesses looking for
                information, guidance or support around the services they may
                need.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Service Questions",
                  description:
                    "Have questions about business energy, connectivity, water, waste, finance, insurance or payment solutions?",
                },
                {
                  title: "Business Requirements",
                  description:
                    "Tell us about your organisation and the type of service or solution you are currently looking for.",
                },
                {
                  title: "General Enquiries",
                  description:
                    "Need more information before making an enquiry? Send us your question and provide some context.",
                },
                {
                  title: "Existing Enquiries",
                  description:
                    "If you have already made an enquiry, you can use the contact form to provide additional information.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-lg font-bold text-blue-600">
                    ✓
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Process */}
        <section className="bg-slate-950 py-20 text-white">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <span className="text-sm font-semibold uppercase tracking-wider text-blue-400">
                  Simple Process
                </span>

                <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                  Getting in touch is straightforward.
                </h2>

                <p className="mt-5 leading-8 text-slate-300">
                  You don't need to know exactly what solution you need before
                  contacting us. Start by explaining your question,
                  requirements or current situation.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold">
                      01
                    </span>

                    <div>
                      <h3 className="font-bold">
                        Tell us what you need
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-slate-400">
                        Provide a few details about your question or business
                        requirement.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold">
                      02
                    </span>

                    <div>
                      <h3 className="font-bold">
                        We review your enquiry
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-slate-400">
                        Your message gives us useful context about what you are
                        looking for.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold">
                      03
                    </span>

                    <div>
                      <h3 className="font-bold">
                        Discuss the next steps
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-slate-400">
                        You can then continue the conversation based on your
                        particular requirements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-[2rem]">
                <img
                  src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1400&q=85"
                  alt="Business team discussing requirements together"
                  className="h-[500px] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Our Service Areas
              </span>

              <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
                Support across key business services
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                If your enquiry relates to one of the areas below, mention it
                in your message so you can provide the most relevant
                information.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Business Energy",
                  description:
                    "Questions about electricity, gas or wider business energy requirements.",
                },
                {
                  title: "Business Connectivity",
                  description:
                    "Enquiries about broadband, business phone and communication requirements.",
                },
                {
                  title: "Business Water",
                  description:
                    "Questions about commercial water services and premises requirements.",
                },
                {
                  title: "Waste Management",
                  description:
                    "Enquiries about business waste collection and practical waste management.",
                },
                {
                  title: "Business Finance",
                  description:
                    "Questions about potential finance solutions and business funding requirements.",
                },
                {
                  title: "Business Insurance",
                  description:
                    "Enquiries about business protection, property, people and professional risks.",
                },
              ].map((service) => (
                <div
                  key={service.title}
                  className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200"
                >
                  <h3 className="text-xl font-bold text-slate-900">
                    {service.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-blue-600 py-20 text-white">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              Have a question about your business requirements?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100">
              Send us a message and tell us what you need. Whether you have a
              general question or are exploring a specific business service,
              we're ready to hear from you.
            </p>

            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();

                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
              className="mt-8 inline-flex rounded-xl bg-white px-7 py-4 font-semibold text-blue-600 transition hover:bg-slate-100"
            >
              Contact Us
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}