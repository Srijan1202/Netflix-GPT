import React from 'react'
import Movielist from './Movielist'
import { useSelector } from 'react-redux'

const Secondarycontainer = () => {
  const movie = useSelector((store) => store.movies);

  if (!movie || !movie.nowmovies || !movie.popularmovies) {
    return <div className="text-white">Loading...</div>;
    
  }

  return (
    <div className="text-white p-4 -mt-60">
      <Movielist title="Now Playing Movies" movies={movie.nowmovies} />
      <Movielist title="Popular Movies" movies={movie.popularmovies} />
      <Movielist title="Now Playing Movies" movies={movie.nowmovies} />
      <Movielist title="Now Playing Movies" movies={movie.nowmovies} />
      <Movielist title="Now Playing Movies" movies={movie.nowmovies} />
    </div>
  );
};

export default Secondarycontainer;
