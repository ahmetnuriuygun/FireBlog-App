import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import AppRouter from './router/AppRouter';

const App = () => {
  const [isLogged,setisLogged] = useState(false)

  return (
    <div>
      <AppRouter isLogged={isLogged}
                 setisLogged={setisLogged} 

                 />
      
    </div>
  )
}

export default App
