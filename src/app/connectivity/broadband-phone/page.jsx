import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServiceHero from "@/components/services/ServiceHero";
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  Wifi,
} from "lucide-react";

const benefits = [
  {
    title: "Reliable Broadband",
    description:
      "Keep your team connected with broadband options designed around your business requirements.",
  },
  {
    title: "Business Phone",
    description:
      "Give customers and colleagues a professional way to communicate with your business.",
  },
  {
    title: "Flexible Solutions",
    description:
      "Explore connectivity options that can be matched to the size and needs of your organisation.",
  },
  {
    title: "One Connected Business",
    description:
      "Bring internet and business communication together to support everyday operations.",
  },
];

const broadbandFeatures = [
  "Reliable business connectivity",
  "Support for cloud applications",
  "Video meetings and online communication",
  "Flexible options for growing teams",
];

const phoneFeatures = [
  "Professional business calling",
  "Customer communication",
  "Team and supplier communication",
  "Flexible business phone options",
];

export default function BroadbandPhonePage() {
  return (
    <>
      <Navbar />

      <main>
        <ServiceHero
          badge="Broadband & Business Phone"
          title="Stay Connected"
          highlight="With Confidence"
          description="Explore business broadband and phone solutions designed to help your team communicate, work efficiently and stay connected with customers."
        />

        {/* Introduction */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Business Connectivity
              </span>

              <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
                Broadband and phone solutions for your business
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                Reliable connectivity and communication are important for
                modern businesses. Explore broadband and business phone
                solutions that can support your team, customers and everyday
                operations.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                "Keep your business connected",
                "Support everyday communication",
                "Choose solutions around your needs",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
                >
                  <CheckCircle2 className="h-8 w-8 text-blue-600" />

                  <h3 className="mt-5 text-xl font-bold text-slate-900">
                    {item}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    Find connectivity options designed to support the way your
                    business works.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Broadband and Phone */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Broadband */}
              <div className="overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-slate-200">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85"
                    alt="Business broadband and network technology"
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-slate-950/30" />

                  <div className="absolute left-6 top-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-blue-600 shadow-lg">
                    <Wifi className="h-6 w-6" />
                  </div>
                </div>

                <div className="p-8 md:p-10">
                  <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                    Business Broadband
                  </span>

                  <h2 className="mt-3 text-3xl font-bold text-slate-900">
                    Reliable broadband for your business
                  </h2>

                  <p className="mt-4 leading-7 text-slate-600">
                    A dependable internet connection can help your team work
                    efficiently, use cloud applications, attend online
                    meetings and stay connected throughout the working day.
                  </p>

                  <div className="mt-7 space-y-3">
                    {broadbandFeatures.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-blue-600" />

                        <span className="text-sm font-medium text-slate-700">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/connectivity/broadband"
                    className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
                  >
                    Explore Broadband
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Phone */}
              <div className="overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-slate-200">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=1200&q=85"
                    alt="Business communication and phone meeting"
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-slate-950/30" />

                  <div className="absolute left-6 top-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-blue-600 shadow-lg">
                    <Phone className="h-6 w-6" />
                  </div>
                </div>

                <div className="p-8 md:p-10">
                  <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                    Business Phone
                  </span>

                  <h2 className="mt-3 text-3xl font-bold text-slate-900">
                    Professional business communication
                  </h2>

                  <p className="mt-4 leading-7 text-slate-600">
                    Help customers, suppliers and your team stay connected with
                    a business phone solution designed around your organisation.
                  </p>

                  <div className="mt-7 space-y-3">
                    {phoneFeatures.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-blue-600" />

                        <span className="text-sm font-medium text-slate-700">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/connectivity/phone-line"
                    className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
                  >
                    Explore Phone Solutions
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Benefits
              </span>

              <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
                Connectivity built around your business
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Explore practical connectivity options that can support
                communication, productivity and day-to-day business needs.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-slate-900">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why connectivity matters */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                  Why It Matters
                </span>

                <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
                  Keep your team and customers connected
                </h2>

                <p className="mt-5 leading-7 text-slate-600">
                  Your internet and phone services play an important role in
                  how your business operates. The right setup can make it
                  easier for your team to communicate and complete everyday
                  work.
                </p>

                <div className="mt-8 space-y-4">
                  {[
                    "Support customer enquiries",
                    "Stay connected with suppliers",
                    "Help teams communicate",
                    "Support online business operations",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4"
                    >
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-blue-600" />

                      <span className="text-sm font-medium text-slate-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="overflow-hidden rounded-[2rem]">
                <img
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85"
                  alt="Business team working together and communicating"
                  className="h-[500px] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Get Started
            </span>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
              Ready to improve your business connectivity?
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Tell us what your business needs and explore broadband and phone
              solutions that could work for your organisation.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 font-semibold text-white transition hover:bg-blue-700"
              >
                Get a Free Quote
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-7 py-3.5 font-semibold text-slate-800 transition hover:bg-slate-50"
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