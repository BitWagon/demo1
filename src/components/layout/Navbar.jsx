"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
} from "lucide-react";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [services, setServices] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur-xl">

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link href="/" className="text-2xl font-black tracking-tight">
          YOUR<span className="text-blue-600">BRAND</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">

          <Link
            href="/"
            className="text-sm font-semibold text-slate-700 transition hover:text-blue-600"
          >
            Home
          </Link>

          <div className="relative">

            <button
              onClick={() => setServices(!services)}
              className="flex items-center gap-1 text-sm font-semibold text-slate-700 hover:text-blue-600"
            >
              Services
              <ChevronDown
                size={16}
                className={`transition ${
                  services ? "rotate-180" : ""
                }`}
              />
            </button>

            {services && (
              <div className="absolute left-0 top-9 w-64 rounded-2xl border border-slate-100 bg-white p-3 shadow-2xl">

                <Link
                  href="/energy"
                  className="block rounded-xl px-4 py-3 text-sm hover:bg-slate-50"
                >
                  Business Energy
                </Link>

                <Link
                  href="/connectivity"
                  className="block rounded-xl px-4 py-3 text-sm hover:bg-slate-50"
                >
                  Connectivity
                </Link>

                <Link
                  href="/water"
                  className="block rounded-xl px-4 py-3 text-sm hover:bg-slate-50"
                >
                  Business Water
                </Link>

                <Link
                  href="/card-machine"
                  className="block rounded-xl px-4 py-3 text-sm hover:bg-slate-50"
                >
                  Card Machines
                </Link>

              </div>
            )}

          </div>

          <Link
            href="/about"
            className="text-sm font-semibold text-slate-700 hover:text-blue-600"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="text-sm font-semibold text-slate-700 hover:text-blue-600"
          >
            Contact
          </Link>

        </nav>

        {/* Desktop Right */}
        <div className="hidden items-center gap-5 lg:flex">

          <a
            href="tel:+440000000000"
            className="flex items-center gap-2 text-sm font-semibold text-slate-700"
          >
            <Phone size={17} />
            Call Us
          </a>

          <Link
            href="/quote"
            className="rounded-full bg-blue-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
          >
            Get a Quote
          </Link>

        </div>

        {/* Mobile */}
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="lg:hidden"
          aria-label="Toggle menu"
        >
          {mobileMenu ? (
            <X size={28} />
          ) : (
            <Menu size={28} />
          )}
        </button>

      </div>

      {/* Mobile Navigation */}
      {mobileMenu && (
        <div className="border-t border-slate-100 bg-white px-6 py-6 lg:hidden">

          <nav className="flex flex-col gap-5">

            <Link href="/" onClick={() => setMobileMenu(false)}>
              Home
            </Link>

            <Link href="/energy" onClick={() => setMobileMenu(false)}>
              Business Energy
            </Link>

            <Link href="/connectivity" onClick={() => setMobileMenu(false)}>
              Connectivity
            </Link>

            <Link href="/water" onClick={() => setMobileMenu(false)}>
              Business Water
            </Link>

            <Link href="/card-machine" onClick={() => setMobileMenu(false)}>
              Card Machines
            </Link>

            <Link href="/about" onClick={() => setMobileMenu(false)}>
              About
            </Link>

            <Link href="/contact" onClick={() => setMobileMenu(false)}>
              Contact
            </Link>

            <Link
              href="/quote"
              onClick={() => setMobileMenu(false)}
              className="rounded-full bg-blue-600 px-6 py-3 text-center font-bold text-white"
            >
              Get a Free Quote
            </Link>

          </nav>

        </div>
      )}

    </header>
  );
}