import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    
      <nav className='w-screen h-12 bg-gray-900 m-0 p-0'>
        <ul className='w-screen h-full flex flex-row items-center justify-start ml-8 text-white'>
            <Link to='/home'>
            <li className='mr-10'>Home</li>
            </Link>
            <Link to='/listado'>
            <li>Listado</li>
            </Link>
        </ul>
      </nav>    
    
  )
}

export default Navbar