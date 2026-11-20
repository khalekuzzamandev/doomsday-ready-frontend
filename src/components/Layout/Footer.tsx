"use client"
import Image from "next/image";
import Link from "next/link";
import {
ArrowUp,
} from "lucide-react";
import logo from "@/app/Logo.png";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram, BsYoutube } from "react-icons/bs";
import { usePathname } from "next/navigation";

const Footer = () => {
  // when redirect dashboard Footer is hidden
    const pathname = usePathname();
    if (pathname.includes("dashboard")) {
      return null
    }
  return (
    <footer className="border-t border-white/10 bg-black text-white">

      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-5 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">

        {/* About */}
        <div>
          <Link href="/">
            <Image
              src={logo}
              alt="Doomsday Ready"
              className="mb-5 h-12 w-36 object-contain object-left"
            />
          </Link>

          <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
            About Us
          </h3>

          <div className="flex flex-col gap-3 text-sm text-white/65">
            <Link href="/about" className="transition hover:text-red-500">
              Who We Are
            </Link>
            <Link href="/contact" className="transition hover:text-red-500">
              Contact Us
            </Link>
          </div>
        </div>

        {/* Browse */}
        <div>
          <h3 className="mb-5 text-sm font-bold uppercase tracking-wider">
            Browse
          </h3>

          <div className="flex flex-col gap-3 text-sm text-white/65">
            <Link href="/" className="transition hover:text-red-500">
              Home
            </Link>
            <Link href="/hiimovies" className="transition hover:text-red-500">
              Movies
            </Link>
            <Link href="/#rewatch-plan" className="transition hover:text-red-500">
              Rewatch Plan
            </Link>
            <Link href="/#booking" className="transition hover:text-red-500">
              Booking
            </Link>
          </div>
        </div>

        {/* Legal */}
        <div>
          <h3 className="mb-5 text-sm font-bold uppercase tracking-wider">
            Legal
          </h3>

          <div className="flex flex-col gap-3 text-sm text-white/65">
            <Link href="/terms" className="transition hover:text-red-500">
              Terms & Conditions
            </Link>
            <Link href="/privacy" className="transition hover:text-red-500">
              Privacy Policy
            </Link>
            <Link href="/faq" className="transition hover:text-red-500">
              FAQ
            </Link>
          </div>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="mb-5 text-sm font-bold uppercase tracking-wider">
            Follow Us
          </h3>

          <div className="flex items-center gap-3">
            <Link
              href="#"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 transition hover:-translate-y-1 hover:bg-blue-500"
            >
              <FaFacebook size={19} />
            </Link>

            <Link
              href="#"
              aria-label="YouTube"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 transition hover:-translate-y-1 hover:bg-red-500"
            >
              <BsYoutube size={19} />
            </Link>

            <Link
              href="#"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-yellow-500 via-pink-600 to-purple-600 transition hover:-translate-y-1"
            >
              <BsInstagram size={19} />
            </Link>
          </div>

          <p className="mt-5 text-sm leading-6 text-white/50">
            Stay connected with us for the latest movies and updates.
          </p>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="relative border-t border-white/15">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 sm:flex-row lg:px-8">

          <p className="text-center text-xs text-white/55">
            © 2026 Doomsday Ready. All rights reserved.
          </p>

          <p className="text-xs text-white/40">
            Made for Movie Lovers.
          </p>

        </div>

        {/* Back To Top */}
        <a
          href="#top"
          aria-label="Back to top"
          className="absolute -top-5 right-5 flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-white shadow-lg shadow-red-600/20 transition hover:-translate-y-1 hover:bg-red-500 sm:right-8 lg:right-[5%]"
        >
          <ArrowUp size={22} />
        </a>

      </div>

    </footer>
  );
};

export default Footer;
