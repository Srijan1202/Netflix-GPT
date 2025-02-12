import React from 'react'
import img from '../utils/play.png'
const Titlecontainer = ({title,discription}) => {
    

  return (
    <div>
      <h1 className='text-white px-20 py-3 font-bold mt-60 text-3xl'>{title}</h1>
      <div className='text-white px-20 py-3 w-2/3'>{discription}</div>
      <button className='text-black font-bold px-10 py-2 ml-20 bg-white m-2 rounded-md hover:bg-slate-300 text-lg'>
        <img src={img} alt="alt" className='h-4 inline' />  play</button>
      <button className='text-white px-16 py-2 bg-slate-700 bg-opacity-30 m-2 rounded-md text-lg hover:bg-gray-800 hover:bg-opacity-65'>more info</button>
    </div>
  )
}

export default Titlecontainer
