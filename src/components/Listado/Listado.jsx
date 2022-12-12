import React from 'react'
import { Navigate } from 'react-router-dom';
import Card from '../Card/Card'

const Listado = () => {

   let token = localStorage.getItem('token');

  return (
    <>
    { !token && <Navigate to='/' />}
    <div className='w-screen h-full p-10 border border-solid border-gray-900 grid grid-cols-3 justify-center justify-items-center gap-y-10'>
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    </div>
    </>
  )
}

export default Listado