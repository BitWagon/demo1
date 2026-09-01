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

              <div className="rounded-[2rem] bg-slate-50 p-8">

                <h3 className="text-2xl font-bold text-slate-900">
                  Why explore your options?
                </h3>

                <div className="mt-7 space-y-5">

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

          </div>

        </section>

        <section className="bg-slate-50 py-24">

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
                  className="rounded-3xl bg-white p-8"
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

        <section className="px-6 py-24">

          <div className="mx-auto max-w-5xl rounded-[2rem] bg-blue-600 p-10 text-center md:p-16">

            <h2 className="text-4xl font-black text-white md:text-5xl">
              Ready to explore electricity options?
            </h2>

            <Link
              href="/quote"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 font-bold text-slate-900"
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