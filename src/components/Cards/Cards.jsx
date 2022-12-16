import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaRegHeart, FaHeart } from 'react-icons/fa'
import { Navigate, Link } from 'react-router-dom';
import swAlert from '@sweetalert/with-react'


const Listado = (props) => {

  const addOrRemoveFromFavs = props.addOrRemoveFromFavs

   let token = sessionStorage.getItem('token');

   const [ moviesList, setMoviesList ] = useState([]);
   const [click, setClick] = useState(false)
   
   const handleClick = (e) => {
    addOrRemoveFromFavs(e)
    setClick(!click)
  }

   useEffect(() => {
    const endPoint = 'https://api.themoviedb.org/3/discover/movie?api_key=4cd4da36e9992cc7566064011568e75f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1'
    axios.get(endPoint)
      .then(response => {
        const apiData = response.data
        setMoviesList(apiData.results);
    })
      .catch(error => {
        swAlert(<h1>There were errors, try again later</h1>)
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
                
                  <div className='w-auto flex flex-row justify-between items-center'>
                    <div>
                      <Link to={`/detail?movieID=${oneMovie.id}`}>
                        <button className='mt-20 p-2 rounded bg-gray-800 flex justify-center text-white hover:text-gray-200'>View detail</button>
                      </Link>
                    </div>     
                    <div>
                      <button className='mt-20' onClick={e => handleClick(e)}>
                        {click ? (
                        <FaHeart size={25} /> 
                        ) 
                       : 
                       (
                        <FaRegHeart size={25} />
                        )} 
                      </button>  
                                    
                    </div>

                  </div>  
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