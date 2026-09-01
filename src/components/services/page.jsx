import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceGrid from "@/components/services/ServiceGrid";

export const metadata = {
  title: "Business Services | Your Brand",
  description:
    "Explore business energy, connectivity, water and payment solutions.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main>

        <ServiceHero
          badge="Our Services"
          title="Business solutions"
          highlight="made simpler."
          description="Explore practical solutions for energy, connectivity, water and payment services. Find the right options for your organisation."
        />

        {/* Services */}
        <section className="bg-white py-24">

          <div className="mx-auto max-w-7xl px-6">

            <div className="max-w-3xl">

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                What We Offer
              </p>

              <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">
                Solutions for the way your business works
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                From keeping your business connected to managing
                essential services, explore the solutions available
                through our platform.
              </p>

            </div>

            <div className="mt-14">
              <ServiceGrid />
            </div>

          </div>

        </section>

        {/* Process */}
        <section className="bg-slate-50 py-24">

          <div className="mx-auto max-w-7xl px-6">

            <div className="text-center">

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                How It Works
              </p>

              <h2 className="mt-4 text-4xl font-black text-slate-900">
                Simple from start to finish
              </h2>

            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">

              {[
                {
                  number: "01",
                  title: "Tell us what you need",
                  text: "Share some information about your business and requirements.",
                },
                {
                  number: "02",
                  title: "Explore your options",
                  text: "Review suitable solutions based on your business needs.",
                },
                {
                  number: "03",
                  title: "Move forward",
                  text: "Choose the option that works best for your organisation.",
                },
              ].map((item) => (

                <div
                  key={item.number}
                  className="rounded-3xl border border-slate-200 bg-white p-8"
                >

                  <span className="text-sm font-black text-blue-600">
                    {item.number}
                  </span>

                  <h3 className="mt-6 text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {item.text}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* Benefits */}
        <section className="bg-white py-24">

          <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2">

            <div>

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                Why Work With Us
              </p>

              <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">
                One place for multiple business needs
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                We aim to make the process of exploring business
                services easier, clearer and more convenient.
              </p>

            </div>

            <div className="grid gap-4 sm:grid-cols-2">

              {[
                "Simple enquiry process",
                "Business-focused solutions",
                "Multiple service categories",
                "Dedicated support",
                "Clear information",
                "Flexible options",
              ].map((benefit) => (

                <div
                  key={benefit}
                  className="flex items-center gap-3 rounded-2xl border border-slate-200 p-5"
                >

                  <CheckCircle2
                    size={20}
                    className="shrink-0 text-blue-600"
                  />

                  <span className="text-sm font-semibold text-slate-700">
                    {benefit}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* CTA */}
        <section className="px-6 pb-24">

          <div className="mx-auto max-w-7xl rounded-[2rem] bg-blue-600 p-10 text-center md:p-16">

            <h2 className="text-4xl font-black text-white md:text-5xl">
              Ready to explore your options?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100">
              Tell us what your business needs and take the first
              step towards finding a suitable solution.
            </p>

            <Link
              href="/quote"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 font-bold text-slate-900 transition hover:bg-slate-100"
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