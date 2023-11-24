import React, { useState } from 'react'
import './Login.css'
import {Link, useNavigate} from 'react-router-dom'
import {auth} from './firebase.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

function Login() {

  const navigate = useNavigate();
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');

  const createUser = async (email, password) => {
    try{
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      console.log("User Created Successfully", user);
      if(auth){
        navigate('/');
      }
    }

    catch(error){
      console.log("Error creating user");
      alert(error.message);
    }
  }
  const signInUser = async (email, password) => {
    try{
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      if(auth){
        navigate('/');
      }
    }

    catch(error){
      alert(error.message);
    }
  }
  const signIn = e => {
    e.preventDefault();
    signInUser(email, password);
  }

  const register = e =>{
    e.preventDefault();
    createUser(email, password);
  }

  return (
    <div className='login'>
      <Link to='/'>
        <img className='login__logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt='' />
      </Link>

      <div className='login__container'>
        <h1>Sign-in</h1>
        <form>
          <h5>Email</h5>
          <input type='email' value={email} onChange={e => setEmail(e.target.value)} />
          
          <h5>Password</h5>
          <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

          <button className='login__signInButton' type='submit' onClick={signIn} >Sign in</button>
        </form>

        <p>
          By signing in you agree that you don't have any objection to visit this
          project of Amazon-Clone. Please see our privacy notice, cookies notice and ad notice.
        </p>

        <button className='login__registerButton' onClick={register}>Create an Account</button>
      </div>
    </div>
  )
}

export default Login