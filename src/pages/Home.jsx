import React from 'react'
import Cards from '../components/Cards/Cards'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <div className='m-0 p-0 w-full bg-red-900'>
      <Navbar />
      <Cards />
      <Footer />
    </div>
  )
}

export default Home;