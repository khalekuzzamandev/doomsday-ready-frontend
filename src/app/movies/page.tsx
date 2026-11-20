
"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Search,
  Clock,
  Calendar,
  CheckCircle2,
  Circle,
  Film,
  SlidersHorizontal,
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
    prerequisites: ["Iron Man", "Captain America: The First Avenger"],
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
    prerequisites: ["Captain America: Civil War", "Thor: Ragnarok"],
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

  const watchedCount = movies.filter((movie) => movie.watched).length;

  return (
    <div className="min-h-screen bg-[#090909] px-4 py-6 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-8">

        {/* Header */}
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <div className="mb-2 flex items-center gap-2 text-sm text-red-500">
              <Film size={16} />
              <span className="font-semibold uppercase tracking-[3px]">
                MCU Collection
              </span>
            </div>

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
              className="w-full rounded-xl border border-white/10 bg-[#121212] py-3 pl-12 pr-4 text-sm outline-none transition focus:border-red-600"
            />
          </div>

          <div className="flex items-center gap-2">
            <SlidersHorizontal size={18} className="text-gray-400" />

            {["All", "Watched", "Unwatched"].map((item) => (
              <button
                key={item}
                onClick={() => setFilter(item)}
                className={`rounded-lg px-4 py-3 text-sm font-medium transition ${filter === item
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
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredMovies.map((movie) => (
            <div
              key={movie.id}
              className="group overflow-hidden rounded-xl border border-white/10 bg-[#121212] transition duration-300 hover:-translate-y-1 hover:border-red-600/60"
            >
              {/* Poster */}
              <div className="relative aspect-[3/4] overflow-hidden bg-[#1a1a1a]">
                <Image
                  src={movie.poster}
                  alt={movie.title}
                  fill
                  unoptimized
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

                <div className="absolute right-3 top-3">
                  {movie.watched ? (
                    <span className="flex items-center gap-1 rounded-full bg-green-600/90 px-3 py-1.5 text-xs font-semibold">
                      <CheckCircle2 size={13} />
                      Watched
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 rounded-full bg-black/70 px-3 py-1.5 text-xs font-semibold text-gray-300">
                      <Circle size={13} />
                      Unwatched
                    </span>
                  )}
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-red-400">
                    MCU Movie
                  </p>
                  <h2 className="mt-1 text-xl font-bold leading-tight">
                    {movie.title}
                  </h2>
                </div>
              </div>

              {/* Movie Info */}
              <div className="space-y-4 p-4">
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={15} />
                    {movie.releaseYear}
                  </span>

                  <span className="flex items-center gap-1.5">
                    <Clock size={15} />
                    {movie.runtime} min
                  </span>
                </div>

                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Prerequisites
                  </p>

                  {movie.prerequisites.length > 0 ? (
                    <div className="flex flex-wrap gap-1.5">
                      {movie.prerequisites.map((item) => (
                        <span
                          key={item}
                          className="rounded-md border border-red-500/20 bg-red-500/10 px-2 py-1 text-xs text-red-400"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <p className="text-xs text-gray-500">
                      No prerequisites
                    </p>
                  )}
                </div>

                <button
                  className={`flex w-full items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-semibold transition ${movie.watched
                      ? "border border-white/10 bg-white/5 text-gray-300 hover:bg-white/10"
                      : "bg-red-600 text-white hover:bg-red-700"
                    }`}
                >
                  {movie.watched ? (
                    <>
                      <CheckCircle2 size={16} />
                      Already Watched
                    </>
                  ) : (
                    <>
                      <Circle size={16} />
                      Mark as Watched
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredMovies.length === 0 && (
          <div className="rounded-xl border border-white/10 bg-[#121212] py-16 text-center">
            <Film size={40} className="mx-auto text-gray-600" />
            <h3 className="mt-4 text-lg font-semibold">No Movies Found</h3>
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
