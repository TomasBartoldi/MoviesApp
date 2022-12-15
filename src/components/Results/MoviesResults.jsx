import React, { useEffect, useState } from 'react'
import axios from 'axios'
import swAlert from '@sweetalert/with-react'
import { Link } from 'react-router-dom'


const Results = () => {

    let query = new URLSearchParams(window.location.search)
    let keyword = query.get('keyword') 

    const [ moviesResults, setMoviesResults ] = useState([ ]);

    useEffect(()=>{
         const endPoint = `https://api.themoviedb.org/3/search/movie?api_key=4cd4da36e9992cc7566064011568e75f&language=en-US&query=${keyword}`
        
        axios.get(endPoint).then(response => {
            const moviesArray = response.data.results;
            
            if(moviesArray.length === 0){
               swAlert(<h1>Movies not found</h1>)
            }
             
            setMoviesResults(moviesArray);
        })
        .catch(error => {
            swAlert(<h1>There were errors, try again later</h1>)
        })
    }, [keyword])

  return (
    <div className='bg-red-900'>
        <h2 className='mb-5 uppercase tracking-wide text-2xl leading-tight font-bold pt-5 pl-16'>You search: <em className='font-semibold'>{keyword}</em></h2>

        <div className='w-full h-full p-10 grid grid-cols-2 justify-center justify-items-center gap-y-10 gap-l-20'>
    {
      moviesResults.map((oneMovie, index) => {
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
                
                 <div className='w-24'>
                    <Link to={`/detail?movieID=${oneMovie.id}`}>
                      <button className='mt-20 p-2 rounded bg-gray-800 flex justify-center text-white hover:text-gray-200'>View detail</button>
                    </Link>                   
                  </div>
              </div>
            </div>
          </div> 
        )
      })
    }
    </div>
    </div>
  )
}

export default Results