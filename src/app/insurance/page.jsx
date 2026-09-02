"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Building2,
  Users,
  BriefcaseBusiness,
  FileCheck2,
  LockKeyhole,
  HeartHandshake,
  ClipboardCheck,
  Scale,
} from "lucide-react";

export default function InsurancePage() {
  const insuranceOptions = [
    {
      icon: ShieldCheck,
      title: "Business Insurance",
      description:
        "Explore insurance solutions designed to help protect your business against a range of potential risks.",
    },
    {
      icon: Building2,
      title: "Property Cover",
      description:
        "Consider protection for business premises, buildings, contents and other important business assets.",
    },
    {
      icon: Users,
      title: "Employers' Liability",
      description:
        "Explore cover designed for businesses with employees and their associated responsibilities.",
    },
    {
      icon: BriefcaseBusiness,
      title: "Professional Cover",
      description:
        "Insurance options that may help protect professional businesses against specific risks and claims.",
    },
  ];

  const benefits = [
    "Business-focused insurance options",
    "Solutions based around your requirements",
    "Simple enquiry process",
    "Explore different types of cover",
    "Clear information before making a decision",
    "Support throughout the process",
  ];

  const protectionAreas = [
    {
      icon: Building2,
      title: "Business Property",
      description:
        "Explore options for protecting premises, equipment, contents and other valuable business assets.",
    },
    {
      icon: Users,
      title: "People & Employees",
      description:
        "Consider insurance solutions relevant to businesses that employ staff and have workplace responsibilities.",
    },
    {
      icon: BriefcaseBusiness,
      title: "Professional Risks",
      description:
        "Explore cover that may be relevant to professional services, advice-based businesses and specialist work.",
    },
    {
      icon: ShieldCheck,
      title: "Day-to-Day Operations",
      description:
        "Look at insurance options that take into account the risks connected with your everyday business activities.",
    },
  ];

  const considerations = [
    {
      icon: ClipboardCheck,
      title: "Your Business Activities",
      text: "The type of work your business carries out can influence the insurance options and level of protection that may be appropriate.",
    },
    {
      icon: Building2,
      title: "Your Premises & Assets",
      text: "Consider the buildings, equipment, stock, contents and other assets that are important to keeping your business operating.",
    },
    {
      icon: Users,
      title: "Your People",
      text: "If you employ people, your responsibilities as an employer can be an important part of your insurance considerations.",
    },
    {
      icon: Scale,
      title: "Your Individual Requirements",
      text: "Every organisation is different, so insurance requirements should be considered around your particular circumstances.",
    },
  ];

  const businessTypes = [
    "Offices and professional businesses",
    "Retail and customer-facing businesses",
    "Hospitality and service businesses",
    "Trades and commercial organisations",
    "Growing businesses with employees",
    "Established companies with valuable assets",
  ];

  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-white">

        {/* Hero */}
        <section className="relative bg-slate-950">

          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
            <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:px-8 lg:py-32">

            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

              <div className="max-w-4xl">

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm font-semibold text-blue-300"
                >
                  <span className="h-2 w-2 rounded-full bg-blue-400" />
                  Business Insurance
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="text-5xl font-black leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl"
                >
                  Insurance solutions
                  <span className="block text-blue-500">
                    for your business.
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl"
                >
                  Explore business insurance options designed to help you
                  protect your people, property, assets and day-to-day
                  operations.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="mt-9 flex flex-col gap-4 sm:flex-row"
                >
                  <Link
                    href="/quote"
                    className="inline-flex items-center justify-center gap-3 rounded-full bg-blue-600 px-7 py-4 font-bold text-white transition hover:bg-blue-700"
                  >
                    Explore Insurance Options
                    <ArrowRight size={19} />
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full border border-slate-700 px-7 py-4 font-bold text-white transition hover:border-slate-500 hover:bg-white/5"
                  >
                    Talk to Us
                  </Link>
                </motion.div>

              </div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1400&q=85"
                    alt="Business professionals discussing business protection and planning"
                    className="h-[420px] w-full object-cover"
                  />
                </div>

                <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-white/10 bg-white p-5 shadow-xl sm:block">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white">
                      <ShieldCheck size={23} />
                    </div>

                    <div>
                      <p className="text-sm font-bold text-slate-950">
                        Business Protection
                      </p>
                      <p className="mt-1 text-xs text-slate-500">
                        Explore your options
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>

          </div>
        </section>

        {/* Introduction */}
        <section className="bg-white py-20 sm:py-24">

          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
                  Protect your business
                </p>

                <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                  Cover designed around your business.
                </h2>

                <p className="mt-6 leading-8 text-slate-600">
                  Every business faces different risks. The right insurance
                  depends on your industry, operations, people, property and
                  individual circumstances.
                </p>

                <p className="mt-4 leading-8 text-slate-600">
                  We make it easier to explore different types of business
                  insurance so you can better understand the options available
                  to you.
                </p>

                <p className="mt-4 leading-8 text-slate-600">
                  Whether you are protecting your premises, supporting your
                  employees or considering professional risks, understanding
                  your available options can help you make a more informed
                  decision about your business protection.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="rounded-3xl bg-slate-50 p-8 sm:p-10"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white">
                  <FileCheck2 size={28} />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-950">
                  Why explore your options?
                </h3>

                <ul className="mt-6 space-y-4">
                  {benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-3 text-slate-600"
                    >
                      <CheckCircle2
                        size={20}
                        className="mt-0.5 shrink-0 text-blue-600"
                      />

                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

            </div>

          </div>
        </section>

        {/* Business Protection Areas */}
        <section className="bg-white pb-20 sm:pb-24">

          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="overflow-hidden rounded-[2rem]"
              >
                <img
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=85"
                  alt="Business professionals reviewing important business information"
                  className="h-[480px] w-full object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
                  Business protection
                </p>

                <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                  Consider the areas that matter most.
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Business insurance can involve several different areas of
                  protection. The options you consider will depend on how your
                  business operates and the risks connected with your work.
                </p>

                <div className="mt-8 space-y-5">
                  {protectionAreas.map((area) => {
                    const Icon = area.icon;

                    return (
                      <div
                        key={area.title}
                        className="flex gap-4"
                      >
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                          <Icon size={21} />
                        </div>

                        <div>
                          <h3 className="font-bold text-slate-950">
                            {area.title}
                          </h3>

                          <p className="mt-1 text-sm leading-6 text-slate-600">
                            {area.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>

            </div>

          </div>
        </section>

        {/* Insurance Options */}
        <section className="bg-slate-50 py-20 sm:py-24">

          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="mx-auto max-w-2xl text-center">

              <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
                Insurance options
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Explore business cover
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                Explore different types of insurance that may be relevant to
                your business and its requirements.
              </p>

            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

              {insuranceOptions.map((option, index) => {
                const Icon = option.icon;

                return (
                  <motion.div
                    key={option.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                    whileHover={{ y: -6 }}
                    className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-shadow hover:shadow-xl"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                      <Icon size={27} />
                    </div>

                    <h3 className="mt-6 text-xl font-bold text-slate-950">
                      {option.title}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      {option.description}
                    </p>
                  </motion.div>
                );
              })}

            </div>

          </div>
        </section>

        {/* Insurance Considerations */}
        <section className="bg-white py-20 sm:py-24">

          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
                  What to consider
                </p>

                <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                  Insurance requirements can vary from business to business.
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  There is no single approach that works for every organisation.
                  Your activities, premises, employees, assets and professional
                  responsibilities can all influence the types of insurance
                  you may wish to explore.
                </p>

                <p className="mt-4 leading-8 text-slate-600">
                  Taking time to understand these areas can make it easier to
                  identify relevant options and ask the right questions when
                  reviewing your business insurance.
                </p>
              </motion.div>

              <div className="grid gap-5 sm:grid-cols-2">
                {considerations.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 25 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.08,
                      }}
                      className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
                        <Icon size={23} />
                      </div>

                      <h3 className="mt-5 text-lg font-bold text-slate-950">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-slate-600">
                        {item.text}
                      </p>
                    </motion.div>
                  );
                })}
              </div>

            </div>

          </div>
        </section>

        {/* Business Types */}
        <section className="bg-slate-50 py-20 sm:py-24">

          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
                  For different businesses
                </p>

                <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                  Explore protection relevant to the way you operate.
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Different businesses face different circumstances. Whether
                  you operate from an office, manage a retail premises or run a
                  growing commercial organisation, your insurance requirements
                  should reflect your activities.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {businessTypes.map((type) => (
                    <div
                      key={type}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2
                        size={20}
                        className="mt-0.5 shrink-0 text-blue-600"
                      />

                      <span className="text-sm leading-6 text-slate-700">
                        {type}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="overflow-hidden rounded-[2rem]"
              >
                <img
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1400&q=85"
                  alt="Professional business team working together"
                  className="h-[460px] w-full object-cover"
                />
              </motion.div>

            </div>

          </div>
        </section>

        {/* Process */}
        <section className="bg-white py-20 sm:py-24">

          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="mx-auto max-w-2xl text-center">

              <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
                Simple process
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Find the right direction for your business
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                Getting started does not need to be complicated. Provide some
                information about your business, explore relevant options and
                decide how you would like to proceed.
              </p>

            </div>

            <div className="mt-14 grid gap-8 md:grid-cols-3">

              {[
                {
                  number: "01",
                  title: "Tell us about your business",
                  text: "Provide some basic information about your business and the type of protection you are looking for.",
                },
                {
                  number: "02",
                  title: "Explore suitable options",
                  text: "Review insurance options that may be relevant to your business requirements.",
                },
                {
                  number: "03",
                  title: "Choose with confidence",
                  text: "Consider the available information and select the cover that best fits your needs.",
                },
              ].map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="rounded-3xl border border-slate-200 p-8"
                >
                  <span className="text-sm font-black text-blue-600">
                    {step.number}
                  </span>

                  <h3 className="mt-5 text-xl font-bold text-slate-950">
                    {step.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {step.text}
                  </p>
                </motion.div>
              ))}

            </div>

          </div>
        </section>

        {/* Additional Trust Section */}
        <section className="bg-slate-50 py-20 sm:py-24">

          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="mx-auto max-w-3xl text-center">

              <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
                Business-first approach
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Make insurance easier to understand.
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Business insurance can involve different types of cover and
                different considerations. Our approach is focused on helping
                you explore your options in a straightforward way so you can
                better understand what may be relevant to your organisation.
              </p>

            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">

              {[
                {
                  icon: LockKeyhole,
                  title: "Protection-focused",
                  text: "Explore insurance options around the people, property and activities that matter to your business.",
                },
                {
                  icon: HeartHandshake,
                  title: "Straightforward support",
                  text: "Get help understanding your options and the next steps in the enquiry process.",
                },
                {
                  icon: FileCheck2,
                  title: "Clear information",
                  text: "Review relevant information before deciding how you want to move forward.",
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    className="rounded-3xl bg-white p-8 shadow-sm"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                      <Icon size={26} />
                    </div>

                    <h3 className="mt-6 text-xl font-bold text-slate-950">
                      {item.title}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      {item.text}
                    </p>
                  </motion.div>
                );
              })}

            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="bg-slate-950 py-20 sm:py-24">

          <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">

            <h2 className="text-3xl font-black tracking-tight text-white sm:text-5xl">
              Ready to explore your insurance options?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-7 text-slate-300">
              Tell us about your business and what you need help protecting.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">

              <Link
                href="/quote"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-blue-600 px-7 py-4 font-bold text-white transition hover:bg-blue-700"
              >
                Get a Quote
                <ArrowRight size={19} />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-slate-700 px-7 py-4 font-bold text-white transition hover:border-slate-500 hover:bg-white/5"
              >
                Contact Us
              </Link>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}