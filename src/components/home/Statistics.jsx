"use client";

import { motion } from "framer-motion";

const statistics = [
  {
    number: "10K+",
    label: "Businesses Supported",
  },
  {
    number: "50+",
    label: "Providers",
  },
  {
    number: "15+",
    label: "Years Experience",
  },
  {
    number: "98%",
    label: "Customer Satisfaction",
  },
];

export default function Statistics() {
  return (
    <section className="bg-slate-950 py-20">

      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {statistics.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
              }}
              className="text-center"
            >

              <div className="text-5xl font-black text-white">
                {stat.number}
              </div>

              <p className="mt-3 text-sm text-slate-400">
                {stat.label}
              </p>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}