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

        {/* Energy Options */}
        <section className="bg-white py-24">

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

              <Link
                href="/energy/electricity"
                className="group rounded-[2rem] border border-slate-200 p-8 transition hover:-translate-y-2 hover:shadow-xl"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  <Zap size={27} />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-slate-900">
                  Business Electricity
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  Explore electricity solutions suitable for
                  your organisation.
                </p>

                <div className="mt-7 flex items-center gap-2 font-bold text-blue-600">
                  Explore Electricity
                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />
                </div>

              </Link>

              <Link
                href="/energy/gas"
                className="group rounded-[2rem] border border-slate-200 p-8 transition hover:-translate-y-2 hover:shadow-xl"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  <Flame size={27} />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-slate-900">
                  Business Gas
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  Explore gas options for your business
                  requirements.
                </p>

                <div className="mt-7 flex items-center gap-2 font-bold text-blue-600">
                  Explore Gas
                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />
                </div>

              </Link>

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
                  className="rounded-3xl bg-white p-7"
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

        {/* CTA */}
        <section className="bg-white px-6 py-24">

          <div className="mx-auto max-w-5xl rounded-[2rem] bg-slate-950 p-10 text-center md:p-16">

            <h2 className="text-4xl font-black text-white md:text-5xl">
              Looking for a business energy solution?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
              Start with a simple enquiry and tell us about
              your business requirements.
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