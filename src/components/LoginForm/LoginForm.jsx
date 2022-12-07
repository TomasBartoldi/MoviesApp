import React from 'react'

const Login = () => {

    const submitHandler = () => {
        console.log('Hola soy el form')
    }

  return (
    <div>
        <h2>LOGIN:</h2>
        <form onSubmit={submitHandler}>
            <label>
                <span>Email:</span>
                <br />
                <input type='email' name='email' />
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