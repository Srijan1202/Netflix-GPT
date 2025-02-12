import React from 'react'
import { img_cmd } from '../utils/constants'

const Moviecard = ({movie}) => {
    const poster =movie.poster_path;
    console.log(poster);
    console.log("hello");
  return (
    <div className='pl-10'>
        <div className=' text-white w-44 relative p-2'>
            <img src={img_cmd+poster} alt="img" />
        </div>
    </div>
  )
}

export default Moviecard
