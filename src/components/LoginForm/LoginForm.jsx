import React from 'react';
import swAlert from '@sweetalert/with-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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

  return (
    <div>
        <h2>LOGIN:</h2>
        <form onSubmit={submitHandler}>
            <label>
                <span>Email:</span>
                <br />
                <input type='text' name='email' />
            </label>
            <br />
            <label>
               <span>Password:</span>
               <br />
               <input type='password' name='password' />
            </label>
            <br />
            <button type='submit'>Start</button>
        </form>   
    </div>
  )
}

export default Login