import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addupcomingmovie } from "../utils/movieSlice";
import { options, upcoming_url } from "../utils/constants";
import { useSelector } from "react-redux";

const useFetchTopRated = () => {
  const dispatch = useDispatch();
  const upcoming = useSelector((store) => store.movies?.upcoming);  

  useEffect(() => {
   
    !upcoming && fetchapi();
  }, []);

  const fetchapi = async () => {
    const data = await fetch(upcoming_url, options);
    const json = await data.json();
    
    dispatch(addupcomingmovie(json.results));
  };
};

export default useFetchTopRated;
