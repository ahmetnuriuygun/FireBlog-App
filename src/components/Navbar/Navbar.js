import React from 'react';
import img from "../../assets/cw.jpeg";
import {Link} from "react-router-dom";
import {FaUserCircle} from "react-icons/fa"
import { NavDropdown } from 'react-bootstrap';
import { logOut } from '../../helpers/functions';
import "./Navbar.css"

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
                    <img src={img} alt="" style={{width:"70px"}}/>
                </Link>
              </div>


              <div>
                <Link to="/" className='text-decoration-none'>
                      <h3>
      
                     <i>{"<Ahmet Nuri/>"}</i><span className='text-white'>Blog</span>   
                      </h3>
                </Link>
              </div>
              
    
              {isLogged ? (
                <div>
                  <NavDropdown className='d-flex' title={<FaUserCircle className='text-white icon'/>} id="nav-dropdown1"> 
                  
                    <Link className='text-decoration-none text-black d-block drop-link' to="/profile">Profile</Link>
                    
                    <Link className='text-decoration-none text-black d-block drop-link' to="/new-blog">New</Link>
                    
                    <Link className='text-decoration-none text-black d-block drop-link' to="/" onClick={handleLogout}>Logout</Link>
                
                  </NavDropdown> 
                </div>

              ) : (
                <div>
                  <NavDropdown title={<FaUserCircle className='text-white icon'/>} id="nav-dropdown2"> 
                  
                    <Link className='text-decoration-none text-black d-block drop-link' to="/login" >Login</Link>
                    
                    <Link className='text-decoration-none text-black d-block drop-link' to="/register" >Register</Link>

                  </NavDropdown>  
                </div>      
                  )}
              
              
        

          
              

              

                  
          </div>
      </nav>
    </div>
  )
}

export default Navbar