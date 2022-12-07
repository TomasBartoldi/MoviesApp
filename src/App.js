import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from './pages/Login'
import Home from './pages/Home'

function App() {

  return (
     <Routes>
        <Route exact path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
     </Routes>
  );
}

export default App;
