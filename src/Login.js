import React from 'react'
import './Login.css'
import {Link} from 'react-router-dom'

function Login() {
  return (
    <div className='login'>
      <Link to='/'>
        <img className='login__logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt='' />
      </Link>

      <div className='login__container'>
        <h1>Sign-in</h1>
        <form>
          <h5>Email</h5>
          <input type='email' />
          
          <h5>Password</h5>
          <input type='password' />

          <button className='login__signInButton'>Sign in</button>
        </form>

        <p>
          By signing in you agree that you don't have any objection to visit this
          project of Amazon-Clone. Please see our privacy notice, cookies notice and ad notice.
        </p>

        <button className='login__registerButton'>Create an Account</button>
      </div>
    </div>
  )
}

export default Login