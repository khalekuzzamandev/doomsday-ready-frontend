"use client";

import {
  Plus,
  Search,
  Film,
  Pencil,
  Trash2,
  Star,
  Clapperboard,
  Eye,
} from "lucide-react";
import Image from "next/image";

const movies = [
  {
    id: "MOV-001",
    title: "The Dark Knight",
    genre: "Action, Crime",
    releaseDate: "2008-07-18",
    duration: "152 min",
    rating: "9.0",
    status: "Published",
    poster:
      "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
  },
  {
    id: "MOV-002",
    title: "Inception",
    genre: "Sci-Fi, Thriller",
    releaseDate: "2010-07-16",
    duration: "148 min",
    rating: "8.8",
    status: "Published",
    poster:
      "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
  },
  {
    id: "MOV-003",
    title: "Interstellar",
    genre: "Sci-Fi, Drama",
    releaseDate: "2014-11-07",
    duration: "169 min",
    rating: "8.7",
    status: "Draft",
    poster:
      "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
  },
  {
    id: "MOV-004",
    title: "Joker",
    genre: "Crime, Drama",
    releaseDate: "2019-10-04",
    duration: "122 min",
    rating: "8.4",
    status: "Published",
    poster:
      "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
  },
];

const Movie = () => {
  return (
    <div className="min-h-screen bg-[#090A0F] p-4 text-white sm:p-6 lg:p-8">

      {/* Header */}
      <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
        <div>
          <div className="mb-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-red-500">
            <Clapperboard size={15} />
            Content Management
          </div>

          <h1 className="text-2xl font-black tracking-tight sm:text-3xl">
            Movie Management
          </h1>

          <p className="mt-2 text-xs text-white/40 sm:text-sm">
            Manage and organize your movie collection.
          </p>
        </div>

        <button className="flex items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-xs font-bold text-white shadow-lg shadow-red-950/30 transition hover:bg-red-500">
          <Plus size={17} />
          Add New Movie
        </button>
      </div>

      {/* Table Container */}
      <div className="overflow-hidden rounded-2xl border border-white/[0.07] bg-[#101117]">

        {/* Table Header */}
        <div className="flex flex-col justify-between gap-4 border-b border-white/[0.07] p-5 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-sm font-bold">All Movies</h2>
            <p className="mt-1 text-[11px] text-white/35">
              Manage your movie information
            </p>
          </div>

          {/* Search UI */}
          <div className="relative w-full sm:w-72">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30"
            />

            <input
              type="text"
              placeholder="Search movies..."
              className="w-full rounded-xl border border-white/10 bg-[#090A0F] py-2.5 pl-10 pr-4 text-xs text-white outline-none placeholder:text-white/25 transition focus:border-red-500/50"
            />
          </div>
        </div>

        {/* Movie Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px] text-left">

            <thead>
              <tr className="border-b border-white/[0.07] bg-white/[0.02] text-[10px] font-bold uppercase tracking-wider text-white/35">
                <th className="px-5 py-4">Movie</th>
                <th className="px-5 py-4">Genre</th>
                <th className="px-5 py-4">Release Date</th>
                <th className="px-5 py-4">Duration</th>
                <th className="px-5 py-4">Rating</th>
                <th className="px-5 py-4">Status</th>
                <th className="px-5 py-4 text-center">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-white/[0.05]">
              {movies.map((movie) => (
                <tr
                  key={movie.id}
                  className="transition-colors hover:bg-white/[0.025]"
                >
                  {/* Movie Information */}
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <Image
                        width={80}
                        height={50}
                        src={movie.poster}
                        alt={movie.title}
                        className="h-14 w-10 rounded-lg border border-white/10 object-cover"
                      />

                      <div>
                        <p className="text-xs font-bold text-white">
                          {movie.title}
                        </p>
                        <p className="mt-1 text-[10px] text-white/35">
                          {movie.id}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Genre */}
                  <td className="px-5 py-4 text-xs text-white/55">
                    {movie.genre}
                  </td>

                  {/* Release Date */}
                  <td className="px-5 py-4 text-xs text-white/55">
                    {movie.releaseDate}
                  </td>

                  {/* Duration */}
                  <td className="px-5 py-4 text-xs text-white/55">
                    {movie.duration}
                  </td>

                  {/* Rating */}
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-white">
                      <Star
                        size={14}
                        className="fill-yellow-500 text-yellow-500"
                      />
                      {movie.rating}
                    </div>
                  </td>

                  {/* Status */}
                  <td className="px-5 py-4">
                    <span
                      className={`rounded - full border px - 2.5 py - 1 text - [10px] font - bold ${
  movie.status === "Published"
    ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-400"
    : "border-orange-500/20 bg-orange-500/10 text-orange-400"
} `}
                    >
                      {movie.status}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="px-5 py-4">
                    <div className="flex items-center justify-center gap-2">

                      {/* View Details */}
                      <button
                        title="View Details"
                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-white/50 transition hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-blue-400"
                      >
                        <Eye size={14} />
                      </button>

                      {/* Edit */}
                      <button
                        title="Edit Movie"
                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-white/50 transition hover:border-red-500/30 hover:bg-red-500/10 hover:text-red-500"
                      >
                        <Pencil size={14} />
                      </button>

                      {/* Delete */}
                      <button
                        title="Delete Movie"
                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-white/50 transition hover:border-red-500/30 hover:bg-red-500/10 hover:text-red-500"
                      >
                        <Trash2 size={14} />
                      </button>

                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-white/[0.07] px-5 py-4">
          <p className="text-[11px] text-white/35">
            Showing 4 of 4 movies
          </p>

          <span className="flex items-center gap-2 text-[10px] font-semibold text-white/40">
            <Film size={14} />
            Movie Collection
          </span>
        </div>
      </div>
    </div>
  );
};

export default Movie;
