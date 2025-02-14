import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addtopratedmovie } from "../utils/movieSlice";
import { options, topRated_url } from "../utils/constants";

const useFetchTopRated = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Browse");
    fetchapi();
  }, []);

  const fetchapi = async () => {
    const data = await fetch(topRated_url, options);
    const json = await data.json();
    console.log(json.results);
    dispatch(addtopratedmovie(json.results));
  };
};

export default useFetchTopRated;
