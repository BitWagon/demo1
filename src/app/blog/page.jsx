import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    category: "Business Energy",
    title: "What Should Businesses Consider When Comparing Energy?",
    description:
      "A practical overview of the information businesses may want to consider when exploring commercial energy options.",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=85",
  },
  {
    category: "Connectivity",
    title: "How to Think About Broadband Requirements for Your Business",
    description:
      "Understand some of the factors that can influence your business connectivity requirements.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85",
  },
  {
    category: "Business Services",
    title: "Why Comparing Business Services Can Save Time",
    description:
      "Learn how bringing your research into one comparison process can make exploring business services easier.",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=85",
  },
  {
    category: "Payments",
    title: "What to Consider When Choosing a Card Machine",
    description:
      "Explore practical considerations when looking at payment solutions for your business.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=85",
  },
  {
    category: "Business Management",
    title: "Questions to Ask Before Changing a Business Service",
    description:
      "A useful checklist for businesses considering a change to an essential service.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85",
  },
  {
    category: "Business Advice",
    title: "Making Better Business Decisions With Clear Information",
    description:
      "Why understanding your options is an important part of choosing business services.",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=85",
  },
  {
    category: "Business Water",
    title: "Understanding Commercial Water Requirements",
    description:
      "Explore some of the factors businesses may want to consider when reviewing their commercial water services.",
    image:
      "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=1200&q=85",
  },
  {
    category: "Waste Management",
    title: "How Businesses Can Think About Waste Management",
    description:
      "A practical look at collection, recycling and waste management considerations for commercial premises.",
    image:
      "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1200&q=85",
  },
  {
    category: "Business Finance",
    title: "What Should Businesses Consider When Exploring Finance?",
    description:
      "Understand some of the key questions businesses may want to ask when exploring potential finance options.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=85",
  },
];

export default function BlogPage() {
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
                  Business Insights
                </span>

                <h1 className="mt-5 max-w-4xl text-4xl font-bold md:text-6xl">
                  Ideas to Help You Make{" "}
                  <span className="text-blue-400">Better Decisions</span>
                </h1>

                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                  Practical information about business services, comparison
                  and everyday business decisions.
                </p>

                <p className="mt-5 max-w-2xl leading-7 text-slate-400">
                  Explore helpful insights covering business energy,
                  connectivity, payments, water, waste management, finance
                  and other essential business services.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/quote"
                    className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
                  >
                    Request a Quote
                  </Link>

                  <Link
                    href="/contact"
                    className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-white transition hover:bg-slate-900"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>

              <div>
                <img
                  src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1600&q=85"
                  alt="Business professionals discussing business decisions"
                  className="h-[420px] w-full rounded-3xl object-cover shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1400&q=85"
                  alt="Business team working together"
                  className="h-[430px] w-full rounded-3xl object-cover"
                />
              </div>

              <div>
                <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
                  Practical Business Information
                </span>

                <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
                  Information That Helps You Explore Your Options
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Running a business means making decisions about a wide range
                  of essential services. From energy and connectivity to
                  payments, finance and business protection, understanding the
                  available options can make the process easier.
                </p>

                <p className="mt-4 leading-8 text-slate-600">
                  Our business insights are designed to provide practical
                  information that can help you think about your requirements
                  before making an enquiry or comparing potential solutions.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-slate-50 p-5">
                    <h3 className="font-bold text-slate-900">
                      Understand Options
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Learn more about the services businesses use every day.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-slate-50 p-5">
                    <h3 className="font-bold text-slate-900">
                      Plan With Confidence
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Consider your requirements before making decisions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Insights */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
                Featured Insights
              </span>

              <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
                Explore Our Latest Business Insights
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Practical guidance covering the business services and
                decisions that matter to your organisation.
              </p>
            </div>

            <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <article
                  key={post.title}
                  className="group overflow-hidden rounded-3xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-7">
                    <span className="text-sm font-bold text-blue-600">
                      {post.category}
                    </span>

                    <h2 className="mt-5 text-xl font-bold leading-8 text-slate-900">
                      {post.title}
                    </h2>

                    <p className="mt-4 leading-7 text-slate-600">
                      {post.description}
                    </p>

                    <Link
                      href="/contact"
                      className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-600"
                    >
                      Discuss Your Requirements
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Business Energy & Connectivity */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="overflow-hidden rounded-3xl bg-slate-900 text-white">
                <img
                  src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1400&q=85"
                  alt="Commercial energy and electricity"
                  className="h-64 w-full object-cover"
                />

                <div className="p-8">
                  <span className="text-sm font-bold uppercase tracking-wider text-blue-400">
                    Business Energy
                  </span>

                  <h2 className="mt-3 text-2xl font-bold">
                    Reviewing Your Business Energy Requirements
                  </h2>

                  <p className="mt-4 leading-7 text-slate-300">
                    Energy can be an important operating cost for businesses.
                    Understanding your usage, contract circumstances and
                    requirements can help you approach comparisons with
                    greater clarity.
                  </p>

                  <Link
                    href="/energy"
                    className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-400"
                  >
                    Explore Energy Services
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="overflow-hidden rounded-3xl bg-slate-50">
                <img
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=85"
                  alt="Business broadband and connectivity infrastructure"
                  className="h-64 w-full object-cover"
                />

                <div className="p-8">
                  <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
                    Business Connectivity
                  </span>

                  <h2 className="mt-3 text-2xl font-bold text-slate-900">
                    Thinking About Your Connectivity Needs
                  </h2>

                  <p className="mt-4 leading-7 text-slate-600">
                    Reliable connectivity supports communication, online
                    systems and day-to-day operations. Reviewing your
                    requirements can help you identify what your business
                    needs from its connectivity services.
                  </p>

                  <Link
                    href="/connectivity"
                    className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-600"
                  >
                    Explore Connectivity
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Business Decisions */}
        <section className="bg-slate-950 py-20 text-white">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <span className="text-sm font-bold uppercase tracking-wider text-blue-400">
                  Business Decision Making
                </span>

                <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                  Start With Your Business Requirements
                </h2>

                <p className="mt-5 leading-8 text-slate-300">
                  Before comparing business services, it can be useful to
                  understand what your organisation actually needs. Your
                  current situation, operating requirements, budget and future
                  plans can all influence the options worth exploring.
                </p>

                <div className="mt-8 space-y-5">
                  <div className="flex gap-4">
                    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600">
                      ✓
                    </div>

                    <div>
                      <h3 className="font-bold">Understand Your Current Service</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-400">
                        Review what you currently use and identify any areas
                        you may want to change.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600">
                      ✓
                    </div>

                    <div>
                      <h3 className="font-bold">Consider Your Priorities</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-400">
                        Think about the features, flexibility and requirements
                        that matter most to your business.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600">
                      ✓
                    </div>

                    <div>
                      <h3 className="font-bold">Compare Relevant Options</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-400">
                        Explore options that are appropriate for your business
                        circumstances.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <img
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=85"
                  alt="Business professionals reviewing business information"
                  className="h-[440px] w-full rounded-3xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
                Service Areas
              </span>

              <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
                Business Services We Can Help You Explore
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Explore information across a range of services that can
                support the day-to-day needs of your organisation.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Business Energy",
                  description:
                    "Explore electricity and gas options for your business.",
                  href: "/energy",
                },
                {
                  title: "Business Connectivity",
                  description:
                    "Explore broadband and business phone requirements.",
                  href: "/connectivity",
                },
                {
                  title: "Business Water",
                  description:
                    "Understand commercial water and related services.",
                  href: "/water",
                },
                {
                  title: "Waste Management",
                  description:
                    "Consider waste collection and management requirements.",
                  href: "/waste-management",
                },
                {
                  title: "Business Finance",
                  description:
                    "Explore potential finance options for your organisation.",
                  href: "/finance",
                },
                {
                  title: "Business Insurance",
                  description:
                    "Learn about different types of business protection.",
                  href: "/insurance",
                },
              ].map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-lg"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-lg font-bold text-slate-900">
                      {service.title}
                    </h3>

                    <ArrowRight className="h-5 w-5 text-blue-600 transition group-hover:translate-x-1" />
                  </div>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {service.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* How We Can Help */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1400&q=85"
                  alt="Business discussion and consultation"
                  className="h-[430px] w-full rounded-3xl object-cover"
                />
              </div>

              <div>
                <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
                  Need Help?
                </span>

                <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
                  Turn Information Into Your Next Business Step
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Reading about your options is a useful starting point. If
                  you're ready to discuss your requirements, you can make an
                  enquiry and provide information about the services your
                  business currently uses or is considering.
                </p>

                <p className="mt-4 leading-8 text-slate-600">
                  We'll use the information you provide to understand what
                  you're looking for and help you explore suitable options.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/quote"
                    className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
                  >
                    Request a Quote
                  </Link>

                  <Link
                    href="/contact"
                    className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-900 transition hover:border-blue-300 hover:text-blue-600"
                  >
                    Contact Us
                  </Link>
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
              Use our insights as a starting point, then tell us what your
              business needs and explore suitable service options.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/quote"
                className="rounded-xl bg-white px-7 py-3.5 font-semibold text-blue-600 transition hover:bg-slate-100"
              >
                Request a Quote
              </Link>

              <Link
                href="/contact"
                className="rounded-xl border border-white/40 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}