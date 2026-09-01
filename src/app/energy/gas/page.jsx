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

        <section className="bg-white py-24">

          <div className="mx-auto max-w-7xl px-6">

            <div className="grid gap-14 lg:grid-cols-2">

              <div>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  <Flame size={27} />
                </div>

                <h2 className="mt-7 text-4xl font-black text-slate-900">
                  Explore your business gas options
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  Find a suitable approach for your organisation
                  by understanding the available business gas options.
                </p>

              </div>

              <div className="space-y-4">

                {[
                  "Business-focused solutions",
                  "Clear and simple information",
                  "Options based on your requirements",
                  "Support during the process",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-4 rounded-2xl border border-slate-200 p-5"
                  >

                    <CheckCircle2
                      size={21}
                      className="text-blue-600"
                    />

                    <span className="font-semibold text-slate-700">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </section>

        <section className="bg-slate-50 py-24">

          <div className="mx-auto max-w-7xl px-6">

            <div className="text-center">

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                How It Works
              </p>

              <h2 className="mt-4 text-4xl font-black text-slate-900">
                A straightforward process
              </h2>

            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">

              {[
                ["01", "Tell us about your business"],
                ["02", "Review your options"],
                ["03", "Move forward with confidence"],
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

          <div className="mx-auto max-w-5xl rounded-[2rem] bg-slate-950 p-10 text-center md:p-16">

            <h2 className="text-4xl font-black text-white md:text-5xl">
              Need help with business gas?
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-lg text-slate-400">
              Start your enquiry today and tell us what your
              organisation needs.
            </p>

            <Link
              href="/quote"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-blue-600 px-7 py-4 font-bold text-white"
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