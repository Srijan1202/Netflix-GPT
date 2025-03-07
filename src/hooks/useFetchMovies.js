import { useEffect } from "react";
import { movieurl, options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addtrailer } from "../utils/movieSlice";

const useFetchMovies = ({ id }) => {
  const dispatch = useDispatch();

  const nowplaying = useSelector((store) => store.movies?.nowplaying);

  const fetchvideo = async () => {
    const data = await fetch(movieurl + id + "/videos", options);
    const json = await data.json();
  
    const res = json.results
      .filter((item) => item.type === "Trailer")
      .map((item) => item.key);

    if (!res.length === 0) {
      return;
    }

    dispatch(addtrailer(res[0]));
  };

  useEffect(() => {
    !nowplaying && fetchvideo();
  }, []);

  const trailer = useSelector((store) => store.movies?.trailer);

  return trailer;
};

export default useFetchMovies;
