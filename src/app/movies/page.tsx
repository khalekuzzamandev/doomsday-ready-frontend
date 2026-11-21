
"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Search,
  Film,
  SlidersHorizontal,
  CheckCircle2,
  Circle,
  ArrowRight,
} from "lucide-react";

const movies = [
  {
    id: "1",
    title: "Iron Man",
    releaseYear: 2008,
    runtime: 126,
    watched: true,
    poster:
      "https://image.tmdb.org/t/p/w500/78lPtwv72eTNqFW9COBYI0dWDJa.jpg",
    prerequisites: [],
  },
  {
    id: "2",
    title: "Captain America: The First Avenger",
    releaseYear: 2011,
    runtime: 124,
    watched: true,
    poster:
      "https://image.tmdb.org/t/p/w500/vSNxAJTlD0r02V9sPYpOjqDZXUK.jpg",
    prerequisites: [],
  },
  {
    id: "3",
    title: "The Avengers",
    releaseYear: 2012,
    runtime: 143,
    watched: false,
    poster:
      "https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
    prerequisites: [
      "Iron Man",
      "Captain America: The First Avenger",
    ],
  },
  {
    id: "4",
    title: "Captain America: Civil War",
    releaseYear: 2016,
    runtime: 147,
    watched: false,
    poster:
      "https://image.tmdb.org/t/p/w500/rAGiXaUfPzY7CDEyNKUofk3Kw2e.jpg",
    prerequisites: ["The Avengers"],
  },
  {
    id: "5",
    title: "Thor: Ragnarok",
    releaseYear: 2017,
    runtime: 130,
    watched: true,
    poster:
      "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
    prerequisites: [],
  },
  {
    id: "6",
    title: "Avengers: Infinity War",
    releaseYear: 2018,
    runtime: 149,
    watched: false,
    poster:
      "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
    prerequisites: [
      "Captain America: Civil War",
      "Thor: Ragnarok",
    ],
  },
  {
    id: "7",
    title: "Avengers: Endgame",
    releaseYear: 2019,
    runtime: 181,
    watched: false,
    poster:
      "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    prerequisites: ["Avengers: Infinity War"],
  },
  {
    id: "8",
    title: "Avengers: Doomsday",
    releaseYear: 2026,
    runtime: 150,
    watched: false,
    poster:
      "https://image.tmdb.org/t/p/w500/4q2NNj4S5dG2RLF9CpXsej7yXl.jpg",
    prerequisites: ["Avengers: Endgame"],
  },
];

const AllMovies = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredMovies = movies.filter((movie) => {
    const matchesSearch = movie.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" ||
      (filter === "Watched" && movie.watched) ||
      (filter === "Unwatched" && !movie.watched);

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-[#090909] px-4 py-6 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-7">

        {/* Header */}
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-red-600/20 bg-red-600/10">
            <Film size={22} className="text-red-600" />
          </div>

          <div>
            <h1 className="text-2xl font-bold">
              MCU Collection
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              Explore your favorite Marvel movies
            </p>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <div className="relative flex-1">
            <Search
              size={19}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
            />

            <input
              type="text"
              placeholder="Search movies..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-[#121212] py-3 pl-12 pr-4 text-sm text-white outline-none transition focus:border-red-600"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto">
            <SlidersHorizontal
              size={18}
              className="shrink-0 text-gray-500"
            />

            {["All", "Watched", "Unwatched"].map((item) => (
              <button
                key={item}
                onClick={() => setFilter(item)}
                className={`shrink-0 rounded-lg px-4 py-3 text-sm font-medium transition ${filter === item
                    ? "bg-red-600 text-white"
                    : "border border-white/10 bg-[#121212] text-gray-400 hover:border-red-600 hover:text-white"
                  }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Movies Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredMovies.map((movie) => (
            <div
              key={movie.id}
              className="group overflow-hidden rounded-xl border border-white/10 bg-[#121212] p-2 transition duration-300 hover:-translate-y-1 hover:border-red-600/50"
            >
              {/* Movie Poster */}
              <div className="relative h-32 w-full overflow-hidden rounded-lg bg-[#1a1a1a] sm:h-36">
                <Image
                  src={movie.poster}
                  alt={movie.title}
                  fill
                  unoptimized
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                {/* Watch Status Badge */}
                <div className="absolute left-3 top-3">
                  {movie.watched ? (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-green-400/30 bg-black/75 px-3 py-1.5 text-xs font-semibold text-green-400 shadow-lg backdrop-blur-md">
                      <CheckCircle2 size={13} />
                      Watched
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/75 px-3 py-1.5 text-xs font-semibold text-gray-200 shadow-lg backdrop-blur-md">
                      <Circle size={13} />
                      Unwatched
                    </span>
                  )}
                </div>
              </div>

              {/* Movie Title */}
              <h2 className="mt-3 truncate px-1 text-sm font-semibold text-white">
                {movie.title}
              </h2>

              {/* Details Button */}
              <button
                type="button"
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg border border-red-600/30 bg-red-600/10 py-2.5 text-sm font-semibold text-red-500 transition hover:border-red-600 hover:bg-red-600 hover:text-white"
              >
                Details
                <ArrowRight size={15} />
              </button>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredMovies.length === 0 && (
          <div className="rounded-xl border border-white/10 bg-[#121212] py-16 text-center">
            <Film
              size={40}
              className="mx-auto text-gray-600"
            />

            <h3 className="mt-4 text-lg font-semibold">
              No Movies Found
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Try searching with a different movie title.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllMovies;
