
import Link from "next/link";
import {
  ArrowUpRight,
  Zap,
  Wifi,
  Droplets,
  CreditCard,
} from "lucide-react";

const icons = {
  zap: Zap,
  wifi: Wifi,
  water: Droplets,
  card: CreditCard,
};

export default function ServiceCard({ service }) {

  const Icon = icons[service.icon];

  return (
    <Link
      href={service.href}
      className="group rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
    >

      <div className="flex items-center justify-between">

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
          <Icon size={27} />
        </div>

        <ArrowUpRight
          size={24}
          className="text-slate-300 transition group-hover:text-blue-600"
        />

      </div>

      <h3 className="mt-8 text-2xl font-bold text-slate-900">
        {service.title}
      </h3>

      <p className="mt-4 leading-7 text-slate-600">
        {service.description}
      </p>

      <div className="mt-7 font-bold text-blue-600">
        Explore Service →
      </div>

    </Link>
  );
}