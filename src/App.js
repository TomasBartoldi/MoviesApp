import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from './pages/Login'
import Home from './pages/Home'
import Detail from './pages/Detail'
import Favorites from './pages/Favorites'
import Results from './pages/Results'


function App() {

   const addOrRemoveFromFavs = e => {
      /* const btn = e.target.parentElement;
      const imgURL = btn.querySelector('img').getAttribute('src');
      console.log(imgURL); */

      //const btn = e.target;
      //console.log(`soy el boton ${btn}`);
      const image = document.getElementById('image').getAttribute('src')
      const title = document.getElementById('title')
      const title2 = e.currentTarget.title.value
      const overview = document.getElementById('overview')
      
      console.log('soy el titulo', title2);
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
