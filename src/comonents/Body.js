import React from 'react'
import Browse from './Browse'
// import Header from './Header'
import Login from './Login'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addUser,removeUser } from '../utils/userSlice' 
import { auth } from '../utils/firebase'

const Body = () => {
    const dispatch = useDispatch()


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid,email,displayName} = user;

              dispatch(addUser({uid:uid,email:email,displayName:displayName}));
              // ...
            } else {
              dispatch(removeUser());
            }
          });
    }, [])

    const approuter = createBrowserRouter([
        {
            path: '/',
            element: <Login/>,
        },
        {
            path: '/browse',
            element: <Browse/>,
        }
    ])
  return (
    <div>
        <RouterProvider router={approuter} />
    </div>
  )
}

export default Body
