import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Navigate, Link } from 'react-router-dom';


const Listado = () => {

   let token = localStorage.getItem('token');

   const [ moviesList, setMoviesList ] = useState([]);

   useEffect(() => {
    const endPoint = 'https://api.themoviedb.org/3/discover/movie?api_key=4cd4da36e9992cc7566064011568e75f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1'
    axios.get(endPoint).then(response => {
      const apiData = response.data
      setMoviesList(apiData.results);
    })
   }, [setMoviesList])

  return (
    <>
    { !token && <Navigate to='/' />}
    <div className='w-full h-full p-10 border border-solid border-gray-900 grid grid-cols-2 justify-center justify-items-center gap-y-10 gap-l-20'>
    {
      moviesList.map((oneMovie, index) => {
        return (
          <div className='max-w-md mx-auto bg-white flex flex-col rounded overflow-hidden
          md:max-w-2xl' key={index}>
            <div className='md:flex'>
              <div className='md:shrink-0'>
                <img src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`} className='h-full w-full object-cover md:h-full md:w-48' alt="img not found" />
              </div>
              <div className='p-8'>
                <div className='uppercase tracking-wide text-lg leading-tight font-semibold'>
                   {oneMovie.title}
                </div>
                <hr />
                <br />
                <p>{oneMovie.overview.substring(0, 100)}...</p>
                
                <Link to='/detail'>
                  <div >
                    <button className='mt-20 p-2 w-auto rounded bg-gray-800 flex justify-center text-white hover:text-gray-200'>View detail</button>
                  </div>
                </Link>
              </div>
            </div>
          </div> 
        )
      })
    }
    </div>

    </>
  )
}

export default Listado