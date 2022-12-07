import React from 'react'
import swAlert from '@sweetalert/with-react'
import axios from 'axios'

const Login = () => {    

    const submitHandler = e => { 

        e.preventDefault();
        
        const email = e.target.email.value
        const password= e.target.password.value

        const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ 
        
        if(email === '' || password === ''){
            return swAlert('Fields couldnt be empty');
            
        }

        if(email !== '' && !regexEmail.test(email)){
           return swAlert('Please enter a valid email');
        }

        if(email !== 'challenge@alkemy.org' || password !== 'react'){
           return swAlert('Invalid credentials')
        } 
        
        swAlert('Bienvenido')

        axios
           .post('http://challenge-react.alkemy.org', { email, password })
           .then(res => {
               const token = res.data.token;
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