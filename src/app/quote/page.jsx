"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import QuoteForm from "@/components/forms/QuoteForm";

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
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-slate-950 py-24 text-white md:py-32">
          <div className="absolute inset-0 opacity-20">
            <img
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1800&q=85"
              alt="Business professionals discussing business requirements"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute inset-0 bg-slate-950/80" />

          <div className="relative mx-auto max-w-7xl px-6">
            <span className="text-sm font-bold uppercase tracking-wider text-blue-400">
              Request a Quote
            </span>

            <h1 className="mt-5 max-w-4xl text-4xl font-bold md:text-6xl">
              Tell Us What Your{" "}
              <span className="text-blue-400">Business Needs</span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Complete the form below and we'll review your requirements so
              suitable options can be explored.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm text-slate-300">
                Business-focused options
              </span>

              <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm text-slate-300">
                Simple enquiry process
              </span>

              <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm text-slate-300">
                Support throughout
              </span>
            </div>
          </div>
        </section>

        {/* Quote Introduction */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
                  Start Your Enquiry
                </span>

                <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
                  Let's find the right solution for your business.
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  Tell us a little about your business and the services you
                  are interested in. Your requirements help us understand what
                  type of solution may be suitable for your organisation.
                </p>

                <p className="mt-4 leading-8 text-slate-600">
                  Whether you're reviewing business energy, connectivity,
                  water, waste management, finance, insurance or payment
                  solutions, you can use the form to tell us what you need.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-slate-200 p-5">
                    <h3 className="font-bold text-slate-900">
                      Tell us your requirements
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Provide some basic information about your business and
                      what you're looking for.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 p-5">
                    <h3 className="font-bold text-slate-900">
                      Explore your options
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Your enquiry can help identify options relevant to your
                      business requirements.
                    </p>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-[2rem]">
                <img
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=85"
                  alt="Business team working together and discussing requirements"
                  className="h-[500px] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* What We Can Help With */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
                Business Requirements
              </span>

              <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
                Solutions for different areas of your business
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Businesses have different priorities depending on their
                premises, team size, operating requirements and plans for
                growth. Tell us which area you are interested in and provide
                any details that may help explain what you need.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Running Costs",
                  description:
                    "Explore options for important business running costs such as energy, water and connectivity.",
                },
                {
                  title: "Business Operations",
                  description:
                    "Consider services that can support the everyday requirements of your organisation and premises.",
                },
                {
                  title: "Business Protection",
                  description:
                    "Explore solutions relating to insurance, people, property and business risks.",
                },
                {
                  title: "Growth & Development",
                  description:
                    "Discuss requirements connected with expansion, investment, finance or changing business needs.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl font-bold text-blue-600">
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

        {/* Quote Form Section */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr]">
              {/* Left Information */}
              <div>
                <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
                  Free Quote
                </span>

                <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
                  Tell us a little about your business.
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Complete the form and provide as much information as you can.
                  This helps us understand your requirements and the type of
                  service you are interested in.
                </p>

                <div className="mt-8 overflow-hidden rounded-3xl">
                  <img
                    src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=85"
                    alt="Business professionals reviewing information together"
                    className="h-64 w-full object-cover"
                  />
                </div>

                <div className="mt-6 rounded-3xl bg-slate-950 p-7 text-white">
                  <h3 className="text-xl font-bold">
                    What happens next?
                  </h3>

                  <div className="mt-6 space-y-5">
                    <div className="flex gap-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold">
                        01
                      </span>

                      <div>
                        <h4 className="font-semibold">
                          Submit your enquiry
                        </h4>

                        <p className="mt-1 text-sm leading-6 text-slate-400">
                          Tell us about your business and the service you are
                          interested in.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold">
                        02
                      </span>

                      <div>
                        <h4 className="font-semibold">
                          Requirements are reviewed
                        </h4>

                        <p className="mt-1 text-sm leading-6 text-slate-400">
                          Your information helps establish what type of
                          solution may be relevant.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold">
                        03
                      </span>

                      <div>
                        <h4 className="font-semibold">
                          Explore suitable options
                        </h4>

                        <p className="mt-1 text-sm leading-6 text-slate-400">
                          You can then consider the available options and
                          decide how you want to proceed.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div>
                <form
                  onSubmit={handleSubmit}
                  className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10"
                >
                  {submitted && (
                    <div className="mb-6 rounded-xl border border-green-200 bg-green-50 p-4 text-green-700">
                      Thanks! Your quote request has been submitted.
                    </div>
                  )}

                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-slate-900">
                      Request Your Free Quote
                    </h2>

                    <p className="mt-2 text-slate-600">
                      Fill in your details below and tell us what your
                      business needs.
                    </p>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-slate-700">
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
                      <label className="mb-2 block text-sm font-semibold text-slate-700">
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

                  <div className="mt-5 grid gap-5 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-slate-700">
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
                      <label className="mb-2 block text-sm font-semibold text-slate-700">
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
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Service
                    </label>

                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    >
                      <option value="">Select a service</option>
                      <option value="energy">Business Energy</option>
                      <option value="electricity">
                        Business Electricity
                      </option>
                      <option value="gas">Business Gas</option>
                      <option value="broadband">
                        Business Broadband
                      </option>
                      <option value="phone-line">
                        Business Phone Line
                      </option>
                      <option value="water">Business Water</option>
                      <option value="card-machine">Card Machine</option>
                    </select>
                  </div>

                  <div className="mt-5">
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Tell us about your requirements
                    </label>

                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={6}
                      placeholder="Tell us what you need..."
                      className="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-6 w-full rounded-xl bg-blue-600 py-3.5 font-semibold text-white transition hover:bg-blue-700"
                  >
                    Request Free Quote
                  </button>

                  <p className="mt-4 text-center text-xs leading-5 text-slate-500">
                    By submitting this form, you are providing information
                    about your business so your requirements can be reviewed.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Why Request a Quote */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="overflow-hidden rounded-[2rem]">
                <img
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=85"
                  alt="Business professionals planning and reviewing business requirements"
                  className="h-[480px] w-full object-cover"
                />
              </div>

              <div>
                <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
                  Why Make An Enquiry?
                </span>

                <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
                  Start with your business requirements.
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Every organisation has different requirements. The right
                  option can depend on factors such as the type of business
                  you operate, your premises, the number of people in your
                  organisation and the services you already use.
                </p>

                <p className="mt-4 leading-8 text-slate-600">
                  Providing these details gives you a straightforward starting
                  point for exploring potential solutions relevant to your
                  business.
                </p>

                <div className="mt-8 space-y-4">
                  {[
                    "Explain what your business currently needs",
                    "Identify the service you want to explore",
                    "Provide details about your current requirements",
                    "Consider options that fit your organisation",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50 text-sm font-bold text-blue-600">
                        ✓
                      </span>

                      <p className="text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Information To Include */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
                Helpful Information
              </span>

              <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
                What should you include in your enquiry?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                The more relevant information you provide, the easier it is to
                understand what your business is looking for. You don't need
                to have everything prepared before making an enquiry.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Business Details",
                  description:
                    "Let us know what type of business you operate and give some context about your organisation.",
                },
                {
                  title: "Current Situation",
                  description:
                    "Explain what you currently use and any areas where you are looking for a different solution.",
                },
                {
                  title: "Your Priorities",
                  description:
                    "Tell us what matters most to your business, such as flexibility, reliability, service or cost.",
                },
                {
                  title: "Future Requirements",
                  description:
                    "Mention upcoming changes, expansion plans or other requirements that could affect your needs.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200"
                >
                  <h3 className="text-xl font-bold text-slate-900">
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

        {/* Services Section */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
                Business Services
              </span>

              <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
                What can we help you explore?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Select the service that best matches your current business
                requirements. You can also provide additional details in the
                enquiry form.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Business Energy",
                  description:
                    "Explore electricity and gas options designed around your business requirements.",
                },
                {
                  title: "Business Connectivity",
                  description:
                    "Explore broadband and phone solutions for keeping your business connected.",
                },
                {
                  title: "Business Water",
                  description:
                    "Consider commercial water services suitable for your premises and organisation.",
                },
                {
                  title: "Waste Management",
                  description:
                    "Explore practical waste collection and management solutions for your business.",
                },
                {
                  title: "Business Finance",
                  description:
                    "Explore potential finance options based around your business requirements.",
                },
                {
                  title: "Business Insurance",
                  description:
                    "Explore insurance options covering areas such as people, property and business risks.",
                },
              ].map((service) => (
                <div
                  key={service.title}
                  className="rounded-3xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    ✓
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-slate-900">
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

        {/* Business Priorities */}
        <section className="bg-slate-950 py-20 text-white">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <span className="text-sm font-bold uppercase tracking-wider text-blue-400">
                  Built Around Your Needs
                </span>

                <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                  Your business is different. Your requirements should be too.
                </h2>

                <p className="mt-5 leading-8 text-slate-300">
                  From small businesses and growing teams to established
                  organisations, requirements can vary considerably. That's
                  why your enquiry can focus on the particular service and
                  priorities that matter to you.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    "Flexible requirements",
                    "Business-focused options",
                    "Clear information",
                    "Straightforward enquiry",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-slate-800 bg-slate-900 p-5"
                    >
                      <div className="text-lg font-bold text-blue-400">✓</div>

                      <h3 className="mt-3 font-semibold">{item}</h3>
                    </div>
                  ))}
                </div>
              </div>

              <div className="overflow-hidden rounded-[2rem]">
                <img
                  src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1400&q=85"
                  alt="Professional business team working in a modern office"
                  className="h-[500px] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-blue-600 py-20 text-white">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              Ready to explore your options?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100">
              Complete the enquiry form above and tell us what your business
              needs. We'll review the information provided so suitable options
              can be explored.
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
              Request a Quote
            </a>
          </div>
        </section>
        <QuoteForm />
      </main>

      <Footer />
    </>
  );
}
