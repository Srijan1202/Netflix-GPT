import React from "react";
import Moviecard from "./Moviecard";

const Movielist = ({ title, movies }) => {
  console.log("hello");
  console.log(movies);
  return (
    <div className="">
      <h1 className="text-white pl-10 text-2xl font-semibold p-2">{title}</h1>
      <div>
        <div className="flex overflow-x-scroll scrollbar-hide">
          {movies.map((movie) => (<Moviecard movie={movie} />))}
        </div>
      </div>
    </div>
  );
};

export default Movielist;
