import React from "react";
import img from "../utils/play.png";
const Titlecontainer = ({ title, discription }) => {
  return (
    <div className=" text-white absolute pt-[25%] bg-gradient-to-t from-black w-screen aspect-video">
      <h1 className=" px-20 py-3 font-bold  text-4xl">{title}</h1>
      <div className=" px-20 py-3 w-2/4">{discription}</div>
      <button className="text-black font-bold px-10 py-2 ml-20 bg-white m-2 rounded-md hover:bg-slate-300 text-lg">
        <img src={img} alt="alt" className="h-4 inline" /> play
      </button>
      <button className=" px-16 py-2 bg-slate-700 bg-opacity-30 m-2 rounded-md text-lg hover:bg-gray-800 hover:bg-opacity-65">
        more info
      </button>
    </div>
  );
};

export default Titlecontainer;
