import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServiceHero from "@/components/services/ServiceHero";

const features = [
  {
    title: "Professional Communication",
    description:
      "Give your business a professional way to communicate with customers and suppliers.",
  },
  {
    title: "Flexible Solutions",
    description:
      "Explore phone solutions that can work for small teams and growing organisations.",
  },
  {
    title: "Reliable Calling",
    description:
      "Support day-to-day conversations with a dependable business communication setup.",
  },
  {
    title: "Business Focused",
    description:
      "Choose options based around your business rather than a one-size-fits-all package.",
  },
];

const communicationBenefits = [
  {
    title: "Stay connected with customers",
    description:
      "Make it easier for customers to reach your business and keep important conversations moving.",
  },
  {
    title: "Support your team",
    description:
      "Give employees a dependable way to communicate with colleagues, customers and suppliers.",
  },
  {
    title: "Professional business presence",
    description:
      "Create a professional communication experience that reflects the way your business operates.",
  },
];

export default function BusinessPhoneLinePage() {
  return (
    <>
      <Navbar />

      <main>
        <ServiceHero
          badge="Business Phone Line"
          title="Professional"
          highlight="Business Communication"
          description="Stay connected with customers and colleagues through business phone solutions designed around your organisation."
        />

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              <div className="overflow-hidden rounded-3xl bg-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=85"
                  alt="Business team communicating and collaborating in an office"
                  className="h-80 w-full object-cover"
                />

                <div className="p-10 min-h-[420px] flex flex-col justify-center">
                  <div className="text-6xl">☎️</div>

                  <h3 className="mt-8 text-3xl font-bold text-white">
                    Keep conversations moving
                  </h3>

                  <p className="mt-4 text-slate-300 leading-7 max-w-lg">
                    Communication is an important part of every business. Find a
                    phone solution that helps your team communicate effectively.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <span className="px-4 py-2 rounded-full bg-white/10 text-white text-sm">
                      Business Calls
                    </span>

                    <span className="px-4 py-2 rounded-full bg-white/10 text-white text-sm">
                      Flexible
                    </span>

                    <span className="px-4 py-2 rounded-full bg-white/10 text-white text-sm">
                      Reliable
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                  Business Phone Services
                </span>

                <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
                  Communication built around your business
                </h2>

                <p className="mt-5 text-slate-600 leading-7">
                  Whether your business receives customer calls, communicates
                  with suppliers or needs reliable internal communication, the
                  right phone setup can make everyday operations easier.
                </p>

                <p className="mt-4 text-slate-600 leading-7">
                  We help you explore suitable options based on your business
                  requirements.
                </p>

                <a
                  href="/quote"
                  className="inline-flex mt-8 px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
                >
                  Get a Free Quote
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-2xl">
              <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Key Features
              </span>

              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
                Designed for modern businesses
              </h2>

              <p className="mt-4 text-slate-600 leading-7">
                Explore business phone options that support professional
                communication and help your team stay connected throughout the
                working day.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-2xl bg-white border border-slate-200 p-6 hover:-translate-y-1 hover:shadow-lg transition-all"
                >
                  <div className="h-11 w-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                    ✓
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-slate-900">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-600 leading-6">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              <div>
                <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                  Business Communication
                </span>

                <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
                  Make business communication easier
                </h2>

                <p className="mt-5 text-slate-600 leading-7">
                  A dependable business phone line can help your organisation
                  manage everyday calls while keeping communication simple for
                  employees, customers and suppliers.
                </p>

                <p className="mt-4 text-slate-600 leading-7">
                  From customer enquiries to supplier conversations and
                  internal communication, having the right setup can support
                  the way your business works.
                </p>

                <div className="mt-8 space-y-4">
                  {communicationBenefits.map((benefit) => (
                    <div
                      key={benefit.title}
                      className="rounded-2xl border border-slate-200 p-5"
                    >
                      <h3 className="font-bold text-slate-900">
                        {benefit.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {benefit.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="overflow-hidden rounded-3xl">
                <img
                  src="https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=1200&q=85"
                  alt="Professionals communicating during a business meeting"
                  className="h-[520px] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1573496799515-eebbb63814f2?auto=format&fit=crop&w=1200&q=85"
                  alt="Business professional using phone for work communication"
                  className="h-72 w-full object-cover"
                />

                <div className="p-8">
                  <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                    Customer Communication
                  </span>

                  <h3 className="mt-3 text-2xl font-bold text-slate-900">
                    Stay available when customers need you
                  </h3>

                  <p className="mt-4 text-slate-600 leading-7">
                    A professional phone solution can help your business handle
                    customer conversations clearly and efficiently.
                  </p>
                </div>
              </div>

              <div className="overflow-hidden rounded-3xl bg-slate-900 text-white shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85"
                  alt="Business team working with digital communication technology"
                  className="h-72 w-full object-cover"
                />

                <div className="p-8">
                  <span className="text-sm font-semibold uppercase tracking-wider text-blue-400">
                    Team Communication
                  </span>

                  <h3 className="mt-3 text-2xl font-bold text-white">
                    Keep your team connected
                  </h3>

                  <p className="mt-4 text-slate-300 leading-7">
                    Explore communication options that can support employees,
                    internal conversations and the changing needs of your
                    organisation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Get Started
            </span>

            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
              Ready to improve your business communication?
            </h2>

            <p className="mt-5 text-slate-600 leading-7">
              Contact us and tell us what your business needs. We&apos;ll help
              you explore suitable communication options.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/quote"
                className="px-7 py-3.5 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
              >
                Get a Free Quote
              </a>

              <a
                href="/contact"
                className="px-7 py-3.5 rounded-xl border border-slate-300 text-slate-800 font-semibold hover:bg-slate-50 transition"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}