import React from 'react'
import { Link } from 'react-router-dom'
import LogoutButton from '../LogoutButton/LogoutButton'
import SearchInput from '../SearchInput/SearchInput'

const Navbar = () => {
  return (
    
      <nav className='w-screen h-12 bg-gray-900 m-0 p-0 flex flex-row items-center sticky top-0'>
        <h1 className='text-white ml-10 font-bold'>AlkeFlix</h1>
        <ul className='w-screen h-full flex flex-row items-center justify-start ml-8 text-gray-400'>
            <Link to='/home'>
            <li className='mr-10 hover:text-white'>Home</li>
            </Link>
            <Link to='/favorites'>
            <li className='hover:text-white'>Favorites</li>
            </Link>
        </ul>
        <div className='flex flex-row justify-around w-72'>
          <div className='mr-10'>
            <LogoutButton />
          </div>
          <div className='flex items-center justify-center mr-10'>
            <SearchInput />
          </div>

        </div>
      </nav>    
    
  )
}

export default Navbar