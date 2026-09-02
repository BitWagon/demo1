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

  const closeMenus = () => {
    setMobileMenu(false);
    setServices(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenus}
          className="text-2xl font-black tracking-tight"
        >
          YOUR<span className="text-blue-600">BRAND</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">

          {/* Home */}
          <Link
            href="/"
            className="text-sm font-semibold text-slate-700 transition hover:text-blue-600"
          >
            Home
          </Link>

          {/* Services */}
          <div className="relative">

            <button
              type="button"
              onClick={() => setServices(!services)}
              aria-expanded={services}
              className="flex items-center gap-1 text-sm font-semibold text-slate-700 transition hover:text-blue-600"
            >
              Services

              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${
                  services ? "rotate-180" : ""
                }`}
              />
            </button>

            {services && (
              <div className="absolute left-0 top-9 w-72 rounded-2xl border border-slate-100 bg-white p-3 shadow-2xl">

                {/* Business Energy */}
                <Link
                  href="/energy"
                  onClick={() => setServices(false)}
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-blue-600"
                >
                  Business Energy
                </Link>

                {/* Connectivity */}
                <Link
                  href="/connectivity"
                  onClick={() => setServices(false)}
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-blue-600"
                >
                  Connectivity
                </Link>

                {/* Business Water */}
                <Link
                  href="/water"
                  onClick={() => setServices(false)}
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-blue-600"
                >
                  Business Water
                </Link>

                {/* Waste Management */}
                <Link
                  href="/waste"
                  onClick={() => setServices(false)}
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-blue-600"
                >
                  Waste Management
                </Link>

                {/* Card Machines */}
                <Link
                  href="/card-machine"
                  onClick={() => setServices(false)}
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-blue-600"
                >
                  Card Machines
                </Link>

                {/* Business Finance */}
                <Link
                  href="/finance"
                  onClick={() => setServices(false)}
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-blue-600"
                >
                  Business Finance
                </Link>

                {/* Business Insurance */}
                <Link
                  href="/insurance"
                  onClick={() => setServices(false)}
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-blue-600"
                >
                  Business Insurance
                </Link>

              </div>
            )}

          </div>

          {/* About */}
          <Link
            href="/about"
            className="text-sm font-semibold text-slate-700 transition hover:text-blue-600"
          >
            About
          </Link>

          {/* Contact */}
          <Link
            href="/contact"
            className="text-sm font-semibold text-slate-700 transition hover:text-blue-600"
          >
            Contact
          </Link>

        </nav>

        {/* Desktop Right */}
        <div className="hidden items-center gap-5 lg:flex">

          {/* Phone */}
          <a
            href="tel:+440000000000"
            className="flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-blue-600"
          >
            <Phone size={17} />
            Call Us
          </a>

          {/* Quote */}
          <Link
            href="/quote"
            className="rounded-full bg-blue-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
          >
            Get a Quote
          </Link>

        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenu(!mobileMenu)}
          className="lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenu}
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

          <nav className="flex flex-col gap-2">

            {/* Home */}
            <Link
              href="/"
              onClick={closeMenus}
              className="rounded-xl px-3 py-3 font-medium text-slate-700 hover:bg-slate-50"
            >
              Home
            </Link>

            {/* Services heading */}
            <div className="mt-2 border-t border-slate-100 pt-3">
              <p className="px-3 pb-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                Services
              </p>

              <Link
                href="/energy"
                onClick={closeMenus}
                className="block rounded-xl px-3 py-3 font-medium text-slate-700 hover:bg-slate-50"
              >
                Business Energy
              </Link>

              <Link
                href="/connectivity"
                onClick={closeMenus}
                className="block rounded-xl px-3 py-3 font-medium text-slate-700 hover:bg-slate-50"
              >
                Connectivity
              </Link>

              <Link
                href="/water"
                onClick={closeMenus}
                className="block rounded-xl px-3 py-3 font-medium text-slate-700 hover:bg-slate-50"
              >
                Business Water
              </Link>

              <Link
                href="/waste"
                onClick={closeMenus}
                className="block rounded-xl px-3 py-3 font-medium text-slate-700 hover:bg-slate-50"
              >
                Waste Management
              </Link>

              <Link
                href="/card-machine"
                onClick={closeMenus}
                className="block rounded-xl px-3 py-3 font-medium text-slate-700 hover:bg-slate-50"
              >
                Card Machines
              </Link>

              <Link
                href="/finance"
                onClick={closeMenus}
                className="block rounded-xl px-3 py-3 font-medium text-slate-700 hover:bg-slate-50"
              >
                Business Finance
              </Link>

              <Link
                href="/insurance"
                onClick={closeMenus}
                className="block rounded-xl px-3 py-3 font-medium text-slate-700 hover:bg-slate-50"
              >
                Business Insurance
              </Link>
            </div>

            {/* About */}
            <Link
              href="/about"
              onClick={closeMenus}
              className="mt-2 rounded-xl px-3 py-3 font-medium text-slate-700 hover:bg-slate-50"
            >
              About
            </Link>

            {/* Contact */}
            <Link
              href="/contact"
              onClick={closeMenus}
              className="rounded-xl px-3 py-3 font-medium text-slate-700 hover:bg-slate-50"
            >
              Contact
            </Link>

            {/* Quote */}
            <Link
              href="/quote"
              onClick={closeMenus}
              className="mt-3 rounded-full bg-blue-600 px-6 py-3 text-center font-bold text-white transition hover:bg-blue-700"
            >
              Get a Free Quote
            </Link>

          </nav>

        </div>
      )}

    </header>
  );
} 