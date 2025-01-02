import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReactDOM from 'react-dom/client'
import Login from './login.jsx'
import {Link} from 'react-router-dom'
import Route_path from './routes.jsx'

function Signpage(){
const [name,setName]=useState('')
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const[confirmPassword,setCP]=useState('')

const handleSubmit=(e)=>{
  if (name,email,password,confirmPassword===''){
    alert('Please fill all the information first')
    return
  }
  if (password!==confirmPassword){
    alert('Passowrds do not match.')
    return
  }
  alert('Are you sure on creating a account')

}

  return(
    <>
    <h1>Sign Up Page</h1>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
        <label>Name: </label>
        <input type='text' value={name} placeholder='Enter your full name' onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div className='form-group'>
        <label>Email: </label>
        <input type='email' value={email} placeholder='Enter your valid email' onChange={(e) => setEmail(e.taget.value)}/>
        </div>
        <div className='form-group'>
        <label>Password: </label>
        <input type='password' placeholder='Enter the password' onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div className='form-group'>
        <label>Confirm your password: </label>
        <input type='password' placeholder='Confirm your password' onChange={(e) => setCP(e.target.value)}/>
        </div>
        <button type='submit'>Submit</button>

      </form>
      <p>Already have an account?
        <Link to='/login'>Go to Login</Link>
         </p>

    </>
  )
}

export default Signpage

