import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">

      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>

            <Link
              href="/"
              className="text-2xl font-black"
            >
              YOUR<span className="text-blue-400">
                BRAND
              </span>
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-7 text-slate-400">
              Simple and professional business solutions
              designed to help your organisation move forward.
            </p>

          </div>

          {/* Services */}
          <div>

            <h3 className="font-bold">
              Services
            </h3>

            <div className="mt-5 space-y-3 text-sm text-slate-400">

              <Link
                href="/energy"
                className="block hover:text-white"
              >
                Business Energy
              </Link>

              <Link
                href="/connectivity"
                className="block hover:text-white"
              >
                Connectivity
              </Link>

              <Link
                href="/water"
                className="block hover:text-white"
              >
                Business Water
              </Link>

              <Link
                href="/card-machine"
                className="block hover:text-white"
              >
                Card Machines
              </Link>

            </div>

          </div>

          {/* Company */}
          <div>

            <h3 className="font-bold">
              Company
            </h3>

            <div className="mt-5 space-y-3 text-sm text-slate-400">

              <Link
                href="/about"
                className="block hover:text-white"
              >
                About Us
              </Link>

              <Link
                href="/contact"
                className="block hover:text-white"
              >
                Contact
              </Link>

              <Link
                href="/privacy"
                className="block hover:text-white"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="block hover:text-white"
              >
                Terms & Conditions
              </Link>

            </div>

          </div>

          {/* Contact */}
          <div>

            <h3 className="font-bold">
              Contact
            </h3>

            <div className="mt-5 space-y-4 text-sm text-slate-400">

              <div className="flex gap-3">
                <Phone size={18} />
                +44 0000 000000
              </div>

              <div className="flex gap-3">
                <Mail size={18} />
                hello@yourbrand.com
              </div>

              <div className="flex gap-3">
                <MapPin size={18} />
                United Kingdom
              </div>

            </div>

          </div>

        </div>

        <div className="mt-14 border-t border-white/10 pt-8 text-sm text-slate-500">

          © 2026 Your Brand. All rights reserved.

        </div>

      </div>

    </footer>
  );
}