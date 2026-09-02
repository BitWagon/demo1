import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServiceHero from "@/components/services/ServiceHero";
import Link from "next/link";
import {
  ArrowRight,
  Zap,
  Wifi,
  Phone,
  Droplets,
  Trash2,
  CreditCard,
  BriefcaseBusiness,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    title: "Business Energy",
    description:
      "Explore commercial energy options designed around your business requirements.",
    href: "/energy",
    icon: Zap,
  },
  {
    title: "Business Electricity",
    description:
      "Compare electricity options and explore plans suitable for your business.",
    href: "/energy/electricity",
    icon: Zap,
  },
  {
    title: "Business Gas",
    description:
      "Explore business gas solutions without the need to contact multiple suppliers individually.",
    href: "/energy/gas",
    icon: Zap,
  },
  {
    title: "Business Broadband",
    description:
      "Find connectivity options built around speed, reliability and business requirements.",
    href: "/connectivity/broadband",
    icon: Wifi,
  },
  {
    title: "Business Phone",
    description:
      "Explore communication solutions designed to keep your team and customers connected.",
    href: "/connectivity/phone-line",
    icon: Phone,
  },
  {
    title: "Business Water",
    description:
      "Compare commercial water services and explore suitable options for your premises.",
    href: "/water",
    icon: Droplets,
  },
  {
    title: "Waste Management",
    description:
      "Explore practical waste collection and management solutions for businesses.",
    href: "/waste",
    icon: Trash2,
  },
  {
    title: "Card Machines",
    description:
      "Explore convenient payment solutions for accepting customer payments.",
    href: "/card-machine",
    icon: CreditCard,
  },
  {
    title: "Business Finance",
    description:
      "Explore business finance options and understand potential solutions for your requirements.",
    href: "/finance",
    icon: BriefcaseBusiness,
  },
  {
    title: "Business Insurance",
    description:
      "Explore business insurance solutions designed around different business requirements.",
    href: "/insurance",
    icon: ShieldCheck,
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main>
        <ServiceHero
          badge="Business Services"
          title="Business Solutions"
          highlight="Made Simpler"
          description="Explore essential business services through one straightforward comparison and enquiry process."
        />

        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <Link
                    key={service.title}
                    href={service.href}
                    className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                      <Icon className="h-7 w-7" />
                    </div>

                    <h2 className="mt-6 text-xl font-bold text-slate-900 group-hover:text-blue-600">
                      {service.title}
                    </h2>

                    <p className="mt-3 leading-7 text-slate-600">
                      {service.description}
                    </p>

                    <div className="mt-6 flex items-center gap-2 font-semibold text-blue-600">
                      Learn More
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}