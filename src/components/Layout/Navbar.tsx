
"use client";

import Image from "next/image";
import logo from "@/app/Logo.png";
import {
  Menu,
  Search,
  X,
  UserRound,
  LogOut,
} from "lucide-react";
import Link from "next/link";

import { authClient, useSession } from "@/components/lib/auth-client";
import { useState } from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { usePathname } from "next/navigation";

export default function Navbar() {


  const [isOpen, setIsOpen] = useState(false);
  const [imageError, setImageError] = useState(false);

  const { data, isPending } = useSession();
  const user = data?.user;

  const navLinks = [
    { label: "Movies", href: "/movies" },
    { label: "Rewatch Plan", href: "/rewatch" },
    { label: "Booking", href: "/booking" },
    { label: "WatchList", href: "/watchlist" },
  ];

  // when redirect dashboard navbar is hidden
  const pathname = usePathname();
  if (pathname.includes("dashboard")) {
    return null
  }

  const handleLogout = async () => {
    try {
      await authClient.signOut();
      setIsOpen(false);
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };


  const userProfile = (
    <div className="flex items-center gap-3 rounded-md border border-white/15 bg-white/5 p-1">
      <Link
        href="/profile"
        onClick={() => setIsOpen(false)}
        className="flex min-w-0 items-center transition hover:opacity-80"
      >
        {user?.image && !imageError ? (
          <Image
            src={user.image}
            width={38}
            height={38}
            alt={user.name || "User Profile"}
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            className="h-9 w-9 rounded-md object-cover"
          />
        ) : (
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-red-600">
            <UserRound size={20} />
          </div>
        )}
      </Link>

      {user?.role === "admin" ? (
        <Link
          href="/dashboard"
          onClick={() => setIsOpen(false)}
          title="Dashboard"
          aria-label="Dashboard"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border-l border-white/15 text-white/70 transition hover:bg-orange-600 hover:text-white"
        >
          <MdOutlineDashboard size={20} />
        </Link>
      ) : (
        <button
          type="button"
          onClick={handleLogout}
          title="Logout"
          aria-label="Logout"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border-l border-white/15 text-white/70 transition hover:bg-red-600 hover:text-white"
        >
          <LogOut size={18} />
        </button>
      )}
    </div>
  );

  const signInButton = (
    <Link
      href="/login"
      className="rounded-md bg-red-600 px-4 py-2.5 text-xs font-bold uppercase tracking-wide transition hover:bg-red-500"
    >
      Sign In
    </Link>
  );

  const authentication = isPending ? (
    <div className="h-10 w-28 animate-pulse rounded-md bg-white/10" />
  ) : user ? (
    userProfile
  ) : (
    signInButton
  );

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#100e0e] text-white shadow-lg">
      <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-4">

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
          {navLinks.map((navItem) => (
            <Link
              key={navItem.href}
              href={navItem.href}
              className="text-xs font-semibold uppercase tracking-wider text-white/75 transition hover:text-red-400"
            >
              {navItem.label}
            </Link>
          ))}
        </div>

        {/* Desktop Search & Profile */}
        <div className="hidden items-center gap-3 md:flex">
          <div className="flex w-36 items-center overflow-hidden rounded-md border border-white/15 bg-white/5 px-2">
            <input
              type="text"
              placeholder="Search..."
              className="min-w-0 flex-1 bg-transparent py-2 text-sm text-white outline-none placeholder:text-white/45"
            />

            <button
              type="button"
              aria-label="Search"
              className="flex h-9 w-10 shrink-0 items-center justify-center border-l border-white/15 text-white/70 transition hover:bg-red-600 hover:text-white"
            >
              <Search size={18} />
            </button>
          </div>

          {authentication}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-white/15 transition hover:bg-white/10 lg:hidden"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
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

              <button
                type="button"
                aria-label="Search"
                className="flex h-10 w-10 shrink-0 items-center justify-center border-l border-white/15 text-white/70 transition hover:bg-red-600 hover:text-white"
              >
                <Search size={18} />
              </button>
            </div>

            {/* Mobile Links */}
            {navLinks.map((navItem) => (
              <Link
                key={navItem.href}
                href={navItem.href}
                onClick={() => setIsOpen(false)}
                className="border-b border-white/10 py-4 text-sm font-semibold uppercase tracking-wider text-white/75 transition hover:text-red-400"
              >
                {navItem.label}
              </Link>
            ))}

            {/* Mobile Authentication */}
            <div className="mt-4">
              {authentication}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
