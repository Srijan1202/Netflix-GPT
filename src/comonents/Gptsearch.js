import React, { useRef } from "react";
import lang from "../utils/languageconstants";
import { useSelector } from "react-redux";
import openaimy from "../utils/gptconstants";

const Gptsearch = () => {
  const langu = useSelector((state) => state.language.language);
  const currentLang = lang[langu] || lang["en"];

  const serchtext = useRef(null);

  const handelclick = async () => {
    console.log(serchtext.current.value);

    const qptQuiery =
      "Act as a Movie recommendation system and give me names of 5 movies based on the following query: " +
      serchtext.current.value +
      ". only give me the names of the movies, comma separated. like the example result given ahead only give me names of the movie and not the discription and strictly follow the pattern of the example. Example: The Dark Knight, Inception, Interstellar, The Prestige, Memento";

    const gptres = await openaimy.chat.completions.create({
      messages: [{ role: "user", content: qptQuiery }],
      model: "gpt-4o-mini",
    });
    if(!gptres.choices[0]?.message?.content){
      console.log("No response from GPT");
      return;
    }
    console.log(gptres.choices[0]?.message?.content);
  };

  return (
    <div className="flex justify-center items-center bg-red-600 h-20 w-full rounded-t-lg bg-opacity-80">
      <form action="submit" onSubmit={(e) => e.preventDefault()}>
        <input
          ref={serchtext}
          type="text"
          placeholder={currentLang.placeholder}
          className="text-center p-3 w-2/3 bg-black bg-opacity-80 rounded-md text-white"
        />
        <button
          className="bg-black w-24 h-12 ml-1 rounded-md text-white bg-opacity-90"
          onClick={handelclick}
        >
          {currentLang.search}
        </button>
      </form>
    </div>
  );
};

export default Gptsearch;
