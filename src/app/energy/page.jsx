import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  Flame,
} from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServiceHero from "@/components/services/ServiceHero";

export const metadata = {
  title: "Business Energy | Your Brand",
  description:
    "Explore business electricity and gas solutions.",
};

export default function EnergyPage() {
  return (
    <>
      <Navbar />

      <main>
        <ServiceHero
          badge="Business Energy"
          title="Power your business"
          highlight="with confidence."
          description="Explore electricity and gas solutions designed around your organisation's requirements."
        />

        {/* Why Compare */}
        <section className="bg-white py-20">
          <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:items-center">
            
            <div>
              <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
                Why Compare?
              </span>

              <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-5xl">
                Explore Energy Options With Confidence
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Business energy requirements can vary considerably. Comparing
                available options can help you understand what is available
                and identify solutions that fit your circumstances.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Explore electricity and gas options",
                  "Compare solutions around your requirements",
                  "Understand your available choices",
                  "Get support with the next steps",
                ].map((item) => (
                  <div key={item} className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-600" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ENERGY IMAGE */}
            <div className="relative overflow-hidden rounded-[2rem] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=85"
                alt="Business energy and electricity infrastructure"
                className="h-[460px] w-full object-cover transition duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />

              <div className="absolute bottom-0 left-0 p-8 text-white">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600">
                  <Zap className="h-6 w-6" />
                </div>

                <h3 className="mt-5 text-2xl font-bold">
                  Business Energy Solutions
                </h3>

                <p className="mt-2 max-w-md text-slate-200">
                  Explore suitable electricity and gas options for your
                  organisation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Energy Options */}
        <section className="bg-slate-50 py-24">
          <div className="mx-auto max-w-7xl px-6">
            
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                Energy Services
              </p>

              <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">
                Choose the energy service you need
              </h2>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2">

              {/* ELECTRICITY */}
              <Link
                href="/energy/electricity"
                className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1200&q=85"
                    alt="Business electricity and power"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                    <Zap size={27} />
                  </div>

                  <h3 className="mt-8 text-2xl font-bold text-slate-900">
                    Business Electricity
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    Explore electricity solutions suitable for your
                    organisation.
                  </p>

                  <div className="mt-7 flex items-center gap-2 font-bold text-blue-600">
                    Explore Electricity
                    <ArrowRight
                      size={18}
                      className="transition group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </Link>

              {/* GAS */}
              <Link
                href="/energy/gas"
                className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=85"
                    alt="Business energy and gas infrastructure"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                    <Flame size={27} />
                  </div>

                  <h3 className="mt-8 text-2xl font-bold text-slate-900">
                    Business Gas
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    Explore gas options for your business requirements.
                  </p>

                  <div className="mt-7 flex items-center gap-2 font-bold text-blue-600">
                    Explore Gas
                    <ArrowRight
                      size={18}
                      className="transition group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </Link>

            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">

            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                Benefits
              </p>

              <h2 className="mt-4 text-4xl font-black text-slate-900">
                A simpler approach to business energy
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

        {/* Energy Image Content */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-6">

            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

              <div className="overflow-hidden rounded-[2rem]">
                <img
                  src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1400&q=85"
                  alt="Modern energy infrastructure"
                  className="h-[480px] w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>

              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                  Business Energy
                </p>

                <h2 className="mt-4 text-3xl font-black text-slate-900 md:text-5xl">
                  Energy Solutions Built Around Your Business
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  Energy is an essential part of keeping your business
                  running. From offices and retail premises to hospitality,
                  manufacturing and professional services, every organisation
                  has different energy requirements.
                </p>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  We make it easier to explore electricity and gas options
                  through a straightforward comparison process designed around
                  your business circumstances.
                </p>

                <div className="mt-8 space-y-4">

                  {[
                    "Explore electricity options",
                    "Explore business gas solutions",
                    "Understand your available choices",
                    "Get support throughout the process",
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

        {/* Additional Energy Options */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6">

            <div className="mb-12 text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                Explore More
              </p>

              <h2 className="mt-4 text-3xl font-black text-slate-900 md:text-5xl">
                Explore Our Energy Services
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                Explore our dedicated electricity and gas services to find
                information suited to your business requirements.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">

              <Link
                href="/energy/electricity"
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=85"
                    alt="Electricity and renewable energy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-8">

                  <h3 className="text-2xl font-bold text-slate-900">
                    Business Electricity
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    Explore electricity options from different providers and
                    find a solution aligned with your business needs.
                  </p>

                  <span className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-600">
                    Explore Electricity
                    <ArrowRight className="h-4 w-4" />
                  </span>

                </div>
              </Link>

              <Link
                href="/energy/gas"
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=85"
                    alt="Industrial gas and energy services"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-8">

                  <h3 className="text-2xl font-bold text-slate-900">
                    Business Gas
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    Compare business gas options without spending hours
                    contacting different suppliers.
                  </p>

                  <span className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-600">
                    Explore Gas
                    <ArrowRight className="h-4 w-4" />
                  </span>

                </div>
              </Link>

            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white px-6 py-24">

          <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-slate-950">

            <div className="grid lg:grid-cols-2">

              <div className="relative min-h-[300px]">

                <img
                  src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1200&q=85"
                  alt="Business energy solutions"
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
                  Looking for a business energy solution?
                </h2>

                <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400 lg:mx-0">
                  Start with a simple enquiry and tell us about your business
                  requirements.
                </p>

                <Link
                  href="/quote"
                  className="mt-8 inline-flex items-center gap-3 rounded-full bg-blue-600 px-7 py-4 font-bold text-white hover:bg-blue-500"
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