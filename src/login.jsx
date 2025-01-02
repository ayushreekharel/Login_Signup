// Login.jsx
import React,{useState} from 'react';
import Signpage from './App';
import {Link, useNavigate} from 'react-router-dom'
import Route_path from './routes.jsx'
import './App.css'
import Home from './home.jsx'
function Login() {
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const navigate=useNavigate();
    const handleSubmit=(e)=>{
        if (email==='' || password===''){
            alert('Please fill all the information')
            return
        }
        navigate('/home')
    }
  return (
    <>
      <h2>Login Page</h2>
      <div className='box'>
      <form onSubmit={handleSubmit}>
      <div>
        <div className='form-group'>
        <label>Email: </label>
        <input type='email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
        </div>
        <div className='form-group'>
        <label>Password:</label>
        <input type='password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
        </div>
        </div>
       
        
        
        <button type='submit'>Login</button>
        </form>
        </div>
        <p>Don't have an account?
            <Link to='/'> SignUp</Link>
        </p>
      </>
  );
}

export default Login;
