import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from './pages/Login'
import Home from './pages/Home'
import Detail from './pages/Detail'
import Favorites from './pages/Favorites'


function App() {

  return (
     <Routes>
        <Route exact path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/detail' element={<Detail />} />
        <Route path='/favorites' element={<Favorites />} />
     </Routes>
  );
}

export default App;
