import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function QuoteSection() {
  return (
    <section className="px-6 py-24">

      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-blue-600">

        <div className="grid gap-12 p-8 md:p-12 lg:grid-cols-2 lg:p-16">

          <div className="flex flex-col justify-center">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-100">
              Get Started
            </p>

            <h2 className="mt-5 text-4xl font-black text-white md:text-5xl">
              Let's find the right solution for your business.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Tell us what you need and we'll help you
              explore the available options.
            </p>

            <div className="mt-8 space-y-4">

              {[
                "Quick enquiry",
                "Simple process",
                "Business-focused support",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-white"
                >
                  <CheckCircle2 size={19} />
                  {item}
                </div>
              ))}

            </div>

          </div>

          <div className="rounded-3xl bg-white p-8">

            <h3 className="text-2xl font-black text-slate-900">
              Request a free quote
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Start by telling us a little about your business.
            </p>

            <form className="mt-7 space-y-4">

              <input
                type="text"
                placeholder="Business Name"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500"
              />

              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500"
              />

              <input
                type="email"
                placeholder="Business Email"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500"
              />

              <select className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-600 outline-none focus:border-blue-500">
                <option value="">
                  Select a service
                </option>
                <option value="energy">
                  Business Energy
                </option>
                <option value="connectivity">
                  Connectivity
                </option>
                <option value="water">
                  Business Water
                </option>
                <option value="card">
                  Card Machine
                </option>
              </select>

              <Link
                href="/quote"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-4 font-bold text-white transition hover:bg-slate-800"
              >
                Continue
                <ArrowRight size={18} />
              </Link>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}