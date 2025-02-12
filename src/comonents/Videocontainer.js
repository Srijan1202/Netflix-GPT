import { useEffect,useState } from "react";
import { movieurl, options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addtrailer } from "../utils/movieSlice";

const Videocontainer = ({ id }) => {

  const dispatch = useDispatch();

  useEffect(() => {
    fetchvideo();
  }, []);

  const trailer = useSelector(store=>store.movies?.trailer);

  const fetchvideo = async () => {
    const data = await fetch(movieurl + id + "/videos", options);
    const json = await data.json();
    // console.log(json.results);
    const res = json.results
      .filter((item) => item.type === "Trailer")
      .map((item) => item.key);

      if(!res.length === 0){
        return;
      }

      dispatch(addtrailer(res[0]));


  };

  return (
    <div className="text-red-600">
      <iframe className="absolute left-0 top-0 h-full w-full -z-10"
        width="560"
        height="315"  
        src={`https://www.youtube.com/embed/${trailer}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default Videocontainer;
