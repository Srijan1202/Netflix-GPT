import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addupcomingmovie } from "../utils/movieSlice";
import { options, upcoming_url } from "../utils/constants";

const useFetchTopRated = () => {
  const dispatch = useDispatch();

  useEffect(() => {
   
    fetchapi();
  }, []);

  const fetchapi = async () => {
    const data = await fetch(upcoming_url, options);
    const json = await data.json();
    
    dispatch(addupcomingmovie(json.results));
  };
};

export default useFetchTopRated;
