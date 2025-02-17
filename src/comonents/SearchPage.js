import React from 'react'
import Gptsearch from './Gptsearch'
import GptRecommend from './GptRecommend'
import { useDispatch } from 'react-redux'
import { toggleHandler } from '../utils/toggleSlice'

const SearchPage = () => {

  const dispatch=useDispatch();

  const Close=()=>{
    dispatch(toggleHandler());

  }
  return (
    <div className='absolute flex flex-col justify-center items-center h-5/6 w-screen z-10' onClick={Close}>
        <Gptsearch/>
        <GptRecommend/>
    </div>
  )
}

export default SearchPage
