import React from 'react'
import img from '../utils/pngwing.com.png'
import {signOut } from "firebase/auth";
import { auth } from '../utils/firebase'; 
import {useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
const Navigate= useNavigate();

const user= useSelector(state=>state.user);

  const handlesignout = () => {
    signOut(auth).then(() => {
      Navigate('/');
      // Sign-out successful.
    }).catch((error) => {
      console.log(error);
      Navigate('/error');
    });
  }
  return (
    <div className=' bg-gradient-to-b from-black flex justify-between items-center h-28'>
      <img src={img} alt=""  className='w-48 ml-40 bg-gradient-to-b'/>
      {user && <div className='flex justify-end mr-10 '>
        <img src="https://occ-0-2086-3662.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229" alt="img" />

        <button className='text-red-600 ml-10 font-bold '
        onClick={handlesignout}>Sign Out</button>
      </div>}
    </div>
  )
}

export default Header
