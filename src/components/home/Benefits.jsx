import {
  CheckCircle2,
  ShieldCheck,
  Users,
  Clock,
  Target,
} from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Experienced Support",
    text: "Get guidance from people who understand business requirements.",
  },
  {
    icon: Target,
    title: "Business Focused",
    text: "Solutions designed around your specific business needs.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Approach",
    text: "A simple and transparent approach to comparing options.",
  },
  {
    icon: Clock,
    title: "Fast Response",
    text: "We aim to make the process straightforward and efficient.",
  },
];

export default function Benefits() {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-16 lg:grid-cols-2">

          <div>

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Why Choose Us
            </p>

            <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">
              Making business decisions simpler
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              We help businesses understand their options
              and find solutions that fit their requirements.
            </p>

            <div className="mt-8 space-y-4">

              {[
                "Simple enquiry process",
                "Business-focused solutions",
                "Dedicated support",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    size={20}
                    className="text-blue-600"
                  />

                  <span className="font-medium text-slate-700">
                    {item}
                  </span>

                </div>
              ))}

            </div>

          </div>

          <div className="grid gap-5 sm:grid-cols-2">

            {benefits.map((benefit) => {

              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="rounded-3xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:shadow-lg"
                >

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Icon size={23} />
                  </div>

                  <h3 className="mt-6 font-bold text-slate-900">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {benefit.text}
                  </p>

                </div>
              );

            })}

          </div>

        </div>

      </div>

    </section>
  );
}