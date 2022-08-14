import React from 'react'
import { useNavigate } from 'react-router-dom'
import profile from "../../assets/profile.jpeg"
import { logOut } from '../../helpers/functions'
import "./Profile.css"

const Profile = ({currentUser,setCurrentUser,isLogged,setisLogged}) => {
  console.log(currentUser)
  const navigate = useNavigate()
  const handleLogout = (e) =>{
    e.preventDefault()
    logOut(navigate);
    setisLogged(false)
    navigate("/")
  }
  return (
    
        <div className='profile'>
          <img src={profile} alt="" />
            <h1>{currentUser}</h1>
            <button className='btn' onClick={handleLogout}>LOG OUT</button>
        </div>

      
    
  )
}

export default Profile