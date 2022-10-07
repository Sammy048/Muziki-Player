import React from 'react'
import { loginEndpoint } from '../../spotify'
import './login.css'
import MyImage from '../../Muziki_Player.png'

const Login = () => {
  return (
    <div className='login-page'>
        <img src={MyImage} alt='logo-spotify' className='logo' />
        <a href={loginEndpoint}><div className='login-btn'>LOG IN</div></a>
          
    </div>
  )
}

export default Login
