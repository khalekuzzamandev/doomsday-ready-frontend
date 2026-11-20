
"use client";

import {
  Search,
  Bell,
  ChevronDown,
  ShieldCheck,
  Command,
} from "lucide-react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-30 w-full shrink-0 border-b border-white/10 bg-[#090A0F]/95 backdrop-blur-xl py-3">
      <div className="flex h-14 w-full min-w-0 items-center justify-between gap-3 px-4 sm:px-5 lg:px-6">

        {/* Left Section */}
        <div className="min-w-0">
          <h1 className="truncate text-base font-bold text-white sm:text-lg">
            Dashboard
          </h1>

          <p className="hidden truncate text-[11px] text-gray-500 sm:block">
            Welcome back! Here&apos;s your movie universe overview.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">

          {/* Search */}
          <div className="hidden w-48 items-center gap-2 rounded-lg border border-white/10 bg-[#15161D] px-3 py-2 md:flex lg:w-60">
            <Search size={15} className="shrink-0 text-gray-500" />

            <input
              type="text"
              placeholder="Search anything..."
              className="w-full min-w-0 bg-transparent text-xs text-white outline-none placeholder:text-gray-600"
            />

            <kbd className="flex shrink-0 items-center gap-1 rounded border border-white/10 px-1.5 py-1 text-[9px] text-gray-500">
              <Command size={9} />
              K
            </kbd>
          </div>

          {/* Notification */}
          <button
            type="button"
            aria-label="Notifications"
            className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-[#15161D] text-gray-400 transition hover:border-red-600/30 hover:text-red-500"
          >
            <Bell size={17} />

            <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-red-600 ring-2 ring-[#15161D]" />
          </button>

          {/* Divider */}
          <div className="mx-0.5 h-7 w-px bg-white/10" />

          {/* Admin Profile */}
          <button
            type="button"
            className="flex shrink-0 items-center gap-2 rounded-lg p-1 transition hover:bg-white/5"
          >
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-red-600/20 bg-red-600/10 text-red-500">
              <ShieldCheck size={18} />
            </div>

            <div className="hidden text-left sm:block">
              <p className="text-xs font-semibold text-white">
                Admin
              </p>

              <p className="text-[9px] text-gray-500">
                Super Administrator
              </p>
            </div>

            <ChevronDown
              size={14}
              className="hidden text-gray-500 sm:block"
            />
          </button>

        </div>
      </div>
    </header>
  );
};

export default Navbar;
