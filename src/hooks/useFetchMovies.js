import { useEffect } from "react";
import { movieurl, options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addtrailer } from "../utils/movieSlice";

const useFetchMovies=({id})=>{

    const dispatch = useDispatch();

    const fetchvideo = async () => {
      const data = await fetch(movieurl + id + "/videos", options);
      const json = await data.json();
      // console.log(json.results);
      const res = json.results
        .filter((item) => item.type === "Trailer")
        .map((item) => item.key);
  
        if(!res.length === 0){
          return;
        }
  
        dispatch(addtrailer(res[0]));
    };

    useEffect(() => {
      fetchvideo();
    }, []);
  
    const trailer = useSelector(store=>store.movies?.trailer);
  

    return trailer;

}

export default useFetchMovies;