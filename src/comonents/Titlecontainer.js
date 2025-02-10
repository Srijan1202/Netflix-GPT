import React from 'react'
import { useSelector } from 'react-redux'
import { data } from 'react-router-dom'

const Titlecontainer = () => {
    data = useSelector(state => state.data)

  return (
    <div>
      <h1 className='text-white'>Title</h1>
      <div className='text-white'>discription</div>
      <button className='text-black font-bold px-20 py-3 bg-white bg-opacity-70 m-2 rounded-md'>play</button>
      <button className='text-white px-20 py-3 bg-slate-700 bg-opacity-30 m-2 rounded-md'>more info</button>
    </div>
  )
}

export default Titlecontainer
