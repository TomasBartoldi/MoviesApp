import React from 'react'
import Listado from '../components/Listado/Listado'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <div className='m-0 p-0'>
      <Navbar />
      <Listado />
      <Footer />
    </div>
  )
}

export default Home;