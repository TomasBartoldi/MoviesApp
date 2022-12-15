import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import MoviesResults from '../components/Results/MoviesResults'

const Results = () => {
  return (
    <div>
        <Navbar />
        <MoviesResults />
        <Footer />
    </div>
  )
}

export default Results