
"use client";

import { LogOut, UserRound, ShieldCheck } from "lucide-react";
import { authClient, useSession } from "../lib/auth-client";
import Image from "next/image";

const Profile = () => {
  const { data: session, isPending } = useSession();
  const user = session?.user;

  const handleLogout = async () => {
    try {
      await authClient.signOut();
      window.location.href = "/";
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  if (isPending) {
    return (
      <div className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.035] p-3">
        <div className="h-10 w-10 animate-pulse rounded-full bg-white/10" />

        <div className="min-w-0 flex-1">
          <div className="h-3 w-24 animate-pulse rounded bg-white/10" />
          <div className="mt-2 h-2 w-32 animate-pulse rounded bg-white/[0.06]" />
        </div>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="group flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.035] p-3 transition-all duration-200 hover:border-red-500/20 hover:bg-white/[0.05]">
      {/* User Avatar */}
      <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-red-500/20 bg-gradient-to-br from-red-500 to-red-800 text-white shadow-lg shadow-red-950/30">
        {user.image ? (
          <Image
          width={50}
          height={50}
            src={user.image}
            alt={user.name || "User"}
            className="h-full w-full rounded-full object-cover"
          />
        ) : (
          <UserRound size={19} />
        )}

        <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-[#0B0C12] bg-green-600" />
      </div>

      {/* User Information */}
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1.5">
          <h1 className="truncate text-xs font-bold text-white">
            {user.name || "User"}
          </h1>
          <ShieldCheck size={12} className="shrink-0 text-red-500" />
        </div>

        <p className="mt-1 truncate text-[10px] text-white/40">
          {user.email}
        </p>
      </div>

      {/* Logout */}
      <button
        onClick={handleLogout}
        type="button"
        aria-label="Logout"
        title="Logout"
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-white/35 transition-all duration-200 hover:bg-red-500/10 hover:text-red-500 active:scale-95"
      >
        <LogOut size={16} />
      </button>
    </div>
  );
};

export default Profile;
