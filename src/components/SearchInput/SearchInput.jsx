import React from 'react'
import { FaSearch } from 'react-icons/fa'
import swAlert from '@sweetalert/with-react';
import { useNavigate } from 'react-router-dom';


const SearchInput = () => {

    const navigate = useNavigate();


    const submitHandler = e => {
        e.preventDefault();
        const keyword = e.currentTarget.keyword.value.trim();

        if(keyword.length === 0){
            swAlert(<h1>Please search something!!</h1>)
        }else{
            e.currentTarget.keyword.value = '';
            navigate(`/results?keyword=${keyword}`)
        }
    }

  return (
    <form className='w-48 mr-10' onSubmit={submitHandler} >
        <label>
            <input className='rounded border-2 border-solid border-gray-900' type="text" name='keyword' placeholder='Search...' />
        </label>
        <button className='absolute right-12 top-4' type='submit'>
           <FaSearch color={'gray'} />
        </button>
    </form>
  )
}

export default SearchInput