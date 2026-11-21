
"use client";

import Image from "next/image";
import {
  CalendarDays,
  Clock,
  Film,
  Lock,
} from "lucide-react";

const movies = [
  {
    id: "1",
    title: "Avengers: Doomsday",
    releaseYear: 2026,
    releaseDate: "December 18, 2026",
    poster:
      "https://image.tmdb.org/t/p/w500/4q2NNj4S5dG2RLF9CpXsej7yXl.jpg",
  },
  {
    id: "2",
    title: "Spider-Man: Brand New Day",
    releaseYear: 2026,
    releaseDate: "July 31, 2026",
    poster:
      "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
  },
  {
    id: "3",
    title: "Avengers: Secret Wars",
    releaseYear: 2027,
    releaseDate: "December 17, 2027",
    poster:
      "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
  },
  {
    id: "4",
    title: "Blade",
    releaseYear: 2027,
    releaseDate: "Coming Soon",
    poster:
      "https://image.tmdb.org/t/p/w500/9O1Iy9od7d2YkY3w7G7KxQ.jpg",
  },
];

const UpcommigMovies = () => {
  return (
    <div className="min-h-screen bg-[#090909] px-4 py-6 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-7">

        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-red-600/20 bg-red-600/10">
              <CalendarDays size={22} className="text-red-600" />
            </div>

            <div>
              <h1 className="text-2xl font-bold">
                Upcoming Movies
              </h1>
              <p className="mt-1 text-sm text-gray-500">
                Discover upcoming Marvel releases
              </p>
            </div>
          </div>

          <span className="hidden rounded-lg border border-red-600/20 bg-red-600/10 px-3 py-2 text-sm font-medium text-red-500 sm:block">
            {movies.length} Movies
          </span>
        </div>

        {/* Movies Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="group overflow-hidden rounded-xl border border-white/10 bg-[#101010] p-2 transition duration-300 hover:border-red-600/40"
            >
              {/* Dark Movie Poster */}
              <div className="relative h-32 w-full overflow-hidden rounded-lg bg-[#090909] sm:h-36">
                <Image
                  src={movie.poster}
                  alt={movie.title}
                  fill
                  unoptimized
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover brightness-[0.35] grayscale-[35%] transition duration-500 group-hover:brightness-[0.45]"
                />

                <div className="absolute inset-0 bg-black/30" />

                {/* Coming Soon Badge */}
                <div className="absolute left-3 top-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-red-500/30 bg-black/80 px-3 py-1.5 text-xs font-semibold text-red-400 shadow-lg backdrop-blur-md">
                    <Lock size={12} />
                    Coming Soon
                  </span>
                </div>

                {/* Unavailable Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex flex-col items-center gap-1.5 text-gray-400">
                    <Lock size={22} />
                    <span className="text-[10px] font-semibold uppercase tracking-[2px]">
                      Not Available
                    </span>
                  </div>
                </div>
              </div>

              {/* Movie Title */}
              <h2 className="mt-3 truncate px-1 text-sm font-semibold text-gray-300">
                {movie.title}
              </h2>

              {/* Release Date */}
              <div className="mt-2 flex items-center gap-2 px-1 text-xs text-gray-500">
                <CalendarDays size={14} className="text-red-500/70" />
                {movie.releaseDate}
              </div>

              {/* Release Year */}
              <div className="mt-2 flex items-center gap-2 px-1 text-xs text-gray-500">
                <Clock size={14} className="text-red-500/70" />
                Release Year: {movie.releaseYear}
              </div>

              {/* Disabled Button */}
              <button
                type="button"
                disabled
                className="mt-3 flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] py-2.5 text-sm font-semibold text-gray-600"
              >
                <Lock size={14} />
                Not Released Yet
              </button>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {movies.length === 0 && (
          <div className="rounded-xl border border-white/10 bg-[#121212] py-16 text-center">
            <Film size={40} className="mx-auto text-gray-600" />

            <h3 className="mt-4 text-lg font-semibold">
              No Upcoming Movies
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Upcoming movies will appear here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UpcommigMovies;
