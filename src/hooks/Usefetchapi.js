import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addnowmovie } from "../utils/movieSlice";
import { url, options } from "../utils/constants";

const UseFetchApi = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchapi();
  }, []);

  const fetchapi = async () => {
    const data = await fetch(url, options);
    const json = await data.json();
  
    dispatch(addnowmovie(json.results));
  };
};

export default UseFetchApi;
