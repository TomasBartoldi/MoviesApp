import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Listado = () => {

   const navigate = useNavigate();
 
   useEffect(() => {  
       const token = localStorage.getItem('token')
       if(token === null){
           navigate('/')
       }
   }, [])


  return (
    <div>Soy Listado</div>
  )
}

export default Listado