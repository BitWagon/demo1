import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";

export default function Footer() {
  /*
   * WhatsApp number:
   * 03336516071
   *
   * WhatsApp requires the international format without:
   * +, spaces, brackets or leading zero.
   *
   * 03336516071
   * becomes:
   * 923336516071
   */
  const whatsappNumber = "923336516071";

  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <footer className="bg-slate-950 text-white">

      {/* =========================================================
          NEWSLETTER CTA
      ========================================================= */}
      <div className="border-b border-white/10 bg-slate-900">

        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">

          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            <div className="max-w-2xl">

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
                Stay Updated
              </p>

              <h2 className="mt-2 text-2xl font-bold text-white md:text-3xl">
                Get useful business insights in your inbox
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                Subscribe to our free newsletter for useful business
                updates, service information, practical tips and
                insights for businesses across the UK.
              </p>

            </div>

            <Link
              href="/newsletter"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-blue-700"
            >
              Subscribe to Newsletter

              <ArrowUpRight size={17} />
            </Link>

          </div>

        </div>

      </div>


      {/* =========================================================
          MAIN FOOTER
      ========================================================= */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">


          {/* =====================================================
              BRAND
          ===================================================== */}
          <div className="lg:col-span-1">

            <Link
              href="/"
              className="inline-block text-2xl font-black tracking-tight"
            >
              Bra<span className="text-blue-400">nd</span>
            </Link>


            <p className="mt-5 max-w-xs text-sm leading-7 text-slate-400">
              We value transparency, integrity and open communication
              in building lasting client relationships.
            </p>


            <Link
              href="/quote"
              className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-blue-400 transition hover:text-blue-300"
            >
              Get a Quote

              <ArrowUpRight size={16} />
            </Link>

          </div>


          {/* =====================================================
              COMPANY
          ===================================================== */}
          <div>

            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Company
            </h3>

            <div className="mt-5 space-y-3 text-sm text-slate-400">

              <Link
                href="/about"
                className="block transition hover:translate-x-1 hover:text-white"
              >
                About Us
              </Link>

              <Link
                href="/contact"
                className="block transition hover:translate-x-1 hover:text-white"
              >
                Contact Us
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

              <Link
                href="/newsletter"
                className="block transition hover:translate-x-1 hover:text-white"
              >
                Newsletter
              </Link>

            </div>

          </div>


          {/* =====================================================
              SERVICES
          ===================================================== */}
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
                href="/energy/electricity"
                className="block transition hover:translate-x-1 hover:text-white"
              >
                Business Electricity
              </Link>

              <Link
                href="/energy/gas"
                className="block transition hover:translate-x-1 hover:text-white"
              >
                Business Gas
              </Link>

              <Link
                href="/connectivity"
                className="block transition hover:translate-x-1 hover:text-white"
              >
                Connectivity
              </Link>

              <Link
                href="/connectivity/broadband"
                className="block transition hover:translate-x-1 hover:text-white"
              >
                Business Broadband
              </Link>

              <Link
                href="/connectivity/phone-line"
                className="block transition hover:translate-x-1 hover:text-white"
              >
                Business Phone Line
              </Link>

              <Link
                href="/water"
                className="block transition hover:translate-x-1 hover:text-white"
              >
                Business Water
              </Link>

              <Link
                href="/card-machine"
                className="block transition hover:translate-x-1 hover:text-white"
              >
                Card Machines
              </Link>

            </div>

          </div>


          {/* =====================================================
              MORE LINKS
          ===================================================== */}
          <div>

            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              More Links
            </h3>

            <div className="mt-5 space-y-3 text-sm text-slate-400">

              <Link
                href="/quote"
                className="block transition hover:translate-x-1 hover:text-white"
              >
                Get a Quote
              </Link>

              <Link
                href="/contact"
                className="block transition hover:translate-x-1 hover:text-white"
              >
                Contact Us
              </Link>

              <Link
                href="/water"
                className="block transition hover:translate-x-1 hover:text-white"
              >
                Water Supply
              </Link>

              <Link
                href="/waste"
                className="block transition hover:translate-x-1 hover:text-white"
              >
                Waste Management
              </Link>

              <Link
                href="/newsletter"
                className="block transition hover:translate-x-1 hover:text-white"
              >
                Free Newsletter
              </Link>

            </div>

          </div>


          {/* =====================================================
              CONTACT
          ===================================================== */}
          <div>

            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Company Contact
            </h3>

            <div className="mt-5 space-y-5 text-sm text-slate-400">


              {/* Phone */}
              <a
                href="tel:+443336516071"
                className="flex items-start gap-3 transition hover:text-white"
              >

                <Phone
                  size={18}
                  className="mt-0.5 shrink-0 text-blue-400"
                />

                <span>
                  03336516071
                </span>

              </a>


              {/* Email */}
              <a
                href="mailto:accounts@enovasolution.co.uk"
                className="flex items-start gap-3 transition hover:text-white"
              >

                <Mail
                  size={18}
                  className="mt-0.5 shrink-0 text-blue-400"
                />

                <span className="break-all">
                  accounts@brandsolution.co.uk
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


              {/* ONE WhatsApp link */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact us on WhatsApp"
                className="flex items-center gap-3 font-semibold text-green-400 transition hover:text-green-300"
              >

                <MessageCircle size={18} />

                <span>
                  WhatsApp Us
                </span>

              </a>

            </div>

          </div>


        </div>


        {/* =========================================================
            BOTTOM BAR
        ========================================================= */}
        <div className="mt-14 flex flex-col gap-5 border-t border-white/10 pt-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © 2026 Brand solution. All rights reserved.
          </p>


          <div className="flex flex-wrap gap-5">

            <Link
              href="/privacy"
              className="transition hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition hover:text-white"
            >
              Terms & Conditions
            </Link>

            <Link
              href="/cookies"
              className="transition hover:text-white"
            >
              Cookie Policy
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}