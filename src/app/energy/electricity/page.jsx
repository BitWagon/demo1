import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Zap,
} from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServiceHero from "@/components/services/ServiceHero";

export const metadata = {
  title: "Business Electricity | Your Brand",
  description:
    "Explore business electricity solutions.",
};

export default function ElectricityPage() {
  return (
    <>
      <Navbar />

      <main>

        <ServiceHero
          badge="Business Electricity"
          title="Electricity solutions"
          highlight="for your business."
          description="Explore electricity options designed around your business requirements and operating needs."
        />

        {/* Why Compare */}
        <section className="bg-white py-24">

          <div className="mx-auto max-w-7xl px-6">

            <div className="grid gap-14 lg:grid-cols-2 lg:items-center">

              <div>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  <Zap size={27} />
                </div>

                <h2 className="mt-7 text-4xl font-black text-slate-900">
                  Find an electricity solution that fits
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  Every business has different requirements.
                  Explore your options and find an approach that
                  works for your organisation.
                </p>

              </div>

              {/* ELECTRICITY IMAGE + CONTENT */}
              <div className="relative overflow-hidden rounded-[2rem] shadow-xl">

                <img
                  src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=85"
                  alt="Electricity power lines and energy infrastructure"
                  className="h-[430px] w-full object-cover transition duration-700 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                <div className="absolute bottom-0 left-0 p-8 text-white">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600">
                    <Zap className="h-6 w-6" />
                  </div>

                  <h3 className="mt-5 text-2xl font-bold">
                    Business Electricity
                  </h3>

                  <p className="mt-2 max-w-md leading-7 text-slate-200">
                    Explore electricity options designed around your
                    organisation's requirements.
                  </p>

                </div>

              </div>

            </div>

            {/* WHY EXPLORE OPTIONS */}
            <div className="mt-16 rounded-[2rem] bg-slate-50 p-8 md:p-10">

              <h3 className="text-2xl font-bold text-slate-900">
                Why explore your options?
              </h3>

              <div className="mt-7 grid gap-5 md:grid-cols-2">

                {[
                  "Understand available options",
                  "Review solutions around your requirements",
                  "Make an informed decision",
                  "Get support throughout the process",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex gap-3"
                  >

                    <CheckCircle2
                      size={21}
                      className="mt-1 shrink-0 text-blue-600"
                    />

                    <span className="text-slate-700">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </section>

        {/* ELECTRICITY OPTIONS */}
        <section className="bg-slate-50 py-24">

          <div className="mx-auto max-w-7xl px-6">

            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

              <div className="overflow-hidden rounded-[2rem] shadow-xl">

                <img
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=85"
                  alt="Solar panels and electricity generation"
                  className="h-[430px] w-full object-cover transition duration-700 hover:scale-105"
                />

              </div>

              <div>

                <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                  Electricity Services
                </p>

                <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">
                  Explore Better Electricity Options
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  Explore electricity solutions suitable for your organisation
                  and compare available options based on your business
                  requirements.
                </p>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  Whether you're reviewing an existing arrangement or looking
                  for a new solution, understanding your available choices can
                  help you make a more informed decision.
                </p>

                <div className="mt-8 space-y-4">

                  {[
                    "Compare available electricity options",
                    "Understand different commercial plans",
                    "Explore solutions around your requirements",
                    "Choose with greater confidence",
                  ].map((item) => (

                    <div
                      key={item}
                      className="flex items-center gap-3"
                    >

                      <CheckCircle2
                        className="h-5 w-5 shrink-0 text-blue-600"
                      />

                      <span className="font-medium text-slate-700">
                        {item}
                      </span>

                    </div>

                  ))}

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* OUR PROCESS */}
        <section className="bg-white py-24">

          <div className="mx-auto max-w-7xl px-6">

            <div className="text-center">

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                Our Process
              </p>

              <h2 className="mt-4 text-4xl font-black text-slate-900">
                Getting started is simple
              </h2>

            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">

              {[
                ["01", "Share your requirements"],
                ["02", "Explore suitable options"],
                ["03", "Choose your solution"],
              ].map(([number, title]) => (

                <div
                  key={number}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-1 hover:shadow-lg"
                >

                  <span className="font-black text-blue-600">
                    {number}
                  </span>

                  <h3 className="mt-5 text-xl font-bold text-slate-900">
                    {title}
                  </h3>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* ELECTRICITY COMPARISON */}
        <section className="bg-slate-50 py-24">

          <div className="mx-auto max-w-7xl px-6">

            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

              <div>

                <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                  Compare Electricity
                </p>

                <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">
                  Make Your Electricity Decision With Confidence
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  Finding the right electricity solution can take time.
                  We make it easier to explore different commercial options
                  and understand what may be suitable for your business.
                </p>

                <Link
                  href="/quote"
                  className="mt-8 inline-flex items-center gap-3 rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white hover:bg-blue-700"
                >
                  Compare Electricity Options
                  <ArrowRight className="h-5 w-5" />
                </Link>

              </div>

              <div className="overflow-hidden rounded-[2rem] shadow-xl">

                <img
                  src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1200&q=85"
                  alt="Modern electricity and energy infrastructure"
                  className="h-[420px] w-full object-cover transition duration-700 hover:scale-105"
                />

              </div>

            </div>

          </div>

        </section>

        {/* BENEFITS */}
        <section className="bg-white py-24">

          <div className="mx-auto max-w-7xl px-6">

            <div className="max-w-3xl">

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                Benefits
              </p>

              <h2 className="mt-4 text-4xl font-black text-slate-900">
                A simpler approach to business electricity
              </h2>

            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

              {[
                "Business-focused options",
                "Clear information",
                "Simple enquiry process",
                "Dedicated support",
              ].map((item) => (

                <div
                  key={item}
                  className="rounded-3xl bg-slate-50 p-7"
                >

                  <CheckCircle2
                    size={22}
                    className="text-blue-600"
                  />

                  <h3 className="mt-5 font-bold text-slate-900">
                    {item}
                  </h3>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* FINAL CTA */}
        <section className="px-6 py-24">

          <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-blue-600">

            <div className="grid lg:grid-cols-2">

              <div className="relative min-h-[320px]">

                <img
                  src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=85"
                  alt="Electricity power infrastructure"
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-slate-950/50" />

                <div className="relative flex h-full items-center p-10">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white">
                    <Zap className="h-8 w-8" />
                  </div>

                </div>

              </div>

              <div className="p-10 text-center md:p-16 lg:text-left">

                <h2 className="text-4xl font-black text-white md:text-5xl">
                  Ready to explore electricity options?
                </h2>

                <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100 lg:mx-0">
                  Start with a simple enquiry and tell us about your business
                  requirements.
                </p>

                <Link
                  href="/quote"
                  className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 font-bold text-slate-900 transition hover:bg-slate-100"
                >
                  Get a Free Quote
                  <ArrowRight size={18} />
                </Link>

              </div>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}