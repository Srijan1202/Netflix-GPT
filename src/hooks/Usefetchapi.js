
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addnowmovie } from '../utils/movieSlice'
import { url, options } from '../utils/constants'

const Usefetchapi = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        console.log("Browse")
        fetchapi();
      },[])
    
      const fetchapi= async()=>{
        const data = await fetch(url,options);
        const json = await data.json();
        console.log(json.results);
        dispatch(addnowmovie(json.results));
      }
    };

export default Usefetchapi

