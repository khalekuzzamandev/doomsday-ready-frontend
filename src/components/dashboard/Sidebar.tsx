
"use client";

import {
  LayoutDashboard,
  Film,
  Clapperboard,
  Ticket,
  ChartNoAxesCombined,
  Settings,
  Menu,
  X,
  ChevronRight,
  ShieldCheck,
  Building2,
  Sparkles,
  Users,
  UserX,
  Crown,
  UserRoundCheck,
  ArrowLeft,
} from "lucide-react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Profile from "./Profile";
import Image from "next/image";
import logo from "@/app/Logo.png"

const navGroups = [
  {
    title: "Overview",
    items: [
      {
        icon: LayoutDashboard,
        label: "Dashboard",
        href: "/dashboard",
      },
      {
        icon: ChartNoAxesCombined,
        label: "Analytics",
        href: "/dashboard/analytics",
      },
    ],
  },
  {
    title: "Content Management",
    items: [
      {
        icon: Film,
        label: "Movies",
        href: "/dashboard/movies",
      },
      {
        icon: Clapperboard,
        label: "Rewatch Management",
        href: "/dashboard/rewatch",
      },
    ],
  },
  {
    title: "Booking Management",
    items: [
      {
        icon: Building2,
        label: "Cinemas",
        href: "/dashboard/cinemas",
      },
      {
        icon: Ticket,
        label: "Booking & Quotes",
        href: "/dashboard/bookings",
      },
    ],
  },
  {
    title: "User Management",
    items: [
      {
        icon: Users,
        label: "All Users",
        href: "/dashboard/users",
      },
      {
        icon: UserX,
        label: "Blocked Users",
        href: "/dashboard/users/blocked",
      },
      {
        icon: Crown,
        label: "Paid Users",
        href: "/dashboard/users/paid",
      },
      {
        icon: UserRoundCheck,
        label: "Free Users",
        href: "/dashboard/users/free",
      },
    ],
  },
];

const Sidebar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/dashboard") {
      return pathname === href;
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <>
      {/* Mobile Header */}
      <header className="fixed left-0 top-0 z-40 flex h-14 w-full items-center justify-between border-b border-white/10 bg-[#090A0F]/95 px-4 backdrop-blur-xl md:hidden">
        <Link href="/dashboard" className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-600">
            <Clapperboard size={17} className="text-white" />
          </div>

          <span className="text-sm font-black tracking-tight text-white">
            DOOMSDAY<span className="text-red-500">.</span>
          </span>
        </Link>

        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white"
        >
          <Menu size={19} />
        </button>
      </header>

      {/* Overlay */}
      {isOpen && (
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm md:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-[250px] flex-col border-r border-white/10 bg-[#0B0C12] px-4 py-5 transition-transform duration-300 md:sticky md:top-0 md:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >

        {/* Brand */}
        <div className="relative mb-8 flex shrink-0 items-center justify-between border-b border-white/[0.07] pb-5">
          {/* Back Button */}
          <Link href={'/'}
            className="absolute left-0 rounded-lg p-2 text-white/50 transition-all duration-300 hover:bg-white/5 hover:text-white"
          >
            <ArrowLeft size={20} />
          </Link>

          {/* Brand Logo */}
          <Link
            href="/dashboard"
            className="flex w-full items-center justify-center"
          >
            <Image
              src={logo}
              width={120}
              height={80}
              alt="Doomsday Logo"
              priority
              className="w-auto max-w-34 object-contain transition-transform duration-300 hover:scale-105"
            />
          </Link>

          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="absolute right-0 rounded-lg p-2 text-white/40 transition hover:bg-white/5 hover:text-white md:hidden"
          >
            <X size={19} />
          </button>
        </div>

        {/* Admin Badge */}
        <div className="mb-6 flex items-center gap-2.5 rounded-lg border border-red-600/20 bg-red-600/[0.07] p-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-600/15 text-red-500">
            <ShieldCheck size={17} />
          </div>

          <div>
            <p className="text-[11px] font-bold text-white">
              Administrator
            </p>

            <p className="mt-0.5 text-[9px] text-white/40">
              Full Access Control
            </p>
          </div>

          <Sparkles size={13} className="ml-auto text-red-500" />
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-5 overflow-y-auto pb-3 scrollbar-thin">
          {navGroups.map((group) => (
            <div key={group.title}>
              <p className="mb-2 px-2 text-[9px] font-bold uppercase tracking-[0.17em] text-white/30">
                {group.title}
              </p>

              <div className="space-y-1">
                {group.items.map((item) => {
                  const Icon = item.icon;
                  const active = isActive(item.href);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`group relative flex items-center gap-2.5 rounded-lg border px-2.5 py-2.5 transition-all duration-200 ${active
                          ? "border-red-600/20 bg-red-600/15 text-white"
                          : "border-transparent text-white/50 hover:border-white/10 hover:bg-white/[0.04] hover:text-white"
                        }`}
                    >
                      {active && (
                        <span className="absolute bottom-2 left-0 top-2 w-[3px] rounded-r-full bg-red-600" />
                      )}

                      <Icon
                        size={17}
                        className={
                          active
                            ? "text-red-500"
                            : "text-white/40 group-hover:text-red-500"
                        }
                      />

                      <span className="flex-1 text-[11px] font-semibold">
                        {item.label}
                      </span>

                      {active && (
                        <ChevronRight
                          size={14}
                          className="text-red-500"
                        />
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>

        {/* Bottom Section */}
        <div className="mt-4 space-y-2.5 border-t border-white/10 pt-4">

          {/* Settings */}
          <Link
            href="/dashboard/settings"
            onClick={() => setIsOpen(false)}
            className={`flex items-center gap-2.5 rounded-lg px-2.5 py-2.5 text-[11px] font-semibold transition ${isActive("/dashboard/settings")
                ? "bg-red-600/15 text-white"
                : "text-white/50 hover:bg-white/5 hover:text-white"
              }`}
          >
            <Settings size={17} />
            Settings
          </Link>

          {/* Admin Profile */}
              <Profile/>

          <p className="text-center text-[8px] tracking-wider text-white/20">
            DOOMSDAY READY © 2026
          </p>
        </div>
      </aside>

      {/* Mobile Spacing */}
      <div className="h-14 md:hidden" />
    </>
  );
};

export default Sidebar;
