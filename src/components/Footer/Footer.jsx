import React from 'react'
import { BsLinkedin, BsGithub, BsFillTelephoneFill } from 'react-icons/bs'
import { TbWorld } from 'react-icons/tb'
import { AiOutlineMail } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className='bg-gray-900 w-screen h-32 flex flex-row'>
        <div className='w-6/12 flex flex-col'>
            <div className='p-2 flex items-center justify-center'>
                <h2 className='text-white'>SOCIAL</h2>
            </div>
            <div className='w-full flex flex-row items-center justify-center mt-4'>
                <a href="https://www.linkedin.com/in/tomas-bartoldi-395818242/" target='_blank'>
                    <BsLinkedin size={30} style={{ color: '#fff', marginRight: '1rem' }} />
                </a>
                <a href="https://github.com/TomasBartoldi" target='_blank'>
                    <BsGithub size={30} style={{ color: '#fff', marginRight: '1rem' }} />
                </a>
                <a href="https://tomasbartoldi.vercel.app" target='_blank'>
                    <TbWorld size={30} style={{ color: '#fff', marginRight: '1rem' }} />
                </a>
            </div>
        </div>

        <div className='w-6/12 flex flex-col '>
            <div className='p-2 flex items-center justify-center'>
                <h2 className='text-white'>CONTACT</h2>
            </div>
            <div className='w-full flex flex-col items-center justify-center'>
                <div className='flex flex-row mb-3'>
                    <AiOutlineMail size={20} style={{ color: '#fff', marginRight: '1rem' }}/>
                    <p className='text-white'>bartoldit@gmail.com</p>
                </div>
                <div className='flex flex-row'>
                    <BsFillTelephoneFill size={20} style={{ color: '#fff', marginRight: '1rem' }}/>
                    <p className='text-white'>+54 9 11-6888-1990</p>
                </div>
            </div>
        </div>

    </footer>
  )
}

export default Footer