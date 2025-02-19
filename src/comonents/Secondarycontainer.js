import React from "react";
import Movielist from "./Movielist";
import { useSelector } from "react-redux";

const Secondarycontainer = () => {
  const movie = useSelector((store) => store.movies);

  if (
    !movie ||
    !movie.nowmovies ||
    !movie.popularmovies ||
    !movie.topratedmovies ||
    !movie.upcomingmovies
  ) {
    return <div className="text-white">Loading...</div>;
  }

  return (
    <div className="text-white p-4 md:-mt-60  ">
      <Movielist title="Now Playing Movies" movies={movie.nowmovies} />
      <Movielist title="Popular Movies" movies={movie.popularmovies} />
      <Movielist title="Top Rated Movies" movies={movie.topratedmovies} />
      <Movielist title="Upcoming Movies" movies={movie.upcomingmovies} />
    </div>
  );
};

export default Secondarycontainer;
