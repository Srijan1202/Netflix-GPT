import React from "react";
import Moviecard from "./Moviecard";

const Movielist = ({ title, movies }) => {
  return (
    <div className="">
      <h1 className="text-white pl-10 text-2xl font-semibold p-2 relative z-10">
        {title}
      </h1>
      <div>
        <div className="flex overflow-x-scroll no-scrollbar pb-6">
          {movies.map((movie) => (
            <Moviecard movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movielist;
