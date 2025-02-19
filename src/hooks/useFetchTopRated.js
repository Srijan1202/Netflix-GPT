import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addtopratedmovie } from "../utils/movieSlice";
import { options, topRated_url } from "../utils/constants";
import { useSelector } from "react-redux";

const useFetchTopRated = () => {
  const dispatch = useDispatch();
  const toprated = useSelector((store) => store.movies?.toprated);

  useEffect(() => {
    !toprated && fetchapi();
  }, []);

  const fetchapi = async () => {
    const data = await fetch(topRated_url, options);
    const json = await data.json();
   
    dispatch(addtopratedmovie(json.results));
  };
};

export default useFetchTopRated;
