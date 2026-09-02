import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  Wifi,
} from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServiceHero from "@/components/services/ServiceHero";

export const metadata = {
  title: "Business Connectivity | Your Brand",
  description:
    "Explore broadband and business communication solutions designed to keep your organisation connected.",
};

const connectivityServices = [
  {
    id: "broadband",
    title: "Business Broadband",
    description:
      "Reliable and flexible broadband solutions designed to keep your business connected and productive.",
    icon: "wifi",
    href: "/connectivity/broadband",
  },
  {
    id: "phone-line",
    title: "Business Phone Line",
    description:
      "Professional business phone solutions that help your team stay connected with customers.",
    icon: "phone",
    href: "/connectivity/phone-line",
  },
];

export default function ConnectivityPage() {
  return (
    <>
      <Navbar />

      <main>

        <ServiceHero
          badge="Business Connectivity"
          title="Keep Your Business"
          highlight="Connected"
          description="Discover reliable broadband and business communication solutions designed to support your team, customers, and day-to-day operations."
        />

        {/* Connectivity Services */}
        <section className="bg-slate-50 py-20">

          <div className="mx-auto max-w-7xl px-6">

            <div className="max-w-2xl">

              <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Our Connectivity Services
              </span>

              <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
                Solutions that keep your business moving
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Whether you need faster broadband or a dependable business
                phone system, explore our connectivity services and find an
                option that fits your organisation.
              </p>

            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-2">

              {connectivityServices.map((service) => (
                <ServiceGridCard
                  key={service.id}
                  service={service}
                />
              ))}

            </div>

          </div>

        </section>

        {/* Why Connectivity Matters */}
        <section className="bg-white py-24">

          <div className="mx-auto max-w-7xl px-6">

            <div className="grid items-center gap-12 lg:grid-cols-2">

              <div>

                <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                  Why Connectivity Matters
                </span>

                <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
                  Stay connected. Stay productive.
                </h2>

                <p className="mt-5 leading-7 text-slate-600">
                  Modern businesses rely on fast and dependable communication.
                  A suitable connectivity setup can help your employees work
                  efficiently while giving customers a better experience.
                </p>

                <div className="mt-8 grid gap-5 sm:grid-cols-2">

                  {[
                    "Reliable connectivity",
                    "Business-focused solutions",
                    "Flexible packages",
                    "Support for growing teams",
                  ].map((item) => (

                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl border border-slate-200 p-4"
                    >

                      <CheckCircle2 className="h-5 w-5 shrink-0 text-blue-600" />

                      <span className="text-sm font-medium text-slate-700">
                        {item}
                      </span>

                    </div>

                  ))}

                </div>

              </div>

              <div className="relative overflow-hidden rounded-[2rem]">

                <img
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85"
                  alt="Business team working together and communicating"
                  className="h-[500px] w-full object-cover transition duration-700 hover:scale-105"
                />

                <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-slate-950/90 p-6 text-white backdrop-blur">

                  <div className="flex items-start gap-4">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600">

                      <Wifi className="h-6 w-6" />

                    </div>

                    <div>

                      <h3 className="font-bold">
                        Business Connectivity
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-slate-300">
                        Reliable communication solutions for modern business
                        operations.
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* Broadband & Phone Solutions */}
        <section className="bg-slate-50 py-24">

          <div className="mx-auto max-w-7xl px-6">

            <div className="grid gap-8 md:grid-cols-2">

              {/* Broadband */}
              <Link
                href="/connectivity/broadband"
                className="group overflow-hidden rounded-[2rem] bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >

                <div className="relative h-64 overflow-hidden">

                  <img
                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85"
                    alt="Business broadband and network technology"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-slate-950/30" />

                  <div className="absolute left-6 top-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-blue-600 shadow-lg">

                    <Wifi className="h-6 w-6" />

                  </div>

                </div>

                <div className="p-8">

                  <h2 className="text-2xl font-bold text-slate-900">
                    Business Broadband
                  </h2>

                  <p className="mt-4 leading-7 text-slate-600">
                    Find reliable connectivity solutions designed around your
                    team's speed and performance requirements.
                  </p>

                  <span className="mt-7 inline-flex items-center gap-2 font-semibold text-blue-600">

                    Explore Broadband

                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />

                  </span>

                </div>

              </Link>

              {/* Phone */}
              <Link
                href="/connectivity/phone-line"
                className="group overflow-hidden rounded-[2rem] bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >

                <div className="relative h-64 overflow-hidden">

                  <img
                    src="https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=1200&q=85"
                    alt="Business communication and phone meeting"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-slate-950/30" />

                  <div className="absolute left-6 top-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-blue-600 shadow-lg">

                    <Phone className="h-6 w-6" />

                  </div>

                </div>

                <div className="p-8">

                  <h2 className="text-2xl font-bold text-slate-900">
                    Business Phone
                  </h2>

                  <p className="mt-4 leading-7 text-slate-600">
                    Explore flexible communication solutions for keeping your
                    team and customers connected.
                  </p>

                  <span className="mt-7 inline-flex items-center gap-2 font-semibold text-blue-600">

                    Explore Phone Solutions

                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />

                  </span>

                </div>

              </Link>

            </div>

          </div>

        </section>

        {/* Connectivity Benefits */}
        <section className="bg-white py-24">

          <div className="mx-auto max-w-7xl px-6">

            <div className="max-w-3xl">

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                Benefits
              </p>

              <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">
                Connectivity built around your business
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                From broadband to business phone solutions, explore options
                designed to support communication, productivity and everyday
                business operations.
              </p>

            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

              {[
                "Reliable connectivity",
                "Business-focused solutions",
                "Flexible packages",
                "Support for growing teams",
              ].map((item) => (

                <div
                  key={item}
                  className="rounded-3xl bg-slate-50 p-7"
                >

                  <CheckCircle2
                    size={22}
                    className="text-blue-600"
                  />

                  <h3 className="mt-5 font-bold text-slate-900">
                    {item}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    Explore connectivity options designed around your
                    organisation's requirements.
                  </p>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* Business Connectivity Image Section */}
        <section className="bg-slate-50 py-20">

          <div className="mx-auto max-w-7xl px-6">

            <div className="grid items-center gap-12 lg:grid-cols-2">

              <div className="relative overflow-hidden rounded-[2rem]">

                <img
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=85"
                  alt="Professional business team working with technology"
                  className="h-[480px] w-full object-cover transition duration-700 hover:scale-105"
                />

              </div>

              <div>

                <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                  Built For Modern Business
                </p>

                <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">
                  Keep your team and customers connected
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  Communication is at the heart of modern business. From
                  customer calls and online meetings to everyday internet
                  access, dependable connectivity can help your organisation
                  operate effectively.
                </p>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  Explore broadband and business phone solutions that fit the
                  way your organisation works today and supports its future
                  requirements.
                </p>

                <div className="mt-8 space-y-4">

                  {[
                    "Support day-to-day business communication",
                    "Keep teams connected",
                    "Improve communication with customers",
                    "Explore flexible connectivity options",
                  ].map((item) => (

                    <div
                      key={item}
                      className="flex items-center gap-3"
                    >

                      <CheckCircle2 className="h-5 w-5 shrink-0 text-blue-600" />

                      <span className="font-medium text-slate-700">
                        {item}
                      </span>

                    </div>

                  ))}

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* CTA */}
        <section className="bg-white py-24">

          <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-slate-950">

            <div className="grid lg:grid-cols-2 lg:items-center">

              <div className="relative h-72 lg:h-full">

                <img
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=85"
                  alt="Business professionals collaborating and communicating"
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-slate-950/50" />

              </div>

              <div className="p-10 text-white md:p-14">

                <span className="font-semibold text-blue-400">
                  Need help choosing?
                </span>

                <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                  Let's find the right connectivity solution.
                </h2>

                <p className="mt-4 leading-7 text-slate-300">
                  Tell us about your business requirements and we can help you
                  explore suitable broadband and communication options.
                </p>

                <Link
                  href="/quote"
                  className="mt-8 inline-flex items-center gap-3 rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700"
                >
                  Get a Free Quote

                  <ArrowRight className="h-5 w-5" />

                </Link>

              </div>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}

function ServiceGridCard({ service }) {
  return (
    <Link
      href={service.href}
      className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >

      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50">

        <span className="text-blue-600">

          {service.icon === "wifi" ? (
            <Wifi size={27} />
          ) : (
            <Phone size={27} />
          )}

        </span>

      </div>

      <h3 className="mt-6 text-2xl font-bold text-slate-900 transition group-hover:text-blue-600">

        {service.title}

      </h3>

      <p className="mt-3 leading-7 text-slate-600">

        {service.description}

      </p>

      <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600">

        Explore service

        <ArrowRight
          size={17}
          className="transition group-hover:translate-x-1"
        />

      </span>

    </Link>
  );
}