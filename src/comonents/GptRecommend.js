import React from 'react'
import { useSelector } from 'react-redux'
import Movielist from './Movielist'

const GptRecommend = () => {
  const gpt = useSelector((state) => state.toggle)
  console.log(gpt)
  const {movieResults, movieNames} = gpt

  if (!movieResults) return(
    <div className=' bg-black h-full w-full rounded-b-lg bg-opacity-80 text-white font-bold p-10 py-20 '>
      loading...
      </div>
  ) 
  return (
    <div className=' bg-black h-full w-full rounded-b-lg bg-opacity-80'>
      {movieResults.map((movie,index) => <Movielist title ={ movieNames.index} movies={movie} />)}
      
    </div>
  )
}

export default GptRecommend
