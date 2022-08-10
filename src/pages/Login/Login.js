import { sendSignInLinkToEmail } from 'firebase/auth'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import img from "../../assets/blok.png"
import googleimg  from "../../assets/google.png"
import { logIn, signUpProvider } from '../../helpers/functions'
import "./Login.css"
const Login = ({isLogged,setisLogged}) => {

  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
  const navigate = useNavigate()

  const handleLogin = (e) =>{
    e.preventDefault(e)
    logIn(email,password,navigate)
    setisLogged(true)
  }

  const handleGoogleSignIn = (navigate) =>{
    signUpProvider(navigate)
  }

  return (
    <div >

    <div className='container'>

    <div className="imgdiv">
      <img src={img} alt="" width={"190px"} />
    </div>
    
    <div>
      <h4 className='text-login'>Login</h4>
    </div>

    <div>
    <form onSubmit={handleLogin}>
      <div>
        <input className='formbox' type="email" name="email" id="email" placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
      </div>

      <div>
        <input className='formbox' type="password" name="password" id="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
      </div>

      <div>
        <button type='submit' className='text-white  btn button1'>Log in</button>
      </div>

      <div>
        <button onClick={handleGoogleSignIn}>With <span><img src={googleimg} width={"70px"}  alt="" /></span></button>
      </div>
    </form>
    </div>
    </div>

    </div>
  )
}

export default Login