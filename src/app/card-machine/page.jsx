import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServiceHero from "@/components/services/ServiceHero";

import Reveal from "@/components/animations/Reveal";
import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerItem";

const features = [
  {
    title: "Card Payments",
    description:
      "Give customers a convenient way to pay for products and services.",
  },
  {
    title: "Modern Payment Experience",
    description:
      "Support a smooth checkout experience with modern card payment technology.",
  },
  {
    title: "Flexible Solutions",
    description:
      "Explore payment solutions suitable for different types and sizes of businesses.",
  },
  {
    title: "Business Focused",
    description:
      "Find an option based around your transaction needs and day-to-day operations.",
  },
];

export default function CardMachinePage() {
  return (
    <>
      <Navbar />

      <main>
        <ServiceHero
          badge="Card Machines"
          title="Simple"
          highlight="Business Payments"
          description="Explore modern card payment solutions that make it easier for your customers to pay."
        />

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              <Reveal direction="right">
                <div className="rounded-3xl bg-slate-900 p-10 min-h-[430px] flex flex-col justify-center hover:-translate-y-2 transition-transform duration-500">
                  <div className="text-7xl">💳</div>

                  <h3 className="mt-8 text-3xl font-bold text-white">
                    Make payments easier
                  </h3>

                  <p className="mt-4 text-slate-300 leading-7">
                    Customers increasingly expect fast and convenient payment
                    options. A suitable card machine can help your business
                    deliver a better checkout experience.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <span className="px-4 py-2 rounded-full bg-white/10 text-white text-sm">
                      Card Payments
                    </span>

                    <span className="px-4 py-2 rounded-full bg-white/10 text-white text-sm">
                      Contactless
                    </span>

                    <span className="px-4 py-2 rounded-full bg-white/10 text-white text-sm">
                      Business Ready
                    </span>
                  </div>
                </div>
              </Reveal>

              <Reveal direction="left" delay={0.15}>
                <div>
                  <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                    Payment Solutions
                  </span>

                  <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
                    Accept payments with confidence
                  </h2>

                  <p className="mt-5 text-slate-600 leading-7">
                    Whether you run a retail business, restaurant, service
                    company or another type of organisation, accepting card
                    payments can be an important part of your customer
                    experience.
                  </p>

                  <p className="mt-4 text-slate-600 leading-7">
                    Explore payment options and find a solution that matches
                    your business needs.
                  </p>

                  <a
                    href="/quote"
                    className="inline-flex mt-8 px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:scale-105 hover:bg-blue-700 transition-all duration-300"
                  >
                    Get a Free Quote
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Features
              </span>

              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
                Payment solutions for modern businesses
              </h2>
            </div>

            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {features.map((feature) => (
                <StaggerItem key={feature.title}>
                  <div className="h-full rounded-2xl bg-white border border-slate-200 p-6 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
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
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Ready to improve your payment experience?
            </h2>

            <p className="mt-5 text-slate-600 leading-7">
              Tell us about your business and explore suitable card payment
              solutions.
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
