import Hero from "@/components/Layout/Hero";
import Movie from "@/app/movies/page";
import UpcommigMovies from "./upcomingmovies/page";

export default function Home() {
  return(
    <div>
      <Hero />
      <Movie/>
      <UpcommigMovies/>
    </div>
  )
}
