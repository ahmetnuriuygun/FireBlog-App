import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRouter = ({isLogged,setisLogged}) => {

  return (
    isLogged ? <Outlet/> : <Navigate to="/login" replace/>
    
  )
}

export default PrivateRouter