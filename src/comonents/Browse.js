import React from 'react'
import Header from './Header'
import Usefetchapi from '../hooks/Usefetchapi'

const Browse = () => {

  Usefetchapi();
  
  return (
    <div>
      <Header/>

    </div>
  )
}

export default Browse
