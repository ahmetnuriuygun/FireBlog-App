
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import img from "../../assets/blok.png"
import googleimg  from "../../assets/google.png"
import { createUser, signUpProvider } from '../../helpers/functions'
import "./Register.css"
const Register = ({isLogged,setisLogged}) => {

   const[registerEmail,setRegisterEmail] = useState()
   const[registerPassword,setRegisterPassword] = useState()
   const navigate = useNavigate()
  
  const handleRegister = (e) =>{
    e.preventDefault(e)
    createUser(registerEmail,registerPassword,navigate)
    setisLogged(true)
  }
  
  const handleGoogleSignIn = (navigate) =>{
    signUpProvider(navigate)
  }
  return (
    <div>
       <div className='container'>

<div className="imgdiv">
  <img src={img} alt="" width={"190px"} />
</div>

<div>
  <h4 className='text-login'>Register</h4>
</div>

<div>
<form onSubmit={handleRegister}>
  <div>
    <input className='formbox' type="email" name="email" id="email" placeholder='Email' onChange={(e)=>setRegisterEmail(e.target.value)}/>
  </div>

  <div>
    <input className='formbox' type="password" name="password" id="password" placeholder='Password' onChange={(e)=>setRegisterPassword(e.target.value)}/>
  </div>

  <div>
    <button type='submit' className='text-white  btn button1'>Register</button>
  </div>

  <div>
    <button onClick={handleGoogleSignIn} className='' type='submit'>With <span><img src={googleimg} width={"70px"}  alt="" /></span></button>
  </div>
</form>
</div>
</div>
    </div>
  )
}

export default Register