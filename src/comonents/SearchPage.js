import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import Gptsearch from './Gptsearch';
import GptRecommend from './GptRecommend';
import { toggleHandler } from '../utils/toggleSlice';

const SearchPage = () => {
  const toggleref = useRef(null);
  const dispatch = useDispatch();

  const Close = (e) => {
    if (toggleref.current && !toggleref.current.contains(e.target)) {
      dispatch(toggleHandler());
    }
  };

  return (
    <div className='absolute flex flex-col justify-center items-center h-screen w-screen z-10' onClick={Close}>
      <div ref={toggleref} className=" h-3/6 w-2/6  rounded-lg flex flex-col justify-center items-center shadow-lg" onClick={(e) => e.stopPropagation()}>
        <Gptsearch  />
        <GptRecommend />
      </div>
    </div>
  );
};

export default SearchPage;
