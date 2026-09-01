"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  Wifi,
  Droplets,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">

      {/* Background Effects */}
      <div className="absolute inset-0">

        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-3xl" />

        <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-3xl" />

      </div>

      <div className="relative mx-auto grid min-h-[720px] max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-2">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-blue-300">

            <span className="h-2 w-2 rounded-full bg-blue-400" />

            Smart business solutions

          </div>

          <h1 className="max-w-3xl text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">

            Better Solutions.
            
            <span className="block text-blue-400">
              Better Business.
            </span>

          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">

            Discover smarter solutions for your business
            across energy, connectivity, water and payment
            services.

          </p>

          <div className="mt-9 flex flex-wrap gap-4">

            <Link
              href="/quote"
              className="group flex items-center gap-3 rounded-full bg-blue-600 px-7 py-4 font-bold text-white transition hover:bg-blue-500"
            >

              Get a Free Quote

              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />

            </Link>

            <Link
              href="/services"
              className="rounded-full border border-white/20 px-7 py-4 font-bold text-white transition hover:bg-white/10"
            >
              Explore Services
            </Link>

          </div>

          <div className="mt-9 flex flex-wrap gap-6">

            <div className="flex items-center gap-2 text-sm text-slate-300">
              <CheckCircle2
                size={18}
                className="text-blue-400"
              />
              Business focused
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-300">
              <CheckCircle2
                size={18}
                className="text-blue-400"
              />
              Simple process
            </div>

          </div>

        </motion.div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="relative hidden lg:block"
        >

          <div className="relative mx-auto h-[540px] w-[540px]">

            <div className="absolute inset-5 rounded-full border border-blue-400/10" />

            <div className="absolute inset-16 rounded-full border border-blue-400/10" />

            <div className="absolute inset-28 rounded-full bg-blue-600/20 blur-3xl" />

            {/* Main Card */}
            <div className="absolute left-1/2 top-1/2 w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">

              <p className="text-sm font-medium text-slate-300">
                BUSINESS SOLUTIONS
              </p>

              <h3 className="mt-3 text-3xl font-black text-white">
                One place.
                <br />
                Multiple solutions.
              </h3>

              <div className="mt-7 space-y-3">

                <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-4">
                  <div className="rounded-xl bg-blue-500/20 p-3">
                    <Zap className="text-blue-400" size={21} />
                  </div>
                  <span className="font-semibold text-white">
                    Energy
                  </span>
                </div>

                <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-4">
                  <div className="rounded-xl bg-blue-500/20 p-3">
                    <Wifi className="text-blue-400" size={21} />
                  </div>
                  <span className="font-semibold text-white">
                    Connectivity
                  </span>
                </div>

                <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-4">
                  <div className="rounded-xl bg-blue-500/20 p-3">
                    <Droplets className="text-blue-400" size={21} />
                  </div>
                  <span className="font-semibold text-white">
                    Water
                  </span>
                </div>

              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}