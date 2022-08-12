
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import img from "../../assets/blok.png"
import googleimg  from "../../assets/google.png"
import { createUser, signUpProvider } from '../../helpers/functions'
import loadingImg from "../../assets/loading.gif"
import "./Register.css"

const Register = ({isLogged,setisLogged,currentUser,setCurrentUser}) => {

   const[registerEmail,setRegisterEmail] = useState()
   const[registerPassword,setRegisterPassword] = useState()
   const navigate = useNavigate()
   const [isLoading,setIsLoading] = useState(false)
  const handleRegister = (e) =>{
    e.preventDefault(e)
    createUser(registerEmail,registerPassword,navigate)
    setisLogged(true)
    setCurrentUser(registerEmail)
    setIsLoading(true)

  }
  
  const handleGoogleSignIn = () =>{
    signUpProvider(navigate)
    setCurrentUser(registerEmail)
  }


  return (

    <div className='register'>
      <div className='container'>

        <div className="imgdiv">
          <img src={img} alt="" width={"250px"} />
        </div>
        
        <div>
            <h4 className='text-login'>Register</h4>
        </div>

        <div>
            <form onSubmit={handleRegister}>
              <div>
                  <input 
                  className='formbox' 
                  type="email" 
                  name="email" 
                  id="email" 
                  placeholder='Email' 
                  onChange={(e)=>setRegisterEmail(e.target.value)}/>
              </div>

        <div>
            <input 
            className='formbox' 
            type="password" 
            name="password" 
            id="password" 
            placeholder='Password' 
            onChange={(e)=>setRegisterPassword(e.target.value)}/>
        </div>
        {isLogged ? (
          <img src={loadingImg} alt="" />
        ):(
          <>
            <div>
            <button 
            type='submit' 
            className='text-white  btn button1'
            >REGISTER</button>
          </div>

            <div>
            <button 
            className="button2" 
            onClick={handleGoogleSignIn}  
            type='submit'
            >WITH <span><img src={googleimg} width={"100px"}  alt="" /></span>
            </button>
            </div>

          </>
          


          
        )}
        

        
      </form>
    </div>
  </div>
</div>
  )
}

export default Register