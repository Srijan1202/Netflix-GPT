import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addnowmovie } from "../utils/movieSlice";
import { url, options } from "../utils/constants";

const useFetchApi = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchapi = async () => {
      try {
        const response = await fetch(url, options);
        const json = await response.json();
        dispatch(addnowmovie(json.results));
      } catch (error) {
        console.error("Error fetching API data:", error);
      }
    };

    fetchapi();
  }, [dispatch]); // ✅ Added dispatch to the dependency array
};

export default useFetchApi;
