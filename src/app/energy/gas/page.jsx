import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Flame,
} from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServiceHero from "@/components/services/ServiceHero";

export const metadata = {
  title: "Business Gas | Your Brand",
  description:
    "Explore business gas solutions.",
};

export default function GasPage() {
  return (
    <>
      <Navbar />

      <main>

        <ServiceHero
          badge="Business Gas"
          title="Gas solutions"
          highlight="for modern businesses."
          description="Explore business gas options and find a solution that aligns with your organisation's requirements."
        />

        {/* Why Compare */}
        <section className="bg-white py-20">

          <div className="mx-auto max-w-7xl px-6">

            <div className="grid gap-14 lg:grid-cols-2 lg:items-center">

              <div>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  <Flame size={27} />
                </div>

                <span className="mt-7 block text-sm font-bold uppercase tracking-wider text-blue-600">
                  Why Compare?
                </span>

                <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">
                  Explore Your Business Gas Options
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  Business gas requirements can vary depending on your
                  premises, operations and energy usage. Comparing available
                  options can help you understand what is available and find
                  a solution that fits your organisation.
                </p>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  Whether you operate a restaurant, office, retail premises
                  or another commercial property, exploring your options can
                  help you make a more informed decision.
                </p>

                <div className="mt-8 space-y-4">

                  {[
                    "Business-focused gas solutions",
                    "Clear and simple information",
                    "Options based on your requirements",
                    "Support during the process",
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

              <div className="relative">

                <div className="overflow-hidden rounded-[2rem] shadow-xl">

                  <img
                    src="https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=85"
                    alt="Commercial kitchen and business gas usage"
                    className="h-[520px] w-full object-cover transition duration-700 hover:scale-105"
                  />

                </div>

                <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-slate-950/90 p-6 text-white shadow-xl backdrop-blur">

                  <div className="flex items-start gap-4">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600">
                      <Flame size={24} />
                    </div>

                    <div>

                      <h3 className="font-bold">
                        Business Gas Solutions
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-slate-300">
                        Explore options around your organisation's energy
                        requirements.
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* Gas Options */}
        <section className="bg-slate-50 py-24">

          <div className="mx-auto max-w-7xl px-6">

            <div className="max-w-3xl">

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                Business Gas
              </p>

              <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">
                A simpler way to explore gas options
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Tell us about your business requirements and explore suitable
                gas solutions through one straightforward enquiry.
              </p>

            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">

              {[
                {
                  title: "Compare",
                  text: "Explore available business gas solutions through one enquiry.",
                },
                {
                  title: "Understand",
                  text: "Review options clearly before deciding how to proceed.",
                },
                {
                  title: "Move Forward",
                  text: "Get guidance on the next steps once you've selected an option.",
                },
              ].map((item) => (

                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >

                  <CheckCircle2 className="h-8 w-8 text-blue-600" />

                  <h2 className="mt-5 text-2xl font-bold text-slate-900">
                    {item.title}
                  </h2>

                  <p className="mt-3 leading-7 text-slate-600">
                    {item.text}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* Business Gas Image Section */}
        <section className="bg-white py-20">

          <div className="mx-auto max-w-7xl px-6">

            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

              <div className="overflow-hidden rounded-[2rem]">

                <img
                  src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=85"
                  alt="Modern business workplace"
                  className="h-[450px] w-full object-cover transition duration-700 hover:scale-105"
                />

              </div>

              <div>

                <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                  Built Around Your Business
                </p>

                <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">
                  Gas Options Designed Around Your Requirements
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  Different organisations use gas in different ways. Your
                  requirements may depend on your premises, working
                  environment, equipment and day-to-day operations.
                </p>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  Our approach is designed to make it easier to explore
                  available options and understand the choices that may be
                  suitable for your business.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">

                  {[
                    "Commercial gas options",
                    "Business-focused solutions",
                    "Clear information",
                    "Simple enquiry process",
                  ].map((item) => (

                    <div
                      key={item}
                      className="flex items-center gap-3"
                    >

                      <CheckCircle2 className="h-5 w-5 shrink-0 text-blue-600" />

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

        {/* How It Works */}
        <section className="bg-slate-50 py-24">

          <div className="mx-auto max-w-7xl px-6">

            <div className="text-center">

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                How It Works
              </p>

              <h2 className="mt-4 text-4xl font-black text-slate-900">
                A straightforward process
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                Start with a simple enquiry and explore your business gas
                options through a clear and straightforward process.
              </p>

            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">

              {[
                ["01", "Tell us about your business"],
                ["02", "Review your options"],
                ["03", "Move forward with confidence"],
              ].map(([number, title]) => (

                <div
                  key={number}
                  className="rounded-3xl bg-white p-8 shadow-sm"
                >

                  <span className="font-black text-blue-600">
                    {number}
                  </span>

                  <h3 className="mt-5 text-xl font-bold text-slate-900">
                    {title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {number === "01" &&
                      "Share some basic information about your business and your gas requirements."}

                    {number === "02" &&
                      "Explore available options and review the solutions that may suit your organisation."}

                    {number === "03" &&
                      "Once you've selected an option, understand the next steps and move forward."}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* Business Gas CTA Card */}
        <section className="bg-white py-20">

          <div className="mx-auto max-w-7xl px-6">

            <div className="overflow-hidden rounded-[2rem] bg-slate-950">

              <div className="grid lg:grid-cols-2 lg:items-center">

                <div className="relative h-[350px] lg:h-full">

                  <img
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85"
                    alt="Business hospitality environment"
                    className="absolute inset-0 h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-slate-950/50" />

                </div>

                <div className="p-10 text-white md:p-14">

                  <Flame className="h-10 w-10 text-blue-400" />

                  <h2 className="mt-6 text-3xl font-bold md:text-4xl">
                    Explore Business Gas Options
                  </h2>

                  <p className="mt-4 max-w-2xl leading-8 text-slate-300">
                    Tell us about your business requirements and start
                    exploring suitable options for your organisation.
                  </p>

                  <Link
                    href="/quote"
                    className="mt-7 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white hover:bg-blue-700"
                  >
                    Get My Gas Quote
                    <ArrowRight className="h-5 w-5" />
                  </Link>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* Benefits */}
        <section className="bg-slate-50 py-24">

          <div className="mx-auto max-w-7xl px-6">

            <div className="max-w-3xl">

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                Benefits
              </p>

              <h2 className="mt-4 text-4xl font-black text-slate-900">
                A simpler approach to business gas
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                We aim to make the process easier by helping businesses
                explore options without unnecessary complexity.
              </p>

            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

              {[
                "Business-focused solutions",
                "Clear information",
                "Simple enquiry process",
                "Dedicated support",
              ].map((item) => (

                <div
                  key={item}
                  className="rounded-3xl bg-white p-7 shadow-sm"
                >

                  <CheckCircle2
                    size={22}
                    className="text-blue-600"
                  />

                  <h3 className="mt-5 font-bold text-slate-900">
                    {item}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    Explore your requirements and understand your available
                    business gas options.
                  </p>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* Additional Gas Options */}
        <section className="bg-white py-20">

          <div className="mx-auto max-w-7xl px-6">

            <div className="grid gap-6 md:grid-cols-2">

              <Link
                href="/energy/electricity"
                className="group rounded-3xl border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-1 hover:shadow-lg"
              >

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Flame className="h-6 w-6" />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  Business Energy
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  Explore business energy solutions including electricity and
                  gas options through one convenient enquiry.
                </p>

                <span className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-600">
                  Explore Energy
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>

              </Link>

              <Link
                href="/energy/electricity"
                className="group rounded-3xl border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-1 hover:shadow-lg"
              >

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <CheckCircle2 className="h-6 w-6" />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  Business Electricity
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  Explore electricity options from different providers and
                  find a solution aligned with your business needs.
                </p>

                <span className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-600">
                  Explore Electricity
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>

              </Link>

            </div>

          </div>

        </section>

        {/* CTA */}
        <section className="px-6 py-24">

          <div className="mx-auto max-w-5xl rounded-[2rem] bg-slate-950 p-10 text-center md:p-16">

            <h2 className="text-4xl font-black text-white md:text-5xl">
              Need help with business gas?
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-slate-400">
              Start your enquiry today and tell us what your organisation
              needs. We'll help you explore suitable business gas options.
            </p>

            <Link
              href="/quote"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-blue-600 px-7 py-4 font-bold text-white hover:bg-blue-500"
            >
              Get a Free Quote
              <ArrowRight size={18} />
            </Link>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}