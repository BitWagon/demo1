"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Zap,
  Wifi,
  Droplets,
  CreditCard,
} from "lucide-react";

const services = [
  {
    title: "Business Energy",
    description:
      "Explore electricity and gas solutions for your business.",
    icon: Zap,
    href: "/energy",
  },
  {
    title: "Connectivity",
    description:
      "Reliable broadband and communication solutions.",
    icon: Wifi,
    href: "/connectivity",
  },
  {
    title: "Business Water",
    description:
      "Find suitable water and waste solutions.",
    icon: Droplets,
    href: "/water",
  },
  {
    title: "Card Machines",
    description:
      "Modern payment solutions for your business.",
    icon: CreditCard,
    href: "/card-machine",
  },
];

export default function ServiceCategories() {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="max-w-2xl">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
            Our Services
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
            Everything your business needs
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Explore our range of business solutions designed
            to simplify your everyday operations.
          </p>

        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {services.map((service, index) => {

            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >

                <Link
                  href={service.href}
                  className="group block h-full rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
                >

                  <div className="flex items-center justify-between">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                      <Icon size={26} />
                    </div>

                    <ArrowUpRight
                      size={24}
                      className="text-slate-300 transition group-hover:text-blue-600"
                    />

                  </div>

                  <h3 className="mt-8 text-xl font-bold text-slate-900">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {service.description}
                  </p>

                  <div className="mt-6 text-sm font-bold text-blue-600">
                    Learn More →
                  </div>

                </Link>

              </motion.div>
            );

          })}

        </div>

      </div>

    </section>
  );
}