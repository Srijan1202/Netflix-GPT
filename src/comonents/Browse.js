import React from 'react'
import Header from './Header'
import useFetchApi from '../hooks/useFetchApi'
import Maincontainer from './Maincontainer'
import Secondarycontainer from './Secondarycontainer'
import useFetchPopular from '../hooks/useFetchPopular'

const Browse = () => {

  useFetchApi();

  useFetchPopular();
  
  return (
    <div >
      <Header/>
      <Maincontainer/>
      <Secondarycontainer/>
    </div>
  )
}

export default Browse
