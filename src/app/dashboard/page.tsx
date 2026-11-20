
"use client";

import {
  Film,
  Users,
  Ticket,
  DollarSign,
  TrendingUp,
  TrendingDown,
  ArrowUpRight,
  ArrowRight,
  Clapperboard,
  CalendarDays,
  Clock,
  MapPin,
  Plus,
  Eye,
  Star,
  Activity,
  CircleCheck,
  CircleX,
  Clock3,
  Play,
} from "lucide-react";

import Link from "next/link";

const stats = [
  {
    title: "Total Movies",
    value: "248",
    change: "+12.5%",
    positive: true,
    description: "Compared to last month",
    icon: Film,
  },
  {
    title: "Total Users",
    value: "12,845",
    change: "+8.2%",
    positive: true,
    description: "Compared to last month",
    icon: Users,
  },
  {
    title: "Total Bookings",
    value: "3,642",
    change: "+18.4%",
    positive: true,
    description: "Compared to last month",
    icon: Ticket,
  },
  {
    title: "Total Revenue",
    value: "$48,290",
    change: "-2.4%",
    positive: false,
    description: "Compared to last month",
    icon: DollarSign,
  },
];

const bookings = [
  {
    id: "#BK-2048",
    customer: "James Wilson",
    email: "james@gmail.com",
    movie: "Avengers: Endgame",
    cinema: "Cineplex Hall 01",
    date: "Nov 20, 2026",
    amount: "$45.00",
    status: "Confirmed",
  },
  {
    id: "#BK-2047",
    customer: "Sophia Miller",
    email: "sophia@gmail.com",
    movie: "Avengers: Infinity War",
    cinema: "Cineplex Hall 02",
    date: "Nov 20, 2026",
    amount: "$30.00",
    status: "Pending",
  },
  {
    id: "#BK-2046",
    customer: "Oliver Brown",
    email: "oliver@gmail.com",
    movie: "Iron Man",
    cinema: "Galaxy Cinema",
    date: "Nov 19, 2026",
    amount: "$25.00",
    status: "Confirmed",
  },
  {
    id: "#BK-2045",
    customer: "Emma Davis",
    email: "emma@gmail.com",
    movie: "Spider-Man: No Way Home",
    cinema: "Cineplex Hall 03",
    date: "Nov 19, 2026",
    amount: "$35.00",
    status: "Cancelled",
  },
];

const popularMovies = [
  {
    title: "Avengers: Endgame",
    category: "Action / Sci-Fi",
    bookings: "1,245",
    rating: "8.4",
    revenue: "$12,450",
    color: "from-red-950 to-slate-900",
    number: "01",
  },
  {
    title: "Avengers: Infinity War",
    category: "Action / Adventure",
    bookings: "986",
    rating: "8.2",
    revenue: "$9,860",
    color: "from-indigo-950 to-slate-900",
    number: "02",
  },
  {
    title: "Spider-Man: No Way Home",
    category: "Action / Fantasy",
    bookings: "854",
    rating: "8.1",
    revenue: "$8,540",
    color: "from-blue-950 to-slate-900",
    number: "03",
  },
];

const activities = [
  {
    title: "New movie added",
    description: "Avengers: Doomsday was added to the library.",
    time: "10 minutes ago",
    icon: Film,
  },
  {
    title: "New booking received",
    description: "Booking #BK-2048 has been confirmed.",
    time: "35 minutes ago",
    icon: Ticket,
  },
  {
    title: "New user registered",
    description: "A new user joined the platform.",
    time: "1 hour ago",
    icon: Users,
  },
  {
    title: "Cinema updated",
    description: "Cineplex Hall 02 information updated.",
    time: "3 hours ago",
    icon: MapPin,
  },
];

const chartData = [
  { day: "Mon", value: 45 },
  { day: "Tue", value: 70 },
  { day: "Wed", value: 55 },
  { day: "Thu", value: 85 },
  { day: "Fri", value: 65 },
  { day: "Sat", value: 95 },
  { day: "Sun", value: 75 },
];

const DashboardHome = () => {
  const maxValue = Math.max(...chartData.map((item) => item.value));

  return (
    <div className="min-h-screen space-y-6 bg-[#090A0F] p-4 text-white sm:p-5 lg:p-6">

      {/* Welcome Section */}
      <section className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <div className="mb-2 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-red-600" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-red-500">
              Admin Overview
            </span>
          </div>

          <h2 className="text-xl font-bold sm:text-2xl">
            Welcome back, Administrator!
          </h2>

          <p className="mt-1 text-xs text-gray-500">
            Here&apos;s what&apos;s happening across your movie universe today.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Link
            href="/dashboard/movies"
            className="flex items-center gap-2 rounded-lg border border-white/10 bg-[#15161D] px-3 py-2.5 text-xs font-semibold text-gray-300 transition hover:border-red-600/30 hover:text-white"
          >
            <Eye size={15} />
            View Movies
          </Link>

          <Link
            href="/dashboard/movies/create"
            className="flex items-center gap-2 rounded-lg bg-red-600 px-3 py-2.5 text-xs font-semibold text-white transition hover:bg-red-700"
          >
            <Plus size={15} />
            Add Movie
          </Link>
        </div>
      </section>

      {/* Stats Cards */}
      <section className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="rounded-xl border border-white/[0.07] bg-[#111219] p-4 transition hover:border-red-600/30"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-red-600/15 bg-red-600/10 text-red-500">
                  <Icon size={18} />
                </div>

                <span
                  className={`flex items-center gap-1 text-[10px] font-semibold ${stat.positive ? "text-emerald-400" : "text-red-400"
                    }`}
                >
                  {stat.positive ? (
                    <TrendingUp size={12} />
                  ) : (
                    <TrendingDown size={12} />
                  )}
                  {stat.change}
                </span>
              </div>

              <p className="mt-4 text-xs font-medium text-gray-500">
                {stat.title}
              </p>

              <h3 className="mt-1 text-2xl font-bold tracking-tight text-white">
                {stat.value}
              </h3>

              <p className="mt-2 text-[10px] text-gray-600">
                {stat.description}
              </p>
            </div>
          );
        })}
      </section>

      {/* Analytics and Activities */}
      <section className="grid grid-cols-1 gap-4 xl:grid-cols-3">

        {/* Booking Analytics */}
        <div className="rounded-xl border border-white/[0.07] bg-[#111219] p-4 sm:p-5 xl:col-span-2">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="text-sm font-bold">Booking Analytics</h3>
              <p className="mt-1 text-[10px] text-gray-500">
                Weekly booking performance overview
              </p>
            </div>

            <select className="rounded-lg border border-white/10 bg-[#15161D] px-3 py-2 text-[10px] text-gray-300 outline-none">
              <option>This Week</option>
              <option>This Month</option>
              <option>This Year</option>
            </select>
          </div>

          <div className="mt-6 flex items-end justify-between gap-3">
            <div>
              <p className="text-[10px] text-gray-500">Total Bookings</p>
              <h2 className="mt-1 text-2xl font-bold">3,642</h2>
            </div>

            <span className="flex items-center gap-1 rounded-md bg-emerald-500/10 px-2 py-1 text-[10px] font-semibold text-emerald-400">
              <TrendingUp size={12} />
              +18.4%
            </span>
          </div>

          {/* Chart */}
          <div className="mt-6 flex h-44 items-end justify-between gap-2 border-b border-white/10 px-1">
            {chartData.map((item) => (
              <div
                key={item.day}
                className="flex h-full flex-1 flex-col items-center justify-end gap-2"
              >
                <div className="flex h-full w-full items-end justify-center">
                  <div
                    style={{
                      height: `${(item.value / maxValue) * 100}%`,
                    }}
                    className="w-full max-w-10 rounded-t-md bg-gradient-to-t from-red-700 to-red-500 transition-all hover:from-red-500 hover:to-red-400"
                  />
                </div>

                <span className="pb-2 text-[9px] text-gray-500">
                  {item.day}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-4 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-red-600" />
            <span className="text-[10px] text-gray-500">
              Total bookings per day
            </span>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="rounded-xl border border-white/[0.07] bg-[#111219] p-4 sm:p-5">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-bold">Recent Activities</h3>
              <p className="mt-1 text-[10px] text-gray-500">
                Latest platform updates
              </p>
            </div>

            <Activity size={17} className="text-red-500" />
          </div>

          <div className="mt-5 space-y-5">
            {activities.map((activity, index) => {
              const Icon = activity.icon;

              return (
                <div key={index} className="flex gap-3">
                  <div className="relative">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-600/10 text-red-500">
                      <Icon size={15} />
                    </div>

                    {index !== activities.length - 1 && (
                      <div className="absolute left-1/2 top-9 h-7 w-px -translate-x-1/2 bg-white/10" />
                    )}
                  </div>

                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold text-gray-200">
                      {activity.title}
                    </p>

                    <p className="mt-1 text-[10px] leading-relaxed text-gray-500">
                      {activity.description}
                    </p>

                    <p className="mt-1.5 text-[9px] text-gray-600">
                      {activity.time}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recent Bookings */}
      <section className="overflow-hidden rounded-xl border border-white/[0.07] bg-[#111219]">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.07] p-4 sm:px-5">
          <div>
            <h3 className="text-sm font-bold">Recent Bookings</h3>
            <p className="mt-1 text-[10px] text-gray-500">
              Latest customer booking transactions
            </p>
          </div>

          <Link
            href="/dashboard/bookings"
            className="flex items-center gap-1 text-[10px] font-semibold text-red-500 transition hover:text-red-400"
          >
            View All
            <ArrowUpRight size={13} />
          </Link>
        </div>

        <div className="w-full overflow-x-auto">
          <table className="w-full min-w-[750px] text-left">
            <thead>
              <tr className="border-b border-white/[0.06] bg-white/[0.02] text-[9px] font-bold uppercase tracking-wider text-gray-500">
                <th className="px-5 py-3">Booking ID</th>
                <th className="px-5 py-3">Customer</th>
                <th className="px-5 py-3">Movie</th>
                <th className="px-5 py-3">Date</th>
                <th className="px-5 py-3">Amount</th>
                <th className="px-5 py-3">Status</th>
              </tr>
            </thead>

            <tbody>
              {bookings.map((booking) => (
                <tr
                  key={booking.id}
                  className="border-b border-white/[0.05] text-[11px] transition hover:bg-white/[0.02]"
                >
                  <td className="px-5 py-3.5 font-semibold text-red-400">
                    {booking.id}
                  </td>

                  <td className="px-5 py-3.5">
                    <p className="font-semibold text-gray-200">
                      {booking.customer}
                    </p>
                    <p className="mt-1 text-[9px] text-gray-500">
                      {booking.email}
                    </p>
                  </td>

                  <td className="px-5 py-3.5 text-gray-400">
                    {booking.movie}
                  </td>

                  <td className="px-5 py-3.5 whitespace-nowrap text-gray-400">
                    {booking.date}
                  </td>

                  <td className="px-5 py-3.5 font-semibold text-white">
                    {booking.amount}
                  </td>

                  <td className="px-5 py-3.5">
                    <span
                      className={`inline-flex items-center gap-1 rounded-md px-2 py-1 text-[9px] font-semibold ${booking.status === "Confirmed"
                          ? "bg-emerald-500/10 text-emerald-400"
                          : booking.status === "Pending"
                            ? "bg-yellow-500/10 text-yellow-400"
                            : "bg-red-500/10 text-red-400"
                        }`}
                    >
                      {booking.status === "Confirmed" ? (
                        <CircleCheck size={11} />
                      ) : booking.status === "Pending" ? (
                        <Clock3 size={11} />
                      ) : (
                        <CircleX size={11} />
                      )}
                      {booking.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Popular Movies */}
      <section className="rounded-xl border border-white/[0.07] bg-[#111219] p-4 sm:p-5">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <h3 className="text-sm font-bold">Popular Movies</h3>
            <p className="mt-1 text-[10px] text-gray-500">
              Top performing movies on your platform
            </p>
          </div>

          <Link
            href="/dashboard/movies"
            className="text-[10px] font-semibold text-red-500 hover:text-red-400"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {popularMovies.map((movie) => (
            <div
              key={movie.number}
              className="group flex items-center gap-3 rounded-lg border border-white/[0.06] bg-[#15161D] p-3 transition hover:border-red-600/30"
            >
              <div
                className={`flex h-16 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${movie.color}`}
              >
                <Clapperboard size={20} className="text-white/70" />
              </div>

              <div className="min-w-0 flex-1">
                <p className="truncate text-[11px] font-bold text-white">
                  {movie.title}
                </p>

                <p className="mt-1 text-[9px] text-gray-500">
                  {movie.category}
                </p>

                <div className="mt-2 flex flex-wrap items-center gap-2">
                  <span className="flex items-center gap-1 text-[9px] text-yellow-400">
                    <Star size={10} fill="currentColor" />
                    {movie.rating}
                  </span>

                  <span className="text-[9px] text-gray-500">
                    {movie.bookings} bookings
                  </span>
                </div>
              </div>

              <div className="hidden text-right sm:block">
                <p className="text-[10px] font-bold text-white">
                  {movie.revenue}
                </p>
                <p className="mt-1 text-[9px] text-gray-500">
                  Revenue
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Actions */}
      <section className="rounded-xl border border-red-600/15 bg-gradient-to-r from-red-600/[0.08] to-[#111219] p-4 sm:p-5">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <div className="flex items-center gap-2">
              <Clapperboard size={17} className="text-red-500" />
              <h3 className="text-sm font-bold">Quick Actions</h3>
            </div>

            <p className="mt-1 text-[10px] text-gray-500">
              Manage your movie platform quickly.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <Link
              href="/dashboard/movies/create"
              className="flex items-center gap-2 rounded-lg bg-red-600 px-3 py-2.5 text-[10px] font-semibold text-white transition hover:bg-red-700"
            >
              <Plus size={14} />
              Add Movie
            </Link>

            <Link
              href="/dashboard/cinemas"
              className="flex items-center gap-2 rounded-lg border border-white/10 bg-[#15161D] px-3 py-2.5 text-[10px] font-semibold text-gray-300 transition hover:border-red-600/30 hover:text-white"
            >
              <MapPin size={14} />
              Manage Cinemas
            </Link>

            <Link
              href="/dashboard/bookings"
              className="flex items-center gap-2 rounded-lg border border-white/10 bg-[#15161D] px-3 py-2.5 text-[10px] font-semibold text-gray-300 transition hover:border-red-600/30 hover:text-white"
            >
              <Ticket size={14} />
              View Bookings
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex flex-col items-center justify-between gap-2 border-t border-white/[0.06] pt-4 text-[9px] text-gray-600 sm:flex-row">
        <p>© 2026 DOOMSDAY READY. All rights reserved.</p>

        <p className="flex items-center gap-1">
          Admin Control Center
          <span className="text-red-500">•</span>
          v1.0.0
        </p>
      </footer>
    </div>
  );
};

export default DashboardHome;
