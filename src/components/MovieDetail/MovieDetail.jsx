import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import axios from 'axios';
import swAlert from '@sweetalert/with-react'
import Footer from '../Footer/Footer'


const MovieDetail = () => {

    let token = sessionStorage.getItem('token');
    let query = new URLSearchParams(window.location.search)
    let movieID = query.get('movieID')

    const [ movie, setMovie ] = useState(null)
    
    useEffect(()=>{
        const endPoint = `https://api.themoviedb.org/3/movie/${movieID}?api_key=4cd4da36e9992cc7566064011568e75f&language=en-US`
        //console.log(endPoint);
        axios.get(endPoint).then(response => {
            const movieData = response.data;
            setMovie(movieData);
        })
        .catch(error => {
            swAlert(<h1>There were errors, try again later</h1>)
        })
    }, [movieID])
        

  return (
    <>
    { !token && <Navigate to='/' />}
    { !movie && <p>Cargando...</p>}
    { movie && <div className='w-screen flex flex-row'>       
                  <div className='w-screen grid grid-cols-2'>
                    <div className='flex items-center justify-center border-r-2 border-gray-900 h-screen'>
                        <img
                         className='w-96 rounded'
                         src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="img not found" />
                    </div>
                    <div className='flex flex-col p-16'>
                    <h1 className='mb-5 uppercase tracking-wide text-2xl leading-tight font-bold'>{movie.title} </h1>
                        <h5 className='tracking-wide text-md leading-tight font-bold mb-2'>Release date: </h5>
                        <p className='mb-5 tracking-wide text-md leading-tight'>{movie.release_date}</p>
                        <h5 className='tracking-wide text-md leading-tight font-bold mb-2'>Synopsis: </h5>
                        <p className='mb-5 tracking-wide text-md leading-tight'> {movie.overview} </p>
                        <h5 className='tracking-wide text-md leading-tight font-bold mb-2'>Rating: </h5>
                        <p className='mb-5 tracking-wide text-md leading-tight'>{movie.vote_average}</p>
                        <h5 className='tracking-wide text-md leading-tight font-bold mb-2'>Genres: </h5>
                        <ul> {movie.genres.map(oneGenre => <li key={oneGenre.id} >{oneGenre.name}</li>)}</ul>
                    </div>

                    </div>
                </div>
            }
            <Footer />
    </>
  )
}

export default MovieDetail



