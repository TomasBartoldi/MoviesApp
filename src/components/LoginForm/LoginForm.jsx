import React from 'react';
import swAlert from '@sweetalert/with-react';
import axios from 'axios';
import { useNavigate, Navigate } from 'react-router-dom';

const Login = () => {    

    const navigate = useNavigate();
    

    const submitHandler = e => { 

        e.preventDefault();
        
        const email = e.target.email.value;
        const password= e.target.password.value;

        const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ ;
        
        if(email === '' || password === ''){
            return swAlert(<h2>Fields couldnt be empty</h2>);
            
        }

        if(email !== '' && !regexEmail.test(email)){
           return swAlert(<h2>Please enter a valid email</h2>);
        }

        if(email !== 'challenge@alkemy.org' || password !== 'react'){
           return swAlert(<h2>Invalid credentials</h2>);
        } 
        
        swAlert(<h2>Bienvenido</h2>);

        axios
           .post('http://challenge-react.alkemy.org', { email, password })
           .then(res => {
               const token = res.data.token;
               localStorage.setItem('token', token);
               localStorage.setItem('name', 'tomas bartoldi');
               navigate('/home')
           })

        
    }

    let token = localStorage.getItem('token');

  return (
    <>
    { token && <Navigate to='/home' />}
    <div className='flex flex-col items-center justify-center box-border h-72 w-96 bg-gray-900 rounded-lg shadow-lg'>
        
        <div className='w-full h-1/5 flex justify-center'>
        <h2 className='text-slate-50 text-xl'>Sign in</h2>
        </div>

        <form 
        className='space-y-6'
        onSubmit={submitHandler}>
            <label>
                <span className='text-slate-50'>Email:</span>
                <br />
                <input
                className='w-64 rounded'
                type='text' 
                name='email' />
            </label>
            <br />
            <label>
               <span className='text-slate-50'>Password:</span>
               <br />
               <input 
               className='w-64 rounded'
               type='password' 
               name='password' />
            </label>
            <br />
            <button
            className='bg-red-800 w-64 rounded text-slate-50' 
            type='submit'
            >LOGIN</button>
        </form>   
    </div>
    </>
  )
}

export default Login