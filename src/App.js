import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from './pages/Login'
import Home from './pages/Home'
import Detail from './pages/Detail'
import Favorites from './pages/Favorites'
import Results from './pages/Results'


function App() {

   const addOrRemoveFromFavs = e => {
      const btn = e.target;
      const parent = btn.parentElement;
      const imgURL = parent.querySelector('img').getAttribute('src')
      console.log(imgURL);
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
