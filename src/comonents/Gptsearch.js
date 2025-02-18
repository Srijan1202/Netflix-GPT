import React from 'react'
import lang from '../utils/languageconstants'

const Gptsearch = () => {
  return (
    <div className="flex justify-center items-center bg-red-600 h-20 w-full rounded-t-lg bg-opacity-80"> 
      <form action="submit">
        <input type="text" placeholder={lang.hin.placeholder} className='text-center p-3 w-2/3 bg-black bg-opacity-80 rounded-md text-white'/>
        <button className='bg-black w-24 h-12 ml-1 rounded-md text-white bg-opacity-90'>{lang.hin.search}</button> 
      </form>
    </div>
  )
}

export default Gptsearch
