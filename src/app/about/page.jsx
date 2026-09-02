
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Target,
  Eye,
  Zap,
  Wifi,
  Droplets,
  CreditCard,
  Building2,
  Search,
  MessageSquare,
  ShieldCheck,
  Clock3,
  BarChart3,
  Users,
} from "lucide-react";

export default function AboutPage() {
  const services = [
    {
      icon: Zap,
      title: "Business Energy",
      description:
        "Explore energy solutions and compare options that can help your business manage its ongoing energy costs.",
    },
    {
      icon: Wifi,
      title: "Business Connectivity",
      description:
        "Find connectivity and communication solutions designed to keep your business connected and productive.",
    },
    {
      icon: Droplets,
      title: "Business Water",
      description:
        "Explore water service options and find solutions suited to the needs of your business.",
    },
    {
      icon: CreditCard,
      title: "Payment Solutions",
      description:
        "Discover payment solutions that can help your business provide a smoother experience for customers.",
    },
  ];

  const benefits = [
    {
      icon: Search,
      title: "Compare Your Options",
      description:
        "Explore different business service categories through one simple comparison process.",
    },
    {
      icon: Clock3,
      title: "Save Valuable Time",
      description:
        "Spend less time searching for providers and more time focusing on your business.",
    },
    {
      icon: BarChart3,
      title: "Make Informed Decisions",
      description:
        "Understand your available options so you can choose solutions that fit your business.",
    },
    {
      icon: ShieldCheck,
      title: "A Straightforward Process",
      description:
        "We aim to make the journey from enquiry to exploring your options as simple as possible.",
    },
  ];

  const steps = [
    {
      number: "01",
      icon: MessageSquare,
      title: "Tell Us What You Need",
      description:
        "Submit a simple enquiry and let us know which business services you are interested in.",
    },
    {
      number: "02",
      icon: Search,
      title: "Explore Your Options",
      description:
        "We help you explore relevant options across the service categories available through Nexa.",
    },
    {
      number: "03",
      icon: CheckCircle2,
      title: "Choose What Works",
      description:
        "Review your options and decide which solution makes the most sense for your business.",
    },
  ];

  return (
    <>
      <Navbar />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-slate-950 py-24 text-white md:py-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.22),transparent_35%)]" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm font-semibold text-blue-300">
                <Building2 className="h-4 w-4" />
                About Nexa Business Solutions
              </div>

              <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
                Making Business Services
                <span className="text-blue-400"> Easier to Compare</span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
                We help UK businesses explore essential services through a
                simpler comparison and enquiry process, giving business owners
                a clearer way to understand their options.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/quote"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white transition hover:bg-blue-700"
                >
                  Get a Quote
                  <ArrowRight className="h-5 w-5" />
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-700 px-7 py-4 font-semibold text-white transition hover:bg-slate-900"
                >
                  Explore Services
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-400" />
                  Simple enquiry process
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-400" />
                  Multiple service categories
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-400" />
                  Built for UK businesses
                </div>
              </div>
            </div>

            {/* HERO IMAGE */}
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-blue-600/20 blur-2xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85"
                  alt="Business team working together"
                  className="h-[420px] w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-slate-950/80 p-5 backdrop-blur-md">
                  <p className="text-sm font-semibold text-blue-400">
                    Business made simpler
                  </p>

                  <p className="mt-1 text-lg font-bold text-white">
                    One place to explore essential business services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHO WE ARE */}
        <section className="bg-white py-20 md:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
            <div>
              <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
                Who We Are
              </span>

              <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-5xl">
                Business Comparison
                <span className="text-blue-600"> Without the Complexity</span>
              </h2>

              <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600">
                <p>
                  At Nexa Business Solutions, we believe business owners
                  should spend less time searching for providers and more time
                  growing their businesses.
                </p>

                <p>
                  Essential business services can often involve researching
                  different providers, understanding different options and
                  working out which solution is right for your business.
                </p>

                <p>
                  Nexa brings these service categories together through a
                  straightforward comparison and enquiry journey, helping
                  businesses explore their options in one place.
                </p>
              </div>

              <div className="mt-8">
                <Link
                  href="/quote"
                  className="inline-flex items-center gap-2 font-semibold text-blue-600 transition hover:text-blue-700"
                >
                  Start your enquiry
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-5">
                <div className="overflow-hidden rounded-3xl">
                  <img
                    src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=85"
                    alt="Business professionals meeting"
                    className="h-72 w-full object-cover"
                  />
                </div>

                <div className="mt-10 rounded-3xl bg-slate-950 p-7 text-white">
                  <Users className="h-9 w-9 text-blue-400" />

                  <p className="mt-6 text-2xl font-bold">
                    Business-first
                  </p>

                  <p className="mt-3 leading-7 text-slate-300">
                    Our approach is designed around making essential service
                    decisions easier for business owners.
                  </p>
                </div>

                <div className="rounded-3xl bg-blue-600 p-7 text-white">
                  <Target className="h-9 w-9" />

                  <p className="mt-6 text-2xl font-bold">
                    Clearer Choices
                  </p>

                  <p className="mt-3 leading-7 text-blue-100">
                    Explore relevant service categories through a simple,
                    structured process.
                  </p>
                </div>

                <div className="overflow-hidden rounded-3xl">
                  <img
                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=85"
                    alt="Business people collaborating"
                    className="h-72 w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="bg-slate-50 py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
                What We Help With
              </span>

              <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-5xl">
                Essential Services for Modern Businesses
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                From keeping your business connected to managing everyday
                essentials, Nexa helps you explore a range of important
                business services.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <div
                    key={service.title}
                    className="group rounded-3xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                      <Icon className="h-7 w-7" />
                    </div>

                    <h3 className="mt-6 text-xl font-bold text-slate-900">
                      {service.title}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      {service.description}
                    </p>

                    <Link
                      href="/services"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-600"
                    >
                      Learn more
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* WHY NEXA */}
        <section className="bg-white py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
                  Why Nexa
                </span>

                <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-5xl">
                  A Better Way to Explore Business Services
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  We focus on simplifying the comparison journey so you can
                  spend less time navigating different service options and
                  more time concentrating on your business.
                </p>

                <Link
                  href="/quote"
                  className="mt-8 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-6 py-4 font-semibold text-white transition hover:bg-slate-800"
                >
                  Start an Enquiry
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {benefits.map((benefit) => {
                  const Icon = benefit.icon;

                  return (
                    <div
                      key={benefit.title}
                      className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:shadow-lg"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white">
                        <Icon className="h-6 w-6" />
                      </div>

                      <h3 className="mt-5 text-xl font-bold text-slate-900">
                        {benefit.title}
                      </h3>

                      <p className="mt-3 leading-7 text-slate-600">
                        {benefit.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="bg-slate-950 py-20 text-white md:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-bold uppercase tracking-wider text-blue-400">
                How It Works
              </span>

              <h2 className="mt-4 text-3xl font-bold md:text-5xl">
                A Simple Three-Step Journey
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-300">
                We keep the process straightforward, helping you move from
                your initial enquiry to exploring your business service
                options.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {steps.map((step) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.number}
                    className="relative rounded-3xl border border-slate-800 bg-slate-900 p-8"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600">
                        <Icon className="h-6 w-6" />
                      </div>

                      <span className="text-4xl font-black text-slate-800">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="mt-7 text-xl font-bold">
                      {step.title}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-400">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* MISSION / VISION */}
        <section className="bg-slate-50 py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl bg-white p-8 shadow-sm md:p-12">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  <Target className="h-7 w-7" />
                </div>

                <h2 className="mt-7 text-3xl font-bold text-slate-900">
                  Our Mission
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  To make business comparison simple, transparent and
                  accessible, helping businesses explore essential services
                  without unnecessary complexity.
                </p>

                <div className="mt-7 space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-600" />
                    <span className="text-slate-600">
                      Simple and straightforward enquiries
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-600" />
                    <span className="text-slate-600">
                      Multiple essential business services
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-600" />
                    <span className="text-slate-600">
                      A clearer way to explore your options
                    </span>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl bg-slate-950 p-8 text-white shadow-sm md:p-12">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
                  <Eye className="h-7 w-7" />
                </div>

                <h2 className="mt-7 text-3xl font-bold">
                  Our Vision
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-300">
                  To become a trusted destination for businesses looking for
                  smarter and simpler ways to explore and manage essential
                  services.
                </p>

                <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-6">
                  <p className="text-lg font-semibold">
                    "Helping businesses make clearer choices, one enquiry at a
                    time."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-white py-20 md:py-28">
          <div className="mx-auto max-w-5xl px-6">
            <div className="relative overflow-hidden rounded-[2rem] bg-blue-600 px-7 py-14 text-center text-white md:px-14 md:py-20">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10" />
              <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-white/10" />

              <div className="relative">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10">
                  <Zap className="h-8 w-8" />
                </div>

                <h2 className="mt-7 text-3xl font-bold md:text-5xl">
                  Ready to Explore Your Options?
                </h2>

                <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100">
                  Tell us what your business needs and start exploring
                  essential service options through a simple enquiry process.
                </p>

                <Link
                  href="/quote"
                  className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 font-bold text-blue-600 transition hover:bg-slate-100"
                >
                  Get a Quote
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

