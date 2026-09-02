import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServiceHero from "@/components/services/ServiceHero";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Wifi } from "lucide-react";

const benefits = [
  {
    title: "Reliable Connection",
    description:
      "Give your team a dependable connection for everyday business activities.",
  },
  {
    title: "Flexible Options",
    description:
      "Explore broadband options that can be matched to your business requirements.",
  },
  {
    title: "Business Ready",
    description:
      "Support video calls, cloud applications, browsing and other essential services.",
  },
  {
    title: "Scalable",
    description:
      "Choose a solution that can support your business as your requirements grow.",
  },
];

export default function BroadbandPage() {
  return (
    <>
      <Navbar />

      <main>
        <ServiceHero
          badge="Business Broadband"
          title="Reliable Connectivity"
          highlight="For Your Business"
          description="Find reliable connectivity solutions designed around your team's speed and performance requirements."
        />

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-6 md:grid-cols-3">
              {[
                "Explore business broadband options",
                "Compare solutions around your requirements",
                "Understand available connectivity choices",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-3xl border border-slate-200 p-8"
                >
                  <CheckCircle2 className="h-8 w-8 text-blue-600" />

                  <h2 className="mt-5 text-xl font-bold text-slate-900">
                    {item}
                  </h2>
                </div>
              ))}
            </div>

            <div className="mt-14 rounded-[2rem] bg-slate-950 p-10 text-white md:p-14">
              <Wifi className="h-10 w-10 text-blue-400" />

              <h2 className="mt-6 text-3xl font-bold md:text-4xl">
                Find a Connectivity Solution
              </h2>

              <p className="mt-4 max-w-2xl leading-8 text-slate-300">
                Tell us about your business and explore broadband options
                suitable for your requirements.
              </p>

              <Link
                href="/quote"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-4 font-semibold hover:bg-blue-700"
              >
                Get My Broadband Quote
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              <div>
                <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                  Business Internet
                </span>

                <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
                  A connection your business can rely on
                </h2>

                <p className="mt-5 text-slate-600 leading-7">
                  From everyday browsing to cloud applications and online
                  meetings, your internet connection plays an important role
                  in keeping your business running.
                </p>

                <p className="mt-4 text-slate-600 leading-7">
                  We help businesses explore broadband options based on their
                  location, team size, usage and requirements.
                </p>

                <a
                  href="/quote"
                  className="inline-flex mt-8 px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
                >
                  Get a Free Quote
                </a>
              </div>

              <div className="overflow-hidden rounded-3xl bg-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85"
                  alt="Business networking and broadband connectivity"
                  className="h-80 w-full object-cover"
                />

                <div className="p-8 md:p-10">
                  <div className="text-6xl">📶</div>

                  <h3 className="mt-8 text-2xl font-bold text-white">
                    Business connectivity made simple
                  </h3>

                  <p className="mt-4 text-slate-300 leading-7">
                    Find an internet solution that matches the way your
                    business actually works.
                  </p>

                  <div className="mt-8 h-2 rounded-full bg-slate-700 overflow-hidden">
                    <div className="h-full w-4/5 bg-blue-500 rounded-full" />
                  </div>

                  <p className="mt-3 text-sm text-slate-400">
                    Built around your requirements
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Benefits
              </span>

              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
                Why choose business broadband?
              </h2>

              <p className="mt-4 text-slate-600">
                Your business deserves connectivity that supports your daily
                operations.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition"
                >
                  <div className="h-10 w-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 font-bold">
                    ✓
                  </div>

                  <h3 className="mt-5 font-bold text-lg text-slate-900">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-600 leading-6">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8">
              <Link
                href="/connectivity/broadband"
                className="group overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=85"
                  alt="Modern business internet and digital connectivity"
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="p-8">
                  <Wifi className="h-10 w-10 text-blue-600" />

                  <h2 className="mt-6 text-2xl font-bold text-slate-900">
                    Business Broadband
                  </h2>

                  <p className="mt-4 leading-7 text-slate-600">
                    Explore reliable broadband options designed around your
                    team's speed and performance requirements.
                  </p>

                  <span className="mt-7 inline-flex items-center gap-2 font-semibold text-blue-600">
                    Explore Broadband
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>

              <div className="overflow-hidden rounded-3xl bg-slate-950 text-white">
                <img
                  src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=85"
                  alt="Business team using technology and online communication"
                  className="h-64 w-full object-cover"
                />

                <div className="p-8">
                  <h2 className="text-2xl font-bold">
                    Connected teams. Productive businesses.
                  </h2>

                  <p className="mt-4 leading-7 text-slate-300">
                    Reliable broadband helps teams stay connected through
                    video calls, cloud applications, browsing and everyday
                    business activities.
                  </p>

                  <div className="mt-7 grid sm:grid-cols-2 gap-4">
                    {[
                      "Reliable connectivity",
                      "Business-focused solutions",
                      "Flexible packages",
                      "Support for growing teams",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-2xl border border-slate-700 p-4"
                      >
                        <div className="h-2.5 w-2.5 rounded-full bg-blue-500" />

                        <span className="text-sm font-medium text-slate-300">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-blue-600">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Looking for better business broadband?
            </h2>

            <p className="mt-4 text-blue-100 leading-7">
              Tell us what your business needs and explore suitable broadband
              options.
            </p>

            <a
              href="/quote"
              className="inline-flex mt-8 px-7 py-3.5 rounded-xl bg-white text-blue-700 font-bold hover:bg-slate-100 transition"
            >
              Request a Quote
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}