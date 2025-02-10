import React from 'react'
import Videocontainer from './Videocontainer'
import Titlecontainer from './Titlecontainer'
import { useSelector } from 'react-redux'

const Maincontainer = () => {
    const data = useSelector(state => state.movies);
    console.log(data[0]?.original_title);
  return (
    <div>
      <Titlecontainer title={data[0]?.original_title} discription={data[0]?.overview} />
      <Videocontainer/>
    </div>
  )
}

export default Maincontainer
