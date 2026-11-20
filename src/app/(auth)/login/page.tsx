
"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "@/app/Logo.png";
import { ShieldCheck, Loader2 } from "lucide-react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { authClient } from "@/components/lib/auth-client";

const Login = () => {
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = async () => {
    if (loading) return;

    try {
      setLoading(true);

      const { error } = await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });

      if (error) {
        console.error("Google Login Error:", error);
        setLoading(false);
      }
    } catch (error) {
      console.error("Google Login Error:", error);
      setLoading(false);
    }
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#080808] px-4 py-10 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(220,38,38,0.10),transparent_55%)]" />

      <div className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-red-600/10 blur-[120px]" />

      <div className="relative z-10 w-full max-w-sm rounded-xl border border-white/10 bg-[#111111] p-6 shadow-2xl">
        <div className="mb-4 flex justify-center">
          <Image
            src={logo}
            alt="Brand Logo"
            width={120}
            height={40}
            className="h-10 w-auto object-contain"
            priority
          />
        </div>

        <h1 className="mb-1 text-center text-xl font-bold text-white">
          Welcome Back
        </h1>

        <p className="mb-6 text-center text-xs text-gray-400">
          Sign in with your social account
        </p>

        <div className="space-y-3">
          <button
            onClick={handleGoogleLogin}
            disabled={loading}
            type="button"
            className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-lg border border-white/10 bg-white py-3 text-sm font-semibold text-black transition hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? (
              <Loader2 size={19} className="animate-spin" />
            ) : (
              <FcGoogle size={19} />
            )}

            {loading ? "Redirecting..." : "Continue with Google"}
          </button>

          <button
            type="button"
            disabled={loading}
            className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-lg bg-[#1877F2] py-3 text-sm font-semibold text-white transition hover:bg-[#1668D8] disabled:cursor-not-allowed disabled:opacity-60"
          >
            <FaFacebook size={19} />
            Continue with Facebook
          </button>
        </div>

        <p className="mt-6 text-center text-[11px] text-gray-500">
          By continuing, you agree to our Terms &amp; Privacy Policy.
        </p>

        <div className="mt-6 flex items-center justify-center gap-2 border-t border-white/10 pt-4">
          <ShieldCheck size={14} className="text-green-500" />
          <span className="text-[10px] text-white/35">
            Your data is protected and secure
          </span>
        </div>
      </div>
    </main>
  );
};

export default Login;
