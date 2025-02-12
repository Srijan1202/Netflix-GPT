import React from 'react'
import Header from './Header'
import useFetchApi from '../hooks/useFetchApi'
import Maincontainer from './Maincontainer'
import Secondarycontainer from './Secondarycontainer'

const Browse = () => {

  useFetchApi();
  
  return (
    <div>
      <Header/>
      <Maincontainer/>
      <Secondarycontainer/>
    </div>
  )
}

export default Browse
