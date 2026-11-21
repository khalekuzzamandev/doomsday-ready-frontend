
"use client";

import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";

const videos = [
  {
    id: 1,
    title: "Avengers: Endgame Final Battle",
    thumbnail:
      "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
  },
  {
    id: 2,
    title: "Iron Man's Greatest Moments",
    thumbnail:
      "https://image.tmdb.org/t/p/w500/78lPtwv72eTNqFW9COBYI0dWDJa.jpg",
  },
  {
    id: 3,
    title: "Thor: Ragnarok Best Scenes",
    thumbnail:
      "https://image.tmdb.org/t/p/w500/kaIfm5ryEOwYg8mLbq8HkPuM1Fo.jpg",
  },
  {
    id: 4,
    title: "Infinity War: The Snap",
    thumbnail:
      "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
  },
  {
    id: 5,
    title: "Captain America: Civil War",
    thumbnail:
      "https://legacy-us-images.foundryco.app/images/article/2019/03/porup-robot-100792053-medium.jpg",
  },
  {
    id: 6,
    title: "Captain America: Civil War",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFodztuLiJ2o4t6pYF8EEtDoNyNNNIPe0fzcR6i4XebQ&s=10",
  },
];

const ShortVideos = () => {
  return (
    <section className="bg-[#090909] px-4 py-5 text-white sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">

        {/* Header */}
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[3px] text-red-500">
              MCU Moments
            </p>

            <h2 className="text-2xl font-bold sm:text-3xl">
              Short Videos
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Explore iconic moments from the Marvel universe
            </p>
          </div>

          <Link
            href="/short-videos"
            className="shrink-0 rounded-lg border border-red-600/30 bg-red-600/10 px-4 py-2 text-sm font-semibold text-red-500 transition hover:border-red-600 hover:bg-red-600 hover:text-white"
          >
            See All
          </Link>
        </div>

        {/* Six Equal Cards */}
        <div className="grid w-full grid-cols-6 gap-2 sm:gap-3">
          {videos.slice(0, 6).map((video) => (
            <div
              key={video.id}
              className="group relative h-[220px] min-w-0 overflow-hidden rounded-lg border border-white/10 bg-[#101010] transition duration-300 hover:border-red-600/50 sm:h-[280px] lg:h-[310px]"
            >
              <Image
                src={video.thumbnail}
                alt={video.title}
                fill
                unoptimized
                sizes="20vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

              {/* Small Play Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Play
                  size={17}
                  strokeWidth={2.5}
                  fill="white"
                  className="text-white transition duration-300 group-hover:scale-125 sm:h-5 sm:w-5"
                />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-1.5 sm:p-3">
                <div className="mb-2 h-1 w-6 rounded-full bg-red-600 sm:w-7" />

                <h3 className="line-clamp-2 text-[10px] font-semibold leading-4 text-white sm:text-sm sm:leading-5">
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ShortVideos;
