import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServiceHero from "@/components/services/ServiceHero";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  BriefcaseBusiness,
  Building2,
  TrendingUp,
  WalletCards,
} from "lucide-react";

export default function FinancePage() {
  return (
    <>
      <Navbar />

      <main>
        <ServiceHero
          badge="Business Finance"
          title="Explore Business"
          highlight="Finance Options"
          description="Explore potential business finance solutions and understand options that may be relevant to your requirements."
        />

        {/* Business Finance Overview */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
                  Business Finance
                </span>

                <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                  Finance options built around your business requirements
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Every business has different financial requirements.
                  Whether you are looking to support growth, manage cash flow,
                  purchase equipment or fund an important business investment,
                  exploring the available finance options can help you
                  understand what may be suitable for your organisation.
                </p>

                <p className="mt-4 leading-8 text-slate-600">
                  Start by understanding your requirements and exploring
                  potential solutions before deciding how you would like to
                  proceed.
                </p>

                <Link
                  href="/quote"
                  className="mt-7 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white hover:bg-blue-700"
                >
                  Explore Finance Options
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>

              <div className="overflow-hidden rounded-[2rem]">
                <img
                  src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=85"
                  alt="Business professionals discussing finance and planning"
                  className="h-[430px] w-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Original Finance Options */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-6 md:grid-cols-3">
              {[
                "Explore finance options",
                "Understand potential solutions",
                "Discuss your business requirements",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-3xl border border-slate-200 bg-white p-8"
                >
                  <CheckCircle2 className="h-8 w-8 text-blue-600" />

                  <h2 className="mt-5 text-xl font-bold text-slate-900">
                    {item}
                  </h2>

                  <p className="mt-3 leading-7 text-slate-600">
                    Explore your requirements and consider potential finance
                    solutions before making a decision.
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-14 rounded-[2rem] bg-slate-950 p-10 text-white md:p-14">
              <BriefcaseBusiness className="h-10 w-10 text-blue-400" />

              <h2 className="mt-6 text-3xl font-bold md:text-4xl">
                Discuss Your Finance Requirements
              </h2>

              <p className="mt-4 max-w-2xl leading-8 text-slate-300">
                Submit an enquiry and provide information about what your
                business needs.
              </p>

              <Link
                href="/quote"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-4 font-semibold hover:bg-blue-700"
              >
                Make an Enquiry
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Finance Solutions */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
                Finance Solutions
              </span>

              <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
                Explore finance options for different business needs
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                The right finance option can depend on what you are looking to
                achieve and how your business operates. Explore different
                areas where business finance may be relevant.
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {[
                {
                  icon: TrendingUp,
                  title: "Business Growth",
                  text: "Explore potential finance solutions that may support expansion, investment and future business plans.",
                },
                {
                  icon: WalletCards,
                  title: "Cash Flow",
                  text: "Consider options that may help your business manage important working capital and day-to-day requirements.",
                },
                {
                  icon: Building2,
                  title: "Business Investment",
                  text: "Explore finance possibilities for equipment, assets, premises and other business investments.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-slate-200 p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                      <Icon className="h-7 w-7" />
                    </div>

                    <h3 className="mt-6 text-2xl font-bold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Finance Planning */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="overflow-hidden rounded-[2rem]">
                <img
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=85"
                  alt="Business financial planning and reviewing figures"
                  className="h-[430px] w-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div>
                <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
                  Financial Planning
                </span>

                <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
                  Start with a clear understanding of your requirements
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Before exploring finance, it can be useful to understand
                  exactly what your business needs. The amount required, the
                  purpose of the finance and your wider business circumstances
                  can all be relevant when considering potential options.
                </p>

                <div className="mt-8 space-y-5">
                  {[
                    "Understand what your business needs",
                    "Consider the purpose of the finance",
                    "Explore potential funding options",
                    "Review solutions around your requirements",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="h-6 w-6 shrink-0 text-blue-600" />

                      <span className="font-medium text-slate-800">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Business Types */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
                  Business Finance
                </span>

                <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
                  Finance requirements can vary by business
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  A growing company may have different requirements from an
                  established business, while a retail company may need
                  different solutions from a professional service provider.
                </p>

                <p className="mt-4 leading-8 text-slate-600">
                  Understanding your circumstances is an important starting
                  point when exploring potential business finance options.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    "Growing businesses",
                    "Established companies",
                    "Retail businesses",
                    "Professional services",
                    "Commercial organisations",
                    "New investments",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl border border-slate-200 p-4"
                    >
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-blue-600" />

                      <span className="font-medium text-slate-800">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="overflow-hidden rounded-[2rem]">
                <img
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=85"
                  alt="Business finance consultation and professional discussion"
                  className="h-[500px] w-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Finance Considerations */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
                Finance Considerations
              </span>

              <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
                Consider what your business needs
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                Having a clear picture of your business requirements can make
                it easier to explore potential finance solutions and understand
                which areas may be relevant to you.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-4">
              {[
                {
                  title: "Purpose",
                  text: "Understand what you need the finance to support.",
                },
                {
                  title: "Amount",
                  text: "Consider the level of funding your business may require.",
                },
                {
                  title: "Business Plans",
                  text: "Think about how finance could fit with your wider plans.",
                },
                {
                  title: "Requirements",
                  text: "Explore options based around your organisation.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-white p-7"
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

        {/* Simple Process */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
                How It Works
              </span>

              <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
                A straightforward way to explore finance
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                Start with your business requirements and explore potential
                finance options before deciding on your next step.
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "Tell us about your business",
                  text: "Share information about your organisation and what you are looking to achieve.",
                },
                {
                  number: "02",
                  title: "Explore potential options",
                  text: "Consider finance solutions that may be relevant to your business requirements.",
                },
                {
                  number: "03",
                  title: "Decide how to proceed",
                  text: "Review your options and decide on the next steps for your business.",
                },
              ].map((step) => (
                <div
                  key={step.number}
                  className="rounded-3xl bg-slate-50 border border-slate-200 p-8"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 font-bold text-white">
                    {step.number}
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-blue-600 py-20">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <BriefcaseBusiness className="mx-auto h-12 w-12 text-white" />

            <h2 className="mt-6 text-3xl font-bold text-white md:text-5xl">
              Ready to explore your finance options?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-blue-100">
              Tell us about your business requirements and explore potential
              finance solutions that may be relevant to your organisation.
            </p>

            <Link
              href="/quote"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 font-semibold text-blue-600 hover:bg-slate-100"
            >
              Make an Enquiry
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}