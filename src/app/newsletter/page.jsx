import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import NewsletterForm from "@/components/forms/NewsletterForm";

export const metadata = {
  title: "Newsletter | Business Updates & Insights",
  description:
    "Subscribe to receive useful business updates, service news, energy insights, connectivity information and practical business advice.",
};

export default function NewsletterPage() {
  return (
    <>
      {/* =========================================================
          NAVBAR
      ========================================================= */}
      <Navbar />

      <main className="min-h-screen bg-slate-50">

        {/* =======================================================
            HERO SECTION
        ======================================================= */}
        <section className="relative overflow-hidden bg-slate-950 text-white">

          {/* Background decoration */}
          <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

          <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">

            <div className="grid items-center gap-12 lg:grid-cols-2">

              {/* Hero content */}
              <div>

                {/* Breadcrumb */}
                <div className="mb-7 flex items-center gap-2 text-sm text-slate-400">
                  <Link
                    href="/"
                    className="transition hover:text-white"
                  >
                    Home
                  </Link>

                  <span>/</span>

                  <span className="text-blue-400">
                    Newsletter
                  </span>
                </div>

                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                  Business Newsletter
                </span>

                <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
                  Stay informed.
                  <span className="block text-blue-400">
                    Make better decisions.
                  </span>
                </h1>

                <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 md:text-lg">
                  Get useful business insights, service updates and
                  practical information delivered directly to your
                  inbox. Stay informed about the services and
                  opportunities that matter to your business.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">

                  <a
                    href="#subscribe"
                    className="inline-flex items-center justify-center rounded-full bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700"
                  >
                    Subscribe Now
                  </a>

                  <Link
                    href="/quote"
                    className="inline-flex items-center justify-center rounded-full border border-slate-700 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800"
                  >
                    Get a Quote
                  </Link>

                </div>

              </div>


              {/* Hero image */}
              <div className="relative">

                <div className="absolute -inset-4 rounded-3xl bg-blue-500/10 blur-2xl" />

                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-2xl">

                  <img
                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85"
                    alt="Business professionals discussing business solutions"
                    className="h-[360px] w-full object-cover md:h-[450px]"
                  />

                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">

                    <p className="text-sm font-semibold text-blue-300">
                      Business Solutions
                    </p>

                    <p className="mt-2 text-lg font-bold text-white md:text-xl">
                      Information that helps your business move forward.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* =======================================================
            INTRODUCTION
        ======================================================= */}
        <section className="py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6">

            <div className="mx-auto max-w-3xl text-center">

              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                Join Our Newsletter
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                Business information without the noise
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Businesses have enough to think about. Our newsletter
                brings together useful information about business
                services, energy, connectivity, payments and other
                areas that can affect your day-to-day operations.
              </p>

              <p className="mt-4 text-base leading-8 text-slate-600">
                Subscribe to receive relevant updates and practical
                insights that can help you understand your options and
                make more informed business decisions.
              </p>

            </div>

          </div>
        </section>


        {/* =======================================================
            BUSINESS TOPICS
        ======================================================= */}
        <section className="bg-white py-20 md:py-24">

          <div className="mx-auto max-w-7xl px-6">

            <div className="mx-auto max-w-3xl text-center">

              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                What We Cover
              </span>

              <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
                Topics that matter to your business
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                Our updates focus on practical areas of business
                services and solutions, helping you stay aware of
                useful developments.
              </p>

            </div>


            {/* Topic cards */}
            <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">

              {/* =================================================
                  CARD 1 — ENERGY
              ================================================= */}
              <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

                <div className="relative h-52 overflow-hidden">

                  <img
                    src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=900&q=85"
                    alt="Business energy and electricity"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-slate-950/30" />

                </div>

                <div className="p-7">

                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                    Energy
                  </span>

                  <h3 className="mt-3 text-xl font-bold text-slate-900">
                    Business Energy
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Stay informed about business energy services,
                    electricity, gas and considerations that can help
                    your business manage its energy requirements.
                  </p>

                </div>

              </article>


              {/* =================================================
                  CARD 2 — CONNECTIVITY
              ================================================= */}
              <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

                <div className="relative h-52 overflow-hidden">

                  <img
                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=85"
                    alt="Business connectivity and technology"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-slate-950/30" />

                </div>

                <div className="p-7">

                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                    Connectivity
                  </span>

                  <h3 className="mt-3 text-xl font-bold text-slate-900">
                    Broadband & Connectivity
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Discover useful information about broadband,
                    connectivity and communication services that help
                    businesses stay connected.
                  </p>

                </div>

              </article>


              {/* =================================================
                  CARD 3 — BUSINESS SERVICES
              ================================================= */}
              <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

                <div className="relative h-52 overflow-hidden">

                  <img
                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=85"
                    alt="Business team working together"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-slate-950/30" />

                </div>

                <div className="p-7">

                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                    Business Services
                  </span>

                  <h3 className="mt-3 text-xl font-bold text-slate-900">
                    Solutions for Your Business
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Learn more about business water, card machines,
                    phone services and other solutions that can
                    support your business operations.
                  </p>

                </div>

              </article>

            </div>

          </div>
        </section>


        {/* =======================================================
            NEWSLETTER FORM SECTION
        ======================================================= */}
        <section
          id="subscribe"
          className="scroll-mt-24 bg-slate-50 py-20 md:py-28"
        >

          <div className="mx-auto max-w-7xl px-6">

            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

              {/* LEFT */}
              <div>

                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                  Subscribe Today
                </span>

                <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                  Get the latest business updates in your inbox
                </h2>

                <p className="mt-6 text-base leading-8 text-slate-600">
                  Join businesses and professionals who want to stay
                  informed about useful business services, industry
                  developments and practical information.
                </p>

                <p className="mt-4 text-base leading-8 text-slate-600">
                  Enter your email address and subscribe. We will keep
                  our communications focused on information that is
                  useful to your business.
                </p>


                {/* Small highlights */}
                <div className="mt-8 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-2xl border border-slate-200 bg-white p-5">

                    <div className="text-2xl font-bold text-blue-600">
                      ✓
                    </div>

                    <h3 className="mt-3 font-bold text-slate-900">
                      Useful Updates
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Practical business information.
                    </p>

                  </div>


                  <div className="rounded-2xl border border-slate-200 bg-white p-5">

                    <div className="text-2xl font-bold text-blue-600">
                      ✓
                    </div>

                    <h3 className="mt-3 font-bold text-slate-900">
                      Relevant Content
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Updates related to business services.
                    </p>

                  </div>

                </div>

              </div>


              {/* RIGHT FORM */}
              <div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl md:p-8 lg:p-10">

                  <div className="mb-8">

                    <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                      Newsletter Signup
                    </span>

                    <h2 className="mt-3 text-2xl font-bold text-slate-900 md:text-3xl">
                      Subscribe to our newsletter
                    </h2>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      Enter your email address below to receive our
                      latest business updates and insights.
                    </p>

                  </div>


                  {/* REAL EXISTING NEWSLETTER FORM */}
                  <NewsletterForm />


                  <div className="mt-6 border-t border-slate-100 pt-6">

                    <p className="text-xs leading-5 text-slate-500">
                      By subscribing, you agree to receive newsletter
                      communications from us. You can unsubscribe at
                      any time.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* =======================================================
            WHY SUBSCRIBE
        ======================================================= */}
        <section className="border-y border-slate-200 bg-white py-20 md:py-24">

          <div className="mx-auto max-w-7xl px-6">

            <div className="mx-auto max-w-3xl text-center">

              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                Why Subscribe?
              </span>

              <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
                Stay one step ahead
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                Keep your business informed with relevant information
                without having to search for it yourself.
              </p>

            </div>


            <div className="mt-14 grid gap-6 md:grid-cols-3">

              {/* Card 1 */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white">
                  01
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  Stay Informed
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Keep up with useful developments and information
                  relevant to your business.
                </p>

              </div>


              {/* Card 2 */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white">
                  02
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  Explore Better Options
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Understand different business service options and
                  identify areas where your business may benefit.
                </p>

              </div>


              {/* Card 3 */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white">
                  03
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  Make Informed Decisions
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Get practical information that can support better
                  decisions for your business.
                </p>

              </div>

            </div>

          </div>
        </section>


        {/* =======================================================
            FINAL CTA
        ======================================================= */}
        <section className="bg-slate-950 py-20 text-white md:py-24">

          <div className="mx-auto max-w-4xl px-6 text-center">

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Need Business Support?
            </span>

            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Looking for the right business service?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
              From business energy and connectivity to water,
              payments and other business services, our team can help
              you explore the options available for your business.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

              <Link
                href="/quote"
                className="rounded-full bg-blue-600 px-7 py-4 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Get a Quote
              </Link>

              <Link
                href="/contact"
                className="rounded-full border border-slate-700 px-7 py-4 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Contact Us
              </Link>

            </div>

          </div>

        </section>

      </main>


      {/* =========================================================
          FOOTER
      ========================================================= */}
      <Footer />
    </>
  );
}