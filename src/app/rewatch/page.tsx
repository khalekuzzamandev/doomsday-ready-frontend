
"use client";

import { useState } from "react";
import { CheckCircle2, Circle, Clock, Film } from "lucide-react";

const movies = [
  { id: 1, title: "Iron Man", year: 2008, time: 126, watched: true },
  { id: 2, title: "Captain America: The First Avenger", year: 2011, time: 124, watched: true },
  { id: 3, title: "The Avengers", year: 2012, time: 143, watched: true },
  { id: 4, title: "Captain America: Civil War", year: 2016, time: 147, watched: true },
  { id: 5, title: "Thor: Ragnarok", year: 2017, time: 130, watched: false },
  { id: 6, title: "Avengers: Infinity War", year: 2018, time: 149, watched: false },
  { id: 7, title: "Avengers: Endgame", year: 2019, time: 181, watched: false },
];

const Rewatch = () => {
  const [target, setTarget] = useState("Avengers: Doomsday");
  const [watched, setWatched] = useState(movies.filter(m => m.watched).map(m => m.id));

  const watchedCount = watched.length;
  const progress = (watchedCount / movies.length) * 100;
  const remaining = movies.filter(m => !watched.includes(m.id)).reduce((sum, m) => sum + m.time, 0);

  return (
    <div className="min-h-screen bg-[#090909] p-4 text-white sm:p-6 lg:p-8">
      <div className="mx-auto max-w-5xl space-y-7">
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-[3px] text-red-500">MCU Collection</p>
          <h1 className="text-3xl font-bold">Your <span className="text-red-600">Rewatch Plan</span></h1>
          <p className="mt-2 text-sm text-gray-400">Get ready for Avengers: Doomsday.</p>
        </div>

        <div className="rounded-xl border border-white/10 bg-[#121212] p-5">
          <label className="mb-3 block text-sm text-gray-400">Select Target Movie</label>
          <select value={target} onChange={e => setTarget(e.target.value)} className="w-full rounded-lg border border-white/10 bg-[#1b1b1b] p-3 text-white outline-none focus:border-red-600">
            {["Avengers: Doomsday", "Avengers: Endgame", "Avengers: Infinity War", "Captain America: Civil War", "Thor: Ragnarok"].map(m => <option key={m}>{m}</option>)}
          </select>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-[#121212] p-5">
            <p className="text-sm text-gray-400">Total Movies</p>
            <h2 className="mt-2 text-3xl font-bold">{movies.length}</h2>
          </div>
          <div className="rounded-xl border border-white/10 bg-[#121212] p-5">
            <p className="text-sm text-gray-400">Watched</p>
            <h2 className="mt-2 text-3xl font-bold text-green-500">{watchedCount}</h2>
          </div>
          <div className="rounded-xl border border-white/10 bg-[#121212] p-5">
            <p className="text-sm text-gray-400">Remaining Time</p>
            <h2 className="mt-2 text-3xl font-bold text-red-500">{Math.floor(remaining / 60)}h {remaining % 60}m</h2>
          </div>
        </div>

        <div className="rounded-xl border border-white/10 bg-[#121212] p-5">
          <div className="mb-3 flex justify-between text-sm">
            <span className="font-semibold">Watch Progress</span>
            <span className="text-red-500">{watchedCount} of {movies.length} watched</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-white/10">
            <div className="h-full rounded-full bg-red-600 transition-all" style={{ width: `${progress}%` }} />
          </div>
        </div>

        <div className="rounded-xl border border-white/10 bg-[#121212] p-5">
          <h2 className="mb-5 flex items-center gap-2 text-lg font-bold"><Film className="text-red-500" /> Watch Order</h2>
          <div className="space-y-3">
            {movies.map((movie, index) => {
              const isWatched = watched.includes(movie.id);
              return (
                <div key={movie.id} className="flex items-center gap-3 rounded-lg border border-white/5 bg-[#191919] p-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-600/15 text-sm text-red-500">{index + 1}</span>
                  <div className="min-w-0 flex-1">
                    <h3 className="truncate font-semibold">{movie.title}</h3>
                    <p className="mt-1 text-xs text-gray-500">{movie.year} · {movie.time} min</p>
                  </div>
                  <button onClick={() => setWatched(prev => isWatched ? prev.filter(id => id !== movie.id) : [...prev, movie.id])} className="flex shrink-0 items-center gap-1.5 text-xs font-medium">
                    {isWatched ? <CheckCircle2 className="text-green-500" size={20} /> : <Circle className="text-gray-500" size={20} />}
                    <span className={isWatched ? "text-green-500" : "text-gray-400"}>{isWatched ? "Watched" : "Pending"}</span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rewatch;
