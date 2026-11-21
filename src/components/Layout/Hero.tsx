
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    image: "/assets/image01.jpg",
    alt: "Iron Man, the hero who started the MCU journey",
  },
  {
    image: "/assets/image02.jpg",
    alt: "Black Panther and the people of Wakanda",
  },
  {
    image: "/assets/image03.jpg",
    alt: "The Black Panther team standing together",
  },
  {
    image: "/assets/image04.jpg",
    alt: "Captain Marvel beneath a star-filled sky",
  },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (
      !isPlaying ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [isPlaying]);

  const showPreviousSlide = () => {
    setActiveSlide((current) => (current - 1 + slides.length) % slides.length);
  };

  const showNextSlide = () => {
    setActiveSlide((current) => (current + 1) % slides.length);
  };

  return (
    <div className="bg-[#090909]">
      <section
        aria-label="Featured Marvel movies"
        aria-roledescription="carousel"
        className="relative isolate flex min-h-[400px] items-center overflow-hidden rounded-md bg-neutral-950 text-white sm:min-h-[460px] lg:min-h-[520px] max-w-7xl mx-auto"
      >
        <div className="absolute inset-0 -z-10">
          <Image
            src={slides[activeSlide].image}
            alt={slides[activeSlide].alt}
            fill
            priority={activeSlide === 0}
            sizes="100vw"
            className="object-cover object-center transition-opacity duration-700 motion-reduce:transition-none"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />
        </div>

        <div className="mx-auto flex min-h-[400px] w-full max-w-7xl items-center px-5 py-14 sm:min-h-[460px] sm:px-8 sm:py-16 lg:min-h-[520px] lg:px-12">
          <div className="max-w-xl">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.22em] text-red-400 sm:text-[11px]">
              Your next movie marathon starts here
            </p>

            <h1 className="text-2xl font-black uppercase leading-[1.08] tracking-tight sm:text-4xl lg:text-5xl">
              Get ready for
              <span className="mt-1.5 block text-red-500">Avengers</span>
              <span className="block">Doomsday</span>
            </h1>

            <p className="mt-3 max-w-lg text-xs leading-5 text-white/75 sm:text-sm sm:leading-6">
              Plan your MCU rewatch, track what you have seen, and get your group
              together for opening night.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/#movies"
                className="rounded-md bg-red-600 px-4 py-2 text-[11px] font-bold uppercase tracking-wide transition-colors hover:bg-red-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:px-5 sm:py-2.5 sm:text-xs"
              >
                Build my rewatch plan
              </Link>

              <Link
                href="/#booking"
                className="rounded-md border border-white/35 bg-white/5 px-4 py-2 text-[11px] font-bold uppercase tracking-wide transition-colors hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:px-5 sm:py-2.5 sm:text-xs"
              >
                Plan opening night
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 right-5 flex items-center gap-3 sm:bottom-8 sm:right-8 lg:right-12">
          <span className="mr-1 text-[11px] font-semibold tabular-nums text-white/70">
            {String(activeSlide + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </span>

          <button
            type="button"
            aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
            aria-pressed={!isPlaying}
            onClick={() => setIsPlaying((playing) => !playing)}
            className="flex h-9 items-center justify-center rounded-full border border-white/35 bg-black/30 px-3 text-[11px] font-semibold text-white transition-colors hover:bg-white/15"
          >
            {isPlaying ? "Pause" : "Play"}
          </button>

          <button
            type="button"
            aria-label="Show previous image"
            onClick={showPreviousSlide}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/35 bg-black/30 transition-colors hover:bg-white/15"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none">
              <path d="m15 18-6-6 6-6" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>

          <button
            type="button"
            aria-label="Show next image"
            onClick={showNextSlide}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/35 bg-black/30 transition-colors hover:bg-white/15"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none">
              <path d="m9 18 6-6-6-6" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>

          <div className="ml-1 flex items-center gap-1.5" aria-label="Choose slide">
            {slides.map((slide, index) => (
              <button
                key={slide.image}
                type="button"
                aria-label={`Show image ${index + 1}`}
                aria-current={activeSlide === index ? "true" : undefined}
                onClick={() => setActiveSlide(index)}
                className={`h-1.5 rounded-full transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${activeSlide === index
                  ? "w-7 bg-red-500"
                  : "w-1.5 bg-white/55 hover:bg-white"
                  }`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
