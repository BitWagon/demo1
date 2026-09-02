import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServiceHero from "@/components/services/ServiceHero";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  CreditCard,
  Smartphone,
  ShieldCheck,
} from "lucide-react";

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
          description="Explore convenient payment solutions that help your customers pay quickly and securely."
        />

        {/* Payment Solutions */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              <Reveal direction="right">
                <div className="overflow-hidden rounded-3xl">
                  <img
                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=85"
                    alt="Customer using a card payment machine"
                    className="w-full h-[430px] object-cover hover:scale-105 transition-transform duration-700"
                  />
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

                  <Link
                    href="/quote"
                    className="inline-flex mt-8 px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:scale-105 hover:bg-blue-700 transition-all duration-300"
                  >
                    Get a Free Quote
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Payment Options */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              <Reveal direction="right">
                <div className="rounded-3xl bg-slate-900 p-10 min-h-[430px] flex flex-col justify-center hover:-translate-y-2 transition-transform duration-500">
                  <CreditCard className="h-14 w-14 text-blue-400" />

                  <h3 className="mt-8 text-3xl font-bold text-white">
                    Payment Solutions For Modern Businesses
                  </h3>

                  <p className="mt-4 text-slate-300 leading-7">
                    Explore payment solutions designed around the way your
                    customers and business operate.
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
                  <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
                    Payment Features
                  </span>

                  <div className="mt-7 space-y-6">
                    {[
                      {
                        icon: CreditCard,
                        title: "Card Payments",
                        text: "Explore solutions for accepting card payments from customers.",
                      },
                      {
                        icon: Smartphone,
                        title: "Flexible Options",
                        text: "Consider payment solutions suited to different business environments.",
                      },
                      {
                        icon: ShieldCheck,
                        title: "Secure Processing",
                        text: "Explore payment services with security and customer experience in mind.",
                      },
                    ].map((item) => {
                      const Icon = item.icon;

                      return (
                        <div key={item.title} className="flex gap-5">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                            <Icon className="h-6 w-6" />
                          </div>

                          <div>
                            <h3 className="font-bold text-slate-900">
                              {item.title}
                            </h3>

                            <p className="mt-2 leading-7 text-slate-600">
                              {item.text}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Business Payment Environments */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Built Around Your Business
              </span>

              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
                Payment solutions for different business environments
              </h2>

              <p className="mt-4 text-slate-600 leading-7">
                Different businesses have different payment requirements.
                Whether customers visit your premises, make purchases at a
                counter or receive services from your team, the right payment
                solution can support a smoother customer experience.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  title: "Retail Payments",
                  description:
                    "Support quick and convenient transactions for customers purchasing products in-store.",
                  image:
                    "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=85",
                },
                {
                  title: "Hospitality Payments",
                  description:
                    "Explore convenient payment options for restaurants, cafés, hospitality venues and customer-facing businesses.",
                  image:
                    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=85",
                },
                {
                  title: "Service Businesses",
                  description:
                    "Consider flexible payment solutions for businesses providing services directly to their customers.",
                  image:
                    "https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&w=1200&q=85",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="overflow-hidden rounded-3xl border border-slate-200 bg-white hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-56 w-full object-cover"
                  />

                  <div className="p-7">
                    <h3 className="text-xl font-bold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-slate-600 leading-7">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Features
              </span>

              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
                Payment solutions for modern businesses
              </h2>

              <p className="mt-4 text-slate-600 leading-7">
                Explore payment features designed to support convenient
                transactions and a professional customer experience.
              </p>
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

        {/* Why Card Payments */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              <Reveal direction="right">
                <div>
                  <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                    Customer Experience
                  </span>

                  <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
                    Make everyday transactions simpler
                  </h2>

                  <p className="mt-5 text-slate-600 leading-7">
                    Card and contactless payments have become an important
                    part of everyday business transactions. Giving customers a
                    convenient way to pay can help create a smoother experience
                    from checkout through to completion.
                  </p>

                  <div className="mt-8 space-y-5">
                    {[
                      "Convenient customer payments",
                      "Modern checkout experience",
                      "Flexible business options",
                      "Suitable for different business environments",
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
              </Reveal>

              <Reveal direction="left" delay={0.15}>
                <div className="overflow-hidden rounded-[2rem]">
                  <img
                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=85"
                    alt="Contactless card payment at a business"
                    className="h-[430px] w-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Explore Options */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <CheckCircle2 className="mx-auto h-12 w-12 text-blue-600" />

            <h2 className="mt-6 text-3xl font-bold text-slate-900 md:text-5xl">
              Explore Your Payment Options
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Tell us about your business and we'll help you explore suitable
              payment solutions.
            </p>

            <Link
              href="/quote"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white hover:bg-blue-700"
            >
              Get My Payment Quote
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>

        {/* Final CTA */}
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
              <Link
                href="/quote"
                className="px-7 py-3.5 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
              >
                Get a Free Quote
              </Link>

              <Link
                href="/contact"
                className="px-7 py-3.5 rounded-xl border border-slate-300 text-slate-800 font-semibold hover:bg-slate-50 transition"
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