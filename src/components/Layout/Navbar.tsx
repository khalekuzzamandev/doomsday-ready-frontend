
import Image from "next/image";

import logo from "@/app/Logo.png";
import { Menu, Search } from "lucide-react";
import Link from "next/link";

export default function Navbar() {

  const navLinks = [
    { label: "Movies", href: "/hiimovies" },
    { label: "Rewatch Plan", href: "/#rewatch-plan" },
    { label: "Booking", href: "/#booking" },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#100e0e] text-white shadow-lg">
      <nav className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src={logo}
            alt="Doomsday Ready"
            priority
            className="h-20 w-40 object-contain"
          />
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
         {
          navLinks.map((navIteam)=>(
            <Link key={navIteam.href} href={navIteam.href} className="text-xs font-semibold uppercase tracking-wider text-white/75 transition hover:text-red-400">
              {navIteam.label}
            </Link>
          )
           )
         }
        </div>

        {/* Search & Button */}
        <div className="flex items-center gap-3">
          <div className="hidden w-44 items-center overflow-hidden rounded-md border border-white/15 bg-white/5 md:flex lg:w-52">
            <input
              type="text"
              placeholder="Search movies..."
              className="min-w-0 flex-1 bg-transparent px-3 py-2 text-sm text-white outline-none placeholder:text-white/45"
            />
            <button className="flex h-9 w-10 items-center justify-center border-l border-white/15 text-white/70 transition hover:bg-red-600 hover:text-white">
              <Search size={18} strokeWidth={2} />
            </button>
          </div>

          <Link
            href="/"
            className="hidden rounded-md bg-red-600 px-5 py-2.5 text-xs font-bold uppercase tracking-wide transition hover:bg-red-500 md:inline-flex"
          >
            Book watch party
          </Link>

          {/* Mobile Menu Icon */}
          <button className="flex h-10 w-10 items-center justify-center rounded-md border border-white/15 transition hover:bg-white/10 lg:hidden">
            <Menu size={22} strokeWidth={2} />
          </button>
        </div>
      </nav>
    </header>
  );
}
