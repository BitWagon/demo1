import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServiceHero from "@/components/services/ServiceHero";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Trash2 } from "lucide-react";

export default function WastePage() {
  return (
    <>
      <Navbar />

      <main>
        <ServiceHero
          badge="Waste Management"
          title="Practical Waste Solutions"
          highlight="For Businesses"
          description="Find practical waste collection and management solutions designed around your business requirements."
        />

        {/* Waste Management Overview */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
                  Business Waste Management
                </span>

                <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                  Make business waste easier to manage
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Managing waste is an important part of keeping your business
                  premises clean, organised and operating efficiently. The
                  right waste solution can help you manage regular collections,
                  different waste types and changing business requirements.
                </p>

                <p className="mt-4 leading-8 text-slate-600">
                  Whether you operate an office, retail premises, hospitality
                  business or commercial site, you can explore waste
                  management options based around your organisation and the
                  waste it produces.
                </p>

                <Link
                  href="/quote"
                  className="mt-7 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white hover:bg-blue-700"
                >
                  Explore Waste Options
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>

              <div className="overflow-hidden rounded-[2rem]">
                <img
                  src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1200&q=85"
                  alt="Commercial waste management and recycling"
                  className="h-[420px] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Original Features */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Collection",
                  text: "Explore waste collection options suitable for your premises.",
                },
                {
                  title: "Management",
                  text: "Consider practical approaches to managing business waste.",
                },
                {
                  title: "Comparison",
                  text: "Explore available solutions before deciding how to proceed.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-white p-8"
                >
                  <CheckCircle2 className="h-8 w-8 text-blue-600" />

                  <h2 className="mt-5 text-2xl font-bold text-slate-900">
                    {item.title}
                  </h2>

                  <p className="mt-3 leading-7 text-slate-600">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-14 rounded-[2rem] bg-slate-950 p-10 text-white md:p-14">
              <Trash2 className="h-10 w-10 text-blue-400" />

              <h2 className="mt-6 text-3xl font-bold md:text-4xl">
                Explore Waste Management Options
              </h2>

              <p className="mt-4 max-w-2xl leading-8 text-slate-300">
                Tell us about your business requirements and explore suitable
                waste solutions.
              </p>

              <Link
                href="/quote"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-4 font-semibold hover:bg-blue-700"
              >
                Get My Waste Quote
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Waste Services */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-3xl">
              <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
                Waste Services
              </span>

              <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
                Solutions for different business waste requirements
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                Different businesses produce different types and volumes of
                waste. Exploring the right services can help you create a
                practical approach to collection and ongoing waste management.
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {[
                {
                  title: "General Business Waste",
                  text: "Explore practical collection options for everyday commercial waste generated by your business.",
                  image:
                    "https://images.unsplash.com/photo-1604187351574-c75ca79f5807?auto=format&fit=crop&w=1200&q=85",
                },
                {
                  title: "Recycling",
                  text: "Consider recycling-focused options for materials such as paper, cardboard, plastics and other recyclable waste.",
                  image:
                    "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1200&q=85",
                },
                {
                  title: "Commercial Waste Collection",
                  text: "Look at collection solutions that can work around your premises, operating schedule and waste requirements.",
                  image:
                    "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=85",
                },
              ].map((service) => (
                <div
                  key={service.title}
                  className="overflow-hidden rounded-3xl border border-slate-200 bg-white"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-56 w-full object-cover"
                  />

                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-slate-900">
                      {service.title}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      {service.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Business Waste Types */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="overflow-hidden rounded-[2rem]">
                <img
                  src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1200&q=85"
                  alt="Business recycling and waste sorting"
                  className="h-[420px] w-full object-cover"
                />
              </div>

              <div>
                <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
                  Built Around Your Business
                </span>

                <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
                  Waste solutions can vary by business type
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  The amount and type of waste produced can depend on the size
                  of your business, the industry you operate in and the
                  activities carried out on your premises.
                </p>

                <div className="mt-8 space-y-5">
                  {[
                    {
                      title: "Offices",
                      text: "Support everyday waste and recycling requirements across your workplace.",
                    },
                    {
                      title: "Retail Businesses",
                      text: "Consider solutions for packaging, general waste and customer-facing premises.",
                    },
                    {
                      title: "Hospitality",
                      text: "Explore waste management approaches suited to busy hospitality environments.",
                    },
                    {
                      title: "Commercial Premises",
                      text: "Find options that can accommodate the operational requirements of larger sites.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-blue-600" />

                      <div>
                        <h3 className="font-bold text-slate-900">
                          {item.title}
                        </h3>

                        <p className="mt-1 leading-7 text-slate-600">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Consider Waste Management */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
                Why Explore Your Options?
              </span>

              <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
                A more practical approach to business waste
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                Taking time to understand your waste requirements can help you
                explore services that are better aligned with how your business
                operates.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-4">
              {[
                {
                  title: "Cleaner Premises",
                  text: "Support a cleaner and more organised working environment.",
                },
                {
                  title: "Regular Collection",
                  text: "Explore collection arrangements that work around your business routine.",
                },
                {
                  title: "Better Recycling",
                  text: "Consider options that can support more effective recycling practices.",
                },
                {
                  title: "Business Focused",
                  text: "Look for solutions based around your actual waste requirements.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200 p-7"
                >
                  <CheckCircle2 className="h-7 w-7 text-blue-600" />

                  <h3 className="mt-5 text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Waste Management Process */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
                  How It Works
                </span>

                <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
                  Getting started is straightforward
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Exploring waste management does not need to be complicated.
                  Start by understanding your current requirements and then
                  consider the options available for your business.
                </p>

                <div className="mt-8 space-y-6">
                  {[
                    {
                      number: "01",
                      title: "Tell us about your business",
                      text: "Share information about your premises, waste requirements and collection needs.",
                    },
                    {
                      number: "02",
                      title: "Explore suitable options",
                      text: "Review waste management solutions that could work around your business.",
                    },
                    {
                      number: "03",
                      title: "Move forward",
                      text: "Once you have explored your options, decide how you would like to proceed.",
                    },
                  ].map((step) => (
                    <div key={step.number} className="flex gap-5">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600 font-bold text-white">
                        {step.number}
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-slate-900">
                          {step.title}
                        </h3>

                        <p className="mt-2 leading-7 text-slate-600">
                          {step.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="overflow-hidden rounded-[2rem]">
                <img
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=85"
                  alt="Sustainable waste management and recycling"
                  className="h-full min-h-[500px] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-blue-600 py-20">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <Trash2 className="mx-auto h-12 w-12 text-white" />

            <h2 className="mt-6 text-3xl font-bold text-white md:text-5xl">
              Looking for a better waste solution?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-blue-100">
              Tell us about your business and explore practical waste
              management options designed around your requirements.
            </p>

            <Link
              href="/quote"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 font-semibold text-blue-600 hover:bg-slate-100"
            >
              Get My Waste Quote
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}