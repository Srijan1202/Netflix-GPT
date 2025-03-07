import React from "react";
import { img_cmd } from "../utils/constants";

const Moviecard = ({ movie }) => {
  const poster = movie.poster_path;

  return (
    <div className="pl-10">
      <div className=" text-white w-44 relative p-2 -mx-5">
        <img src={img_cmd + poster} alt="img" />
      </div>
    </div>
  );
};

export default Moviecard;
