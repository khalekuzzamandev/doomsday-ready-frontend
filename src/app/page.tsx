import Hero from "@/components/Layout/Hero";
import Movie from "@/app/movies/page";
import UpcommigMovies from "./upcomingmovies/page";
import FAQ from "@/components/Layout/FAQ";
import ShortVideos from "./shorts/page";

export default function Home() {
  return(
    <div>
      <Hero />
      <Movie/>
      <ShortVideos/>
      <UpcommigMovies/>
      <FAQ/>
    </div>
  )
}
