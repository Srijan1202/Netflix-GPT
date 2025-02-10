import React from 'react'

const Titlecontainer = ({title,discription}) => {
    

  return (
    <div>
      <h1 className='text-white'>{title}</h1>
      <div className='text-white'>{discription}</div>
      <button className='text-black font-bold px-20 py-3 bg-white bg-opacity-70 m-2 rounded-md'>play</button>
      <button className='text-white px-20 py-3 bg-slate-700 bg-opacity-30 m-2 rounded-md'>more info</button>
    </div>
  )
}

export default Titlecontainer
