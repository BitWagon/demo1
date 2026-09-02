import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How does the comparison service work?",
    answer:
      "Simply provide some information about your business and the service you're interested in. We'll review suitable options and help you compare them.",
  },
  {
    question: "Does requesting a quote cost anything?",
    answer:
      "Requesting an initial quote is free. Any applicable commercial arrangements should be explained clearly before you proceed.",
  },
  {
    question: "Do I have to switch providers?",
    answer:
      "No. Requesting a comparison does not require you to switch. You remain in control of the final decision.",
  },
  {
    question: "How long does switching take?",
    answer:
      "Timescales vary depending on the service, provider, contract, and circumstances of your business.",
  },
  {
    question: "What types of businesses can use the service?",
    answer:
      "We support businesses with different requirements and service needs. Contact us to discuss your situation.",
  },
  {
    question: "Can I compare multiple services?",
    answer:
      "Yes. You can ask us about multiple business services and explore suitable options through one enquiry.",
  },
];

export default function FAQPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="bg-slate-950 py-24 text-white md:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <span className="text-sm font-bold uppercase tracking-wider text-blue-400">
                  Frequently Asked Questions
                </span>

                <h1 className="mt-5 max-w-4xl text-4xl font-bold md:text-6xl">
                  Questions,{" "}
                  <span className="text-blue-400">Answered</span>
                </h1>

                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                  Find answers to common questions about our business
                  comparison service.
                </p>

                <p className="mt-5 max-w-2xl leading-7 text-slate-400">
                  Whether you're exploring business energy, connectivity,
                  water, finance, insurance or other commercial services,
                  we've answered some of the questions businesses commonly
                  ask before making a decision.
                </p>
              </div>

              <div>
                <img
                  src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1400&q=85"
                  alt="Business professionals discussing services and options"
                  className="h-[420px] w-full rounded-3xl object-cover shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Introduction */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
                  Need More Information?
                </span>

                <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
                  Making Business Services Easier to Understand
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Choosing the right business service can involve comparing
                  different options, understanding contract details and
                  considering what works best for your organisation.
                </p>

                <p className="mt-4 leading-8 text-slate-600">
                  Our comparison service is designed to make that process
                  easier by helping you explore options based around your
                  business requirements.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-slate-50 p-5">
                    <h3 className="font-bold text-slate-900">
                      Compare Options
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Explore options relevant to your business requirements.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-slate-50 p-5">
                    <h3 className="font-bold text-slate-900">
                      Make Informed Decisions
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Understand your options before deciding how to proceed.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <img
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=85"
                  alt="Business team working together"
                  className="h-[420px] w-full rounded-3xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-4xl px-6">
            <div className="mb-12 text-center">
              <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
                Common Questions
              </span>

              <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
                Frequently Asked Questions
              </h2>

              <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
                Browse the questions below to learn more about how our
                business comparison service works.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-200"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-semibold text-slate-900">
                    {faq.question}

                    <ChevronDown className="h-5 w-5 shrink-0 transition group-open:rotate-180" />
                  </summary>

                  <p className="mt-4 leading-7 text-slate-600">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Business Services */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
                Our Service Areas
              </span>

              <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
                Business Services You Can Explore
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                We help businesses explore different commercial services and
                understand the options available for their requirements.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
                <img
                  src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1000&q=85"
                  alt="Business energy and electricity"
                  className="h-52 w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900">
                    Business Energy
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    Explore electricity and gas options designed around your
                    organisation's requirements.
                  </p>
                </div>
              </div>

              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
                <img
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=85"
                  alt="Business connectivity infrastructure"
                  className="h-52 w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900">
                    Business Connectivity
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    Explore broadband and business communication solutions to
                    keep your organisation connected.
                  </p>
                </div>
              </div>

              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
                <img
                  src="https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=1000&q=85"
                  alt="Commercial water services"
                  className="h-52 w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900">
                    Business Water
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    Understand commercial water options and services relevant
                    to your business.
                  </p>
                </div>
              </div>

              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
                <img
                  src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1000&q=85"
                  alt="Commercial waste and recycling"
                  className="h-52 w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900">
                    Waste Management
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    Explore practical waste collection and management options
                    for your business.
                  </p>
                </div>
              </div>

              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
                <img
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1000&q=85"
                  alt="Business finance planning"
                  className="h-52 w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900">
                    Business Finance
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    Explore potential finance options that may support your
                    business requirements.
                  </p>
                </div>
              </div>

              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
                <img
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=85"
                  alt="Business professionals discussing insurance"
                  className="h-52 w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900">
                    Business Insurance
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    Explore different types of business protection and
                    insurance cover.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-slate-900 py-20 text-white">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <span className="text-sm font-bold uppercase tracking-wider text-blue-400">
                  Simple Process
                </span>

                <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                  What Happens When You Make an Enquiry?
                </h2>

                <p className="mt-5 leading-8 text-slate-300">
                  Getting started is straightforward. Tell us about your
                  business requirements and the service you're interested in,
                  and we can help you explore the next steps.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 font-bold">
                      01
                    </div>
                    <div>
                      <h3 className="font-bold">Share Your Requirements</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-400">
                        Tell us about your business and what you are looking
                        for.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 font-bold">
                      02
                    </div>
                    <div>
                      <h3 className="font-bold">Explore Suitable Options</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-400">
                        Review options that may be relevant to your
                        requirements.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 font-bold">
                      03
                    </div>
                    <div>
                      <h3 className="font-bold">Decide How to Proceed</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-400">
                        You remain in control of the final decision.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <img
                  src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1400&q=85"
                  alt="Business team reviewing information together"
                  className="h-[440px] w-full rounded-3xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* More Questions */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=1400&q=85"
                  alt="Business communication and customer support"
                  className="h-[400px] w-full rounded-3xl object-cover"
                />
              </div>

              <div>
                <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
                  Still Have Questions?
                </span>

                <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
                  We're Here to Help
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  If your question isn't covered above, you can contact us to
                  discuss your business requirements and find out more about
                  the services we cover.
                </p>

                <p className="mt-4 leading-8 text-slate-600">
                  Every business is different, so we're happy to consider your
                  individual circumstances and help you understand the options
                  available.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="/quote"
                    className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
                  >
                    Request a Quote
                  </a>

                  <a
                    href="/contact"
                    className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-900 transition hover:border-blue-300 hover:text-blue-600"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-blue-600 py-20 text-white">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              Ready to Explore Your Business Options?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100">
              Tell us what your business needs and explore suitable options
              through one simple enquiry.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="/quote"
                className="rounded-xl bg-white px-7 py-3.5 font-semibold text-blue-600 transition hover:bg-slate-100"
              >
                Request a Quote
              </a>

              <a
                href="/contact"
                className="rounded-xl border border-white/40 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}