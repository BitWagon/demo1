import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">

          {/* Brand */}
          <div className="lg:col-span-1">

            <Link
              href="/"
              className="inline-block text-2xl font-black tracking-tight"
            >
              YOUR<span className="text-blue-400">BRAND</span>
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-7 text-slate-400">
              Simple and professional business solutions designed to help
              your organisation compare smarter, save more and grow better.
            </p>

            <Link
              href="/quote"
              className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-blue-400 transition hover:text-blue-300"
            >
              Get a Quote
              <ArrowUpRight size={16} />
            </Link>

          </div>

          {/* Company */}
          <div>

            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Company
            </h3>

            <div className="mt-5 space-y-3 text-sm text-slate-400">

              <Link
                href="/about"
                className="block transition hover:translate-x-1 hover:text-white"
              >
                About
              </Link>

              <Link
                href="/contact"
                className="block transition hover:translate-x-1 hover:text-white"
              >
                Contact
              </Link>

              <Link
                href="/faq"
                className="block transition hover:translate-x-1 hover:text-white"
              >
                FAQ
              </Link>

              <Link
                href="/blog"
                className="block transition hover:translate-x-1 hover:text-white"
              >
                Blog
              </Link>

            </div>

          </div>

          {/* Services */}
          <div>

            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Services
            </h3>

            <div className="mt-5 space-y-3 text-sm text-slate-400">

              <Link
                href="/energy"
                className="block transition hover:translate-x-1 hover:text-white"
              >
                Business Energy
              </Link>

              <Link
                href="/connectivity"
                className="block transition hover:translate-x-1 hover:text-white"
              >
                Connectivity
              </Link>

              <Link
                href="/water"
                className="block transition hover:translate-x-1 hover:text-white"
              >
                Business Water
              </Link>

              <Link
                href="/waste"
                className="block transition hover:translate-x-1 hover:text-white"
              >
                Waste Management
              </Link>

              <Link
                href="/card-machine"
                className="block transition hover:translate-x-1 hover:text-white"
              >
                Card Machines
              </Link>

              <Link
                href="/finance"
                className="block transition hover:translate-x-1 hover:text-white"
              >
                Business Finance
              </Link>

              <Link
                href="/insurance"
                className="block transition hover:translate-x-1 hover:text-white"
              >
                Business Insurance
              </Link>

            </div>

          </div>

          {/* Legal */}
          <div>

            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Legal
            </h3>

            <div className="mt-5 space-y-3 text-sm text-slate-400">

              <Link
                href="/privacy"
                className="block transition hover:translate-x-1 hover:text-white"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="block transition hover:translate-x-1 hover:text-white"
              >
                Terms & Conditions
              </Link>

              <Link
                href="/cookies"
                className="block transition hover:translate-x-1 hover:text-white"
              >
                Cookie Policy
              </Link>

            </div>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Contact
            </h3>

            <div className="mt-5 space-y-4 text-sm text-slate-400">

              {/* Phone */}
              <a
                href="tel:+440000000000"
                className="flex items-start gap-3 transition hover:text-white"
              >
                <Phone
                  size={18}
                  className="mt-0.5 shrink-0 text-blue-400"
                />

                <span>
                  +44 0000 000000
                </span>
              </a>

              {/* Email */}
              <a
                href="mailto:hello@yourbrand.com"
                className="flex items-start gap-3 transition hover:text-white"
              >
                <Mail
                  size={18}
                  className="mt-0.5 shrink-0 text-blue-400"
                />

                <span className="break-all">
                  hello@yourbrand.com
                </span>
              </a>

              {/* Location */}
              <div className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-blue-400"
                />

                <span>
                  United Kingdom
                </span>
              </div>

            </div>

          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © 2026 Your Brand. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-5">

            <Link
              href="/privacy"
              className="transition hover:text-white"
            >
              Privacy
            </Link>

            <Link
              href="/terms"
              className="transition hover:text-white"
            >
              Terms
            </Link>

            <Link
              href="/cookies"
              className="transition hover:text-white"
            >
              Cookies
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}