import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Reveal from "@/components/animations/Reveal";
import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerItem";

const values = [
  {
    title: "Simple",
    description:
      "We make business service options easier to understand and compare.",
  },
  {
    title: "Transparent",
    description:
      "We aim to provide clear information so businesses can make informed decisions.",
  },
  {
    title: "Business Focused",
    description:
      "Our approach is built around understanding what each business actually needs.",
  },
  {
    title: "Helpful",
    description:
      "We believe businesses should have access to straightforward support when choosing services.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main>
        <section className="relative overflow-hidden bg-slate-900 py-24 md:py-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(37,99,235,0.25),_transparent_45%)]" />

          <div className="relative max-w-7xl mx-auto px-6">
            <Reveal direction="right">
              <div className="max-w-3xl">
                <span className="text-sm font-semibold uppercase tracking-wider text-blue-400">
                  About Us
                </span>

                <h1 className="mt-5 text-4xl md:text-6xl font-bold text-white leading-tight">
                  Helping businesses make
                  <span className="text-blue-400"> smarter choices.</span>
                </h1>

                <p className="mt-6 text-lg text-slate-300 leading-8 max-w-2xl">
                  We help businesses explore essential services and find
                  solutions that fit their individual requirements.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              <div>
                <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                  Who We Are
                </span>

                <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
                  Business services without the confusion
                </h2>

                <p className="mt-5 text-slate-600 leading-7">
                  Running a business already requires enough time and
                  attention. Choosing essential services should not make things
                  harder.
                </p>

                <p className="mt-4 text-slate-600 leading-7">
                  Our goal is to make it easier for businesses to understand
                  their options across connectivity, energy, water and payment
                  services.
                </p>

                <p className="mt-4 text-slate-600 leading-7">
                  We focus on a straightforward experience that helps
                  businesses move from research to making a confident decision.
                </p>
              </div>

              <div className="rounded-3xl bg-slate-50 border border-slate-200 p-8 md:p-10">
                <div className="grid grid-cols-2 gap-5">
                  <div className="rounded-2xl bg-white p-6 shadow-sm">
                    <p className="text-3xl font-bold text-blue-600">4+</p>
                    <p className="mt-2 text-sm text-slate-600">
                      Business service areas
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white p-6 shadow-sm">
                    <p className="text-3xl font-bold text-blue-600">1</p>
                    <p className="mt-2 text-sm text-slate-600">
                      Simple experience
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white p-6 shadow-sm">
                    <p className="text-3xl font-bold text-blue-600">100%</p>
                    <p className="mt-2 text-sm text-slate-600">
                      Business focused
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white p-6 shadow-sm">
                    <p className="text-3xl font-bold text-blue-600">24/7</p>
                    <p className="mt-2 text-sm text-slate-600">
                      Online access
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Our Values
              </span>

              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
                What we believe in
              </h2>
            </div>

            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {values.map((value) => (
                <StaggerItem key={value.title}>
                  <div className="h-full bg-white border border-slate-200 rounded-2xl p-6 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                    <div className="h-11 w-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                      ✓
                    </div>

                    <h3 className="mt-5 text-xl font-bold text-slate-900">
                      {value.title}
                    </h3>

                    <p className="mt-3 text-slate-600 leading-6">
                      {value.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        <section className="py-20 bg-blue-600">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Let&apos;s find the right solution for your business
            </h2>

            <p className="mt-4 text-blue-100">
              Tell us what you need and take the next step.
            </p>

            <a
              href="/quote"
              className="inline-flex mt-8 px-7 py-3.5 rounded-xl bg-white text-blue-700 font-bold"
            >
              Get a Free Quote
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
