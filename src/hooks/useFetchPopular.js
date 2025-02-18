import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addpopularmovie } from "../utils/movieSlice";
import { options, popular_url } from "../utils/constants";

const useFetchPopular = () => {
  const dispatch = useDispatch();

  useEffect(() => {
 
    fetchapi();
  }, []);

  const fetchapi = async () => {
    const data = await fetch(popular_url, options);
    const json = await data.json();

    dispatch(addpopularmovie(json.results));
  };
};

export default useFetchPopular;
