import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addtopratedmovie } from "../utils/movieSlice";
import { options, topRated_url } from "../utils/constants";

const useFetchTopRated = () => {
  const dispatch = useDispatch();

  useEffect(() => {

    fetchapi();
  }, []);

  const fetchapi = async () => {
    const data = await fetch(topRated_url, options);
    const json = await data.json();
   
    dispatch(addtopratedmovie(json.results));
  };
};

export default useFetchTopRated;
