
"use client";

import Image from "next/image";
import logo from "@/app/Logo.png";
import { Menu, Search, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const navLinks = [
    { label: "Movies", href: "/hiimovies" },
    { label: "Rewatch Plan", href: "/#rewatch-plan" },
    { label: "Booking", href: "/#booking" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#100e0e] text-white shadow-lg">

      <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link
          href="/"
          className="shrink-0"
          onClick={() => setIsOpen(false)}
        >
          <Image
            src={logo}
            alt="Doomsday Ready"
            priority
            className="h-14 w-28 object-contain sm:h-20 sm:w-40"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((navIteam) => (
            <Link
              key={navIteam.href}
              href={navIteam.href}
              className="text-xs font-semibold uppercase tracking-wider text-white/75 transition hover:text-red-400"
            >
              {navIteam.label}
            </Link>
          ))}
        </div>

        {/* Desktop Search & Button */}
        <div className="hidden items-center gap-3 md:flex">

          {/* Search */}
          <div className="flex w-44 items-center overflow-hidden rounded-md border border-white/15 bg-white/5 lg:w-52">
            <input
              type="text"
              placeholder="Search movies..."
              className="min-w-0 flex-1 bg-transparent px-3 py-2 text-sm text-white outline-none placeholder:text-white/45"
            />

            <button className="flex h-9 w-10 shrink-0 items-center justify-center border-l border-white/15 text-white/70 transition hover:bg-red-600 hover:text-white">
              <Search size={18} strokeWidth={2} />
            </button>
          </div>

          {/* Booking */}
          <Link
            href="/#booking"
            className="rounded-md bg-red-600 px-5 py-2.5 text-xs font-bold uppercase tracking-wide transition hover:bg-red-500"
          >
            Book watch party
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-white/15 transition hover:bg-white/10 lg:hidden"
        >
          {isOpen ? (
            <X size={22} strokeWidth={2} />
          ) : (
            <Menu size={22} strokeWidth={2} />
          )}
        </button>

      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-white/10 bg-[#100e0e] px-4 py-4 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col">

            {/* Mobile Search */}
            <div className="mb-3 flex items-center overflow-hidden rounded-md border border-white/15 bg-white/5">
              <input
                type="text"
                placeholder="Search movies..."
                className="min-w-0 flex-1 bg-transparent px-3 py-2.5 text-sm text-white outline-none placeholder:text-white/45"
              />

              <button className="flex h-10 w-10 shrink-0 items-center justify-center border-l border-white/15 text-white/70 transition hover:bg-red-600 hover:text-white">
                <Search size={18} />
              </button>
            </div>

            {/* Mobile Links */}
            {navLinks.map((navIteam) => (
              <Link
                key={navIteam.href}
                href={navIteam.href}
                onClick={() => setIsOpen(false)}
                className="border-b border-white/10 py-4 text-sm font-semibold uppercase tracking-wider text-white/75 transition hover:text-red-400"
              >
                {navIteam.label}
              </Link>
            ))}

            {/* Mobile Booking */}
            <Link
              href="/#booking"
              onClick={() => setIsOpen(false)}
              className="mt-4 rounded-md bg-red-600 px-5 py-3 text-center text-xs font-bold uppercase tracking-wide transition hover:bg-red-500"
            >
              Book watch party
            </Link>

          </div>
        </div>
      )}

    </nav>
  );
}
