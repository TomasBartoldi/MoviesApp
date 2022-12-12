import React from 'react'

const Card = () => {
  return (
    <>
       <div className='w-80 h-96 bg-gray-200 grid grid-rows-2 rounded'>
            <div className='border-b border-gray-300'>
                imagen
            </div>
            
            <div>
                <h1>Movie title</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae et, dolore earum quibusdam libero corrupti harum. Sit eum non labore aut corporis, doloremque nihil possimus a! Deserunt cum maiores animi!</p>
                <button>View detail</button>
            </div>
       </div>
    </>
  )
}

export default Card