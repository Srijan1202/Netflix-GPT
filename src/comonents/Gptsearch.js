import React from "react";
import lang from "../utils/languageconstants";
import { useSelector } from "react-redux";

const Gptsearch = () => {
  const langu = useSelector((state) => state.language.language);
  const currentLang = lang[langu] || lang["en"];
  console.log(langu);
  return (
    <div className="flex justify-center items-center bg-red-600 h-20 w-full rounded-t-lg bg-opacity-80">
      <form action="submit">
        <input
          type="text"
          placeholder={currentLang.placeholder}
          className="text-center p-3 w-2/3 bg-black bg-opacity-80 rounded-md text-white"
        />
        <button className="bg-black w-24 h-12 ml-1 rounded-md text-white bg-opacity-90">
          {currentLang.search}
        </button>
      </form>
    </div>
  );
};

export default Gptsearch;
