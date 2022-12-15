import React from 'react'
import { FaSearch } from 'react-icons/fa'

const SearchInput = () => {
  return (
    <form className='w-48 mr-10'>
        <label>
            <input className='rounded border-2 border-solid border-gray-900' type="text" />
        </label>
        <button className='absolute right-12 top-4' type='submit'>
           <FaSearch />
        </button>
    </form>
  )
}

export default SearchInput