import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceGrid from "@/components/services/ServiceGrid";

const connectivityServices = [
  {
    id: "broadband",
    title: "Business Broadband",
    description:
      "Reliable and flexible broadband solutions designed to keep your business connected and productive.",
    icon: "wifi",
    href: "/connectivity/broadband",
  },
  {
    id: "phone-line",
    title: "Business Phone Line",
    description:
      "Professional business phone solutions that help your team stay connected with customers.",
    icon: "phone",
    href: "/connectivity/phone-line",
  },
];

export default function ConnectivityPage() {
  return (
    <>
      <Navbar />

      <main>
        <ServiceHero
          badge="Business Connectivity"
          title="Keep Your Business"
          highlight="Connected"
          description="Discover reliable broadband and business communication solutions designed to support your team, customers, and day-to-day operations."
        />

        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-2xl mb-12">
              <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Our Connectivity Services
              </span>

              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
                Solutions that keep your business moving
              </h2>

              <p className="mt-4 text-slate-600 leading-7">
                Whether you need faster broadband or a dependable business
                phone system, explore our connectivity services and find an
                option that fits your organisation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {connectivityServices.map((service) => (
                <ServiceGridCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                  Why Connectivity Matters
                </span>

                <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
                  Stay connected. Stay productive.
                </h2>

                <p className="mt-5 text-slate-600 leading-7">
                  Modern businesses rely on fast and dependable communication.
                  A suitable connectivity setup can help your employees work
                  efficiently while giving customers a better experience.
                </p>

                <div className="mt-8 grid sm:grid-cols-2 gap-5">
                  {[
                    "Reliable connectivity",
                    "Business-focused solutions",
                    "Flexible packages",
                    "Support for growing teams",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 p-4 rounded-2xl border border-slate-200"
                    >
                      <div className="h-2.5 w-2.5 rounded-full bg-blue-600" />
                      <span className="text-sm font-medium text-slate-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl bg-slate-900 p-8 md:p-10 text-white">
                <span className="text-blue-400 font-semibold">
                  Need help choosing?
                </span>

                <h3 className="mt-3 text-2xl md:text-3xl font-bold">
                  Let&apos;s find the right connectivity solution.
                </h3>

                <p className="mt-4 text-slate-300 leading-7">
                  Tell us about your business requirements and we can help you
                  explore suitable options.
                </p>

                <a
                  href="/quote"
                  className="inline-flex mt-8 px-6 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:bg-slate-100 transition"
                >
                  Get a Free Quote
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

function ServiceGridCard({ service }) {
  return (
    <a
      href={service.href}
      className="group rounded-3xl bg-white border border-slate-200 p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      <div className="h-14 w-14 rounded-2xl bg-blue-50 flex items-center justify-center">
        <span className="text-2xl">
          {service.icon === "wifi" ? "📶" : "☎️"}
        </span>
      </div>

      <h3 className="mt-6 text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition">
        {service.title}
      </h3>

      <p className="mt-3 text-slate-600 leading-7">
        {service.description}
      </p>

      <span className="inline-flex mt-6 text-sm font-semibold text-blue-600">
        Explore service →
      </span>
    </a>
  );
}