import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Business Electricity",
    text: "Explore electricity solutions.",
    href: "/energy/electricity",
  },
  {
    title: "Business Gas",
    text: "Explore gas solutions.",
    href: "/energy/gas",
  },
  {
    title: "Business Broadband",
    text: "Reliable business broadband.",
    href: "/connectivity/broadband",
  },
  {
    title: "Business Phone",
    text: "Professional phone solutions.",
    href: "/connectivity/phone-line",
  },
];

export default function AdditionalServices() {
  return (
    <section className="bg-slate-950 py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="max-w-2xl">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
            Explore More
          </p>

          <h2 className="mt-4 text-4xl font-black text-white md:text-5xl">
            More solutions for your business
          </h2>

        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

          {services.map((service) => (
            <Link
              href={service.href}
              key={service.title}
              className="group rounded-3xl border border-white/10 bg-white/5 p-7 transition hover:-translate-y-1 hover:bg-white/10"
            >

              <div className="flex items-start justify-between">

                <h3 className="font-bold text-white">
                  {service.title}
                </h3>

                <ArrowUpRight
                  size={20}
                  className="text-slate-500 transition group-hover:text-blue-400"
                />

              </div>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                {service.text}
              </p>

            </Link>
          ))}

        </div>

      </div>

    </section>
  );
}