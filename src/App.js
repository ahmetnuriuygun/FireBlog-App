import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import AppRouter from './router/AppRouter';

const App = () => {
  const [isLogged,setisLogged] = useState(false)
  const [currentUser,setCurrentUser] = useState()
  return (
    <div>
      <AppRouter isLogged={isLogged}
                 setisLogged={setisLogged} 
                 currentUser = {currentUser}
                 setCurrentUser = {setCurrentUser}
                 
                 />
      
    </div>
  )
}

export default App
