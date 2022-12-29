import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from './pages/Login'
import Home from './pages/Home'
import Detail from './pages/Detail'
import Favorites from './pages/Favorites'
import Results from './pages/Results'


function App() {

   const addOrRemoveFromFavs = e => {
     
      //const getBtn = document.getElementById('btn')
      //const btn = getBtn.dataset.movieId

      const getBtn = e.currentTarget;
      console.log(getBtn.dataset);
      
      
      const image = document.getElementById('image').getAttribute('src')
      const getTitle = document.getElementById('title')
      const title = getTitle.innerText;
      const getOverview = document.getElementById('overview')
      const overview = getOverview.innerText;

      const movieData = {
         image,
         title,
         overview,
         id: getBtn.dataset.movieId
      }

      console.log(movieData)
   }

  return (
     <Routes>
        <Route exact path='/' element={<Login />} />
        <Route path='/home' element={<Home addOrRemoveFromFavs={addOrRemoveFromFavs} />} />
        <Route path='/detail' element={<Detail />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/results' element={<Results />} />
     </Routes>
  );
}

export default App;
