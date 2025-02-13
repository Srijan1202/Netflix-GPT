import React from 'react'
import Header from './Header'
import useFetchApi from '../hooks/useFetchApi'
import Maincontainer from './Maincontainer'
import Secondarycontainer from './Secondarycontainer'
import useFetchPopular from '../hooks/useFetchPopular'
import useFetchTopRated from '../hooks/useFetchTopRated'

const Browse = () => {

  useFetchApi();

  useFetchPopular();

  useFetchTopRated();
  
  return (
    <div >
      <Header/>
      <Maincontainer/>
      <Secondarycontainer/>
    </div>
  )
}

export default Browse
