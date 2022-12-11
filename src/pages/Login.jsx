import React from 'react'
import LoginForm from '../components/LoginForm/LoginForm'
import '../Styles/Login.css'

const Login = () => {
  return (
    <div className='login-container flex items-center justify-center'>
       <LoginForm />
    </div>
  )
}

export default Login;