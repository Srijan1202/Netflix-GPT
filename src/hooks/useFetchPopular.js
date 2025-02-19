import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addpopularmovie } from "../utils/movieSlice";
import { options, popular_url } from "../utils/constants";
import { useSelector } from "react-redux";

const useFetchPopular = () => {
  const dispatch = useDispatch();
  const popular = useSelector((store) => store.movies?.popular);

  useEffect(() => {
 
    !popular && fetchapi();
  }, []);

  const fetchapi = async () => {
    const data = await fetch(popular_url, options);
    const json = await data.json();

    dispatch(addpopularmovie(json.results));
  };
};

export default useFetchPopular;
