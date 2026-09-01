import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServiceHero from "@/components/services/ServiceHero";

const benefits = [
  {
    title: "Reliable Connection",
    description:
      "Give your team a dependable connection for everyday business activities.",
  },
  {
    title: "Flexible Options",
    description:
      "Explore broadband options that can be matched to your business requirements.",
  },
  {
    title: "Business Ready",
    description:
      "Support video calls, cloud applications, browsing and other essential services.",
  },
  {
    title: "Scalable",
    description:
      "Choose a solution that can support your business as your requirements grow.",
  },
];

export default function BusinessBroadbandPage() {
  return (
    <>
      <Navbar />

      <main>
        <ServiceHero
          badge="Business Broadband"
          title="Fast, Reliable"
          highlight="Business Broadband"
          description="Keep your employees, customers and systems connected with broadband solutions designed for modern businesses."
        />

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              <div>
                <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                  Business Internet
                </span>

                <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
                  A connection your business can rely on
                </h2>

                <p className="mt-5 text-slate-600 leading-7">
                  From everyday browsing to cloud applications and online
                  meetings, your internet connection plays an important role
                  in keeping your business running.
                </p>

                <p className="mt-4 text-slate-600 leading-7">
                  We help businesses explore broadband options based on their
                  location, team size, usage and requirements.
                </p>

                <a
                  href="/quote"
                  className="inline-flex mt-8 px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
                >
                  Get a Free Quote
                </a>
              </div>

              <div className="rounded-3xl bg-slate-900 p-8 md:p-10">
                <div className="text-6xl">📶</div>

                <h3 className="mt-8 text-2xl font-bold text-white">
                  Business connectivity made simple
                </h3>

                <p className="mt-4 text-slate-300 leading-7">
                  Find an internet solution that matches the way your business
                  actually works.
                </p>

                <div className="mt-8 h-2 rounded-full bg-slate-700 overflow-hidden">
                  <div className="h-full w-4/5 bg-blue-500 rounded-full" />
                </div>

                <p className="mt-3 text-sm text-slate-400">
                  Built around your requirements
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Benefits
              </span>

              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
                Why choose business broadband?
              </h2>

              <p className="mt-4 text-slate-600">
                Your business deserves connectivity that supports your daily
                operations.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition"
                >
                  <div className="h-10 w-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 font-bold">
                    ✓
                  </div>

                  <h3 className="mt-5 font-bold text-lg text-slate-900">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-600 leading-6">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-blue-600">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Looking for better business broadband?
            </h2>

            <p className="mt-4 text-blue-100 leading-7">
              Tell us what your business needs and explore suitable broadband
              options.
            </p>

            <a
              href="/quote"
              className="inline-flex mt-8 px-7 py-3.5 rounded-xl bg-white text-blue-700 font-bold hover:bg-slate-100 transition"
            >
              Request a Quote
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}