import React from 'react'
import Header from './Header'
import { useEffect } from 'react'
import { url, options } from '../utils/constants'

const Browse = () => {

  useEffect(()=>{
    console.log("Browse")
    fetchapi();
  },[])

  const fetchapi= async()=>{
    const data = await fetch(url,options);
    const json = await data.json();
    console.log(json);
  }
  
  return (
    <div>
      <Header/>

    </div>
  )
}

export default Browse
