import React from "react";
import img from "../utils/play.png";
const Titlecontainer = ({ title, discription }) => {
  return (
    <div className=" text-white absolute pt-[45%] md:pt-[25%] bg-gradient-to-t from-black w-screen aspect-video">
      <h1 className=" px-20 py-3 font-bold text-2xl md:text-4xl md:pt-0 pt-[40%] ">{title}</h1>
      <div className=" px-20 py-3 w-2/4 md:block hidden">{discription}</div>
      <div className="flex flex-col md:flex-row">
      <button className="text-black font-bold md:px-10 py-2 md:ml-20 bg-white md:m-2 rounded-md hover:bg-slate-300 text-lg">
        <img src={img} alt="alt" className="h-4 inline-block" /> play
      </button>
      <button className=" px-16 py-2 bg-slate-700 bg-opacity-30 m-2 rounded-md text-lg hover:bg-gray-800 hover:bg-opacity-65">
        more info
      </button>
      </div>
    </div>
  );
};

export default Titlecontainer;
