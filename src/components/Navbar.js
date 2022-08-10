import React from 'react';
import img from "../assets/cw.jpeg";
import {Link, useNavigate} from "react-router-dom";
import {FaUser} from "react-icons/fa"
import { NavDropdown } from 'react-bootstrap';
import { logOut } from '../helpers/functions';

const Navbar = ({isLogged,setisLogged}) => {
  

  const handleLogout = (e) =>{
    e.preventDefault()
    logOut();
    setisLogged(false)
  }

  

  


  return (
    <div>
      <nav className='navbar navbar-expand'>
          <div className='container-fluid d-flex justify-content-between'>
            
              <div>
                <Link to="/">
                    <img src={img} alt="" style={{width:"50px"}}/>
                </Link>
              </div>


              <div>
                <Link to="/">
                      <h3>
                      <i className='text-warning'>{"<Ahmet Nuri/>"}</i> <span className='text-white'>Blog</span> 
                      </h3>
                </Link>
              </div>
              
    
              {isLogged ? (
                <div>
                  <NavDropdown className='d-flex' title={<FaUser className='text-white'/>} id="nav-dropdown1"> 
                  
                    <Link className='text-decoration-none text-black d-block' to="/profile">Profile</Link>
                    
                    <Link className='text-decoration-none text-black d-block' to="/new-blog">New</Link>
                    
                    <Link className='text-decoration-none text-black d-block' to="/" onClick={handleLogout}>Logout</Link>
                
                  </NavDropdown> 
                </div>

              ) : (
                <div>
                  <NavDropdown title={<FaUser className='text-white'/>} id="nav-dropdown2"> 
                  
                    <Link className='text-decoration-none text-black d-block' to="/login" >Login</Link>
                    
                    <Link className='text-decoration-none text-black d-block' to="/register" >Register</Link>

                  </NavDropdown>  
                </div>      
                  )}
              
              
        

          
              

              

                  
          </div>
      </nav>
    </div>
  )
}

export default Navbar