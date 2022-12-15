import React from 'react'
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {

  const navigate = useNavigate();
 
  const logoutHandler = (e) => {
    sessionStorage.removeItem('token')

    if(sessionStorage.length === 0){
         navigate('/')
    }
  }

  return (
    <>
       <button className='bg-red-900 p-1 rounded text-white w-20  hover:bg-red-800' onClick={logoutHandler}>Logout</button>
    </>
  )
}

export default LogoutButton