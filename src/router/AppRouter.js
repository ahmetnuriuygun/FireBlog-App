import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Dashboard from "../pages/Dashboard"
import Profile from "../pages/Profile/Profile"
import NewBlog from "../pages/NewBlog/NewBlog"
import Login from "../pages/Login/Login"
import Register from "../pages/Register/Register"
import Details from '../pages/Details/Details'
import PrivateRouter from './PrivateRouter'
import NotFound from '../pages/NotFound'


const AppRouter = ({isLogged,setisLogged,currentUser,setCurrentUser}) => {
   
   
  return (
    <div>
        <BrowserRouter>
        <Navbar  isLogged={isLogged}
                setisLogged={setisLogged} />
        <Routes>
            <Route  path="/" element={<Dashboard
                currentUser={currentUser}
                setCurrentUser={setCurrentUser} 
            />}/>

            <Route path="/login" element={<Login
                isLogged={isLogged}
                setisLogged={setisLogged}
                currentUser={currentUser}
                setCurrentUser={setCurrentUser} 
               
            /> }/>     

            <Route path="/register" element={<Register
                isLogged={isLogged}
                setisLogged={setisLogged} 
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}   
            /> }/>   

            <Route path="/profile" element={<Profile
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
                isLogged={isLogged}
                setisLogged={setisLogged} 
            />}/>   

            <Route path="/new-blog" element={<NewBlog 
                isLogged={isLogged}
                setisLogged={setisLogged}
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}    
                
                />}/>
            <Route path="/details/:id" element={<PrivateRouter 
                isLogged={isLogged}
                setisLogged={setisLogged} />}>
            <Route path="/details/:id" element={<Details 
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
                />}/>    
            </Route>    
            
            <Route path="*" element={<NotFound/>} />
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default AppRouter