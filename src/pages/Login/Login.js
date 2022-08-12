import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import img from "../../assets/blok.png"
import googleimg  from "../../assets/google.png"
import { logIn, signUpProvider } from '../../helpers/functions'
import loadingImg from "../../assets/loading.gif"
import "./Login.css"

const Login = ({isLogged,setisLogged,currentUser,setCurrentUser}) => {

  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
  const navigate = useNavigate()
  const [isLoading,setIsLoading] = useState(false)

  const handleLogin = (e) =>{
    e.preventDefault(e)
    logIn(email,password,navigate)
    setisLogged(true)
    setCurrentUser(email)
    setIsLoading(true)

  }

  const handleGoogleSignIn = () =>{
    signUpProvider(navigate)
    setCurrentUser(email)
  }


  
  return (
    
      <div>
        <div className='login' >
          <div className='container'>

            <div className="imgdiv">
                <img src={img} alt="" width={"250px"} />
            </div>
    
            <div>
                <h4 className='text-login'>Login</h4>
            </div>

            <div>
                <form onSubmit={handleLogin}>
                    <div>
                      <input 
                      className='formbox' 
                      type="email" 
                      name="email" 
                      id="email" 
                      placeholder='Email' 
                      onChange={(e)=>setEmail(e.target.value)}/>
                    </div>

                    <div>
                      <input 
                      className='formbox' 
                      type="password" 
                      name="password" 
                      id="password" 
                      placeholder='Password' 
                      onChange={(e)=>setPassword(e.target.value)}/>
                    </div>

                    {isLogged ? (
          <img src={loadingImg} alt="" />
        ):(
          <>
            <div>
            <button 
            type='submit' 
            className='text-white  btn button1'
            >LOGIN</button>
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
      </div>
  )
}

export default Login