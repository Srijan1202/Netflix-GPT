import React from 'react'
import Movielist from './Movielist'
import { useSelector } from 'react-redux'

const Secondarycontainer = () => {
  const movie = useSelector((store) => store.movies);
  console.log("Redux movie state:", movie);

  if (!movie || !movie.nowmovies) {
    return <div className="text-white">Loading...</div>;
  }

  return (
    <div className="text-white p-4">
      <Movielist title="Now Playing Movies" movies={movie.nowmovies} />
      <Movielist title="Now Playing Movies" movies={movie.nowmovies} />
      <Movielist title="Now Playing Movies" movies={movie.nowmovies} />
      <Movielist title="Now Playing Movies" movies={movie.nowmovies} />
      <Movielist title="Now Playing Movies" movies={movie.nowmovies} />
    </div>
  );
};

export default Secondarycontainer;
