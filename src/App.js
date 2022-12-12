import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from './pages/Login'
import Home from './pages/Home'
import Card from './components/Card/Card'

function App() {

  return (
     <Routes>
        {/* Esta ruta luego se borra */}
        <Route path='/card' element={<Card />} />

        <Route exact path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
     </Routes>
  );
}

export default App;
