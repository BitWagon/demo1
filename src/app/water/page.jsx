import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServiceHero from "@/components/services/ServiceHero";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Droplets } from "lucide-react";

import Reveal from "@/components/animations/Reveal";
import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerItem";

const benefits = [
  {
    title: "Business Water Solutions",
    description:
      "Explore water services designed around the requirements of your business.",
  },
  {
    title: "Clear Options",
    description:
      "Understand your options and choose a solution that fits your organisation.",
  },
  {
    title: "Flexible Approach",
    description:
      "Every business is different, so your water requirements should be considered individually.",
  },
  {
    title: "Business Focused",
    description:
      "Solutions designed with commercial customers and their everyday needs in mind.",
  },
];

const waterServices = [
  {
    title: "Commercial Water Supply",
    description:
      "Explore business water supply options designed around the needs of your premises and day-to-day operations.",
  },
  {
    title: "Wastewater Services",
    description:
      "Understand wastewater requirements and explore options suitable for your commercial premises.",
  },
  {
    title: "Business Water Management",
    description:
      "Consider your water requirements as part of the wider needs of your organisation.",
  },
];

export default function WaterPage() {
  return (
    <>
      <Navbar />

      <main>
        <ServiceHero
          badge="Business Water"
          title="Explore Commercial"
          highlight="Water Solutions"
          description="Compare commercial water services and discover options suitable for your premises."
        />

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-6 md:grid-cols-3">
              {[
                "Explore commercial water services",
                "Understand your available options",
                "Find solutions suitable for your premises",
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
              <Droplets className="h-10 w-10 text-blue-400" />

              <h2 className="mt-6 text-3xl font-bold md:text-4xl">
                Compare Business Water Options
              </h2>

              <p className="mt-4 max-w-2xl leading-8 text-slate-300">
                Submit your requirements and explore suitable business water
                solutions.
              </p>

              <Link
                href="/quote"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-4 font-semibold hover:bg-blue-700"
              >
                Get My Water Quote
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              <Reveal direction="right">
                <div>
                  <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                    Business Water
                  </span>

                  <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
                    Find a water solution that works for your business
                  </h2>

                  <p className="mt-5 text-slate-600 leading-7">
                    Water is an essential part of many businesses. Whether you
                    operate an office, retail store, restaurant or larger
                    organisation, having the right commercial water service can
                    make managing your business easier.
                  </p>

                  <p className="mt-4 text-slate-600 leading-7">
                    We help businesses explore suitable water and wastewater
                    options based on their individual requirements.
                  </p>

                  <a
                    href="/quote"
                    className="inline-flex mt-8 px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
                  >
                    Get a Free Quote
                  </a>
                </div>
              </Reveal>

              <Reveal direction="left" delay={0.15}>
                <div className="overflow-hidden rounded-3xl bg-slate-900">
                  <img
                    src="https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=1200&q=85"
                    alt="Clean commercial water supply and water infrastructure"
                    className="h-80 w-full object-cover"
                  />

                  <div className="p-10 min-h-[420px] flex flex-col justify-center">
                    <div className="text-7xl">💧</div>

                    <h3 className="mt-8 text-3xl font-bold text-white">
                      Business water made simpler
                    </h3>

                    <p className="mt-4 text-slate-300 leading-7">
                      Explore options that can help your organisation manage
                      its commercial water requirements.
                    </p>

                    <div className="mt-8 grid grid-cols-2 gap-4">
                      <div className="rounded-2xl bg-white/10 p-4">
                        <p className="text-white font-semibold">Water</p>
                        <p className="text-slate-400 text-sm mt-1">
                          Business supply
                        </p>
                      </div>

                      <div className="rounded-2xl bg-white/10 p-4">
                        <p className="text-white font-semibold">Wastewater</p>
                        <p className="text-slate-400 text-sm mt-1">
                          Commercial needs
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-2xl">
              <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Water Services
              </span>

              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
                Explore commercial water services
              </h2>

              <p className="mt-4 text-slate-600 leading-7">
                Different businesses have different water requirements.
                Explore the main areas to consider when reviewing commercial
                water services.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {waterServices.map((service) => (
                <div
                  key={service.title}
                  className="rounded-3xl bg-white border border-slate-200 overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
                >
                  <img
                    src={
                      service.title === "Commercial Water Supply"
                        ? "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1000&q=85"
                        : service.title === "Wastewater Services"
                        ? "https://images.unsplash.com/photo-1538300342682-cf57afb97285?auto=format&fit=crop&w=1000&q=85"
                        : "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1000&q=85"
                    }
                    alt={service.title}
                    className="h-56 w-full object-cover"
                  />

                  <div className="p-7">
                    <div className="h-11 w-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                      <Droplets className="h-5 w-5" />
                    </div>

                    <h3 className="mt-5 text-xl font-bold text-slate-900">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm text-slate-600 leading-6">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              <Reveal direction="right">
                <div className="overflow-hidden rounded-3xl">
                  <img
                    src="https://images.unsplash.com/photo-1564419320461-6870880221ad?auto=format&fit=crop&w=1200&q=85"
                    alt="Water being used within a modern commercial premises"
                    className="h-[460px] w-full object-cover"
                  />
                </div>
              </Reveal>

              <Reveal direction="left" delay={0.15}>
                <div>
                  <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                    Commercial Water Requirements
                  </span>

                  <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
                    Water services for different types of businesses
                  </h2>

                  <p className="mt-5 text-slate-600 leading-7">
                    Water requirements can vary depending on the type of
                    business, the size of the premises and how water is used
                    throughout the working day.
                  </p>

                  <p className="mt-4 text-slate-600 leading-7">
                    Offices, retail premises, hospitality businesses and other
                    commercial organisations can all have different
                    requirements. Exploring your options can help you
                    understand what may be suitable.
                  </p>

                  <div className="mt-8 space-y-4">
                    {[
                      "Office and commercial premises",
                      "Retail and customer-facing businesses",
                      "Hospitality and food businesses",
                      "Larger commercial organisations",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-2xl border border-slate-200 p-4"
                      >
                        <CheckCircle2 className="h-6 w-6 text-blue-600 shrink-0" />

                        <span className="font-medium text-slate-700">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-2xl">
              <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Benefits
              </span>

              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
                Why explore business water options?
              </h2>

              <p className="mt-4 text-slate-600 leading-7">
                Understanding your options can help you make more informed
                decisions about your business services.
              </p>
            </div>

            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {benefits.map((benefit) => (
                <StaggerItem key={benefit.title}>
                  <div className="h-full bg-white rounded-2xl border border-slate-200 p-6 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                    <div className="h-11 w-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                      ✓
                    </div>

                    <h3 className="mt-5 text-lg font-bold text-slate-900">
                      {benefit.title}
                    </h3>

                    <p className="mt-3 text-sm text-slate-600 leading-6">
                      {benefit.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        <Reveal>
          <section className="py-20 bg-blue-600">
            <div className="max-w-4xl mx-auto px-6 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Need help with your business water requirements?
              </h2>

              <p className="mt-4 text-blue-100 leading-7">
                Tell us about your business and explore suitable options.
              </p>

              <a
                href="/quote"
                className="inline-flex mt-8 px-7 py-3.5 rounded-xl bg-white text-blue-700 font-bold hover:scale-105 transition-transform duration-300"
              >
                Get a Free Quote
              </a>
            </div>
          </section>
        </Reveal>
      </main>

      <Footer />
    </>
  );
}