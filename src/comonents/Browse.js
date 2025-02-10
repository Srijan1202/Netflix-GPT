import React from 'react'
import Header from './Header'
import Usefetchapi from '../hooks/Usefetchapi'
import Maincontainer from './Maincontainer'
import Secondarycontainer from './Secondarycontainer'

const Browse = () => {

  Usefetchapi();
  
  return (
    <div>
      <Header/>
      <Maincontainer/>
      <Secondarycontainer/>
    </div>
  )
}

export default Browse
