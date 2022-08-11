import React from 'react'
import BlogCard from "../components/BlogCard/BlogCard"

const Dashboard = ({isLogged,setisLogged,currentUser,setCurrentUser}) => {
  
  return (
    <div>
      <header className='text-center  h1 dashboard mt-3'>
        DASHBOARD
      </header>

      <div>
        <BlogCard isLogged={isLogged}
                setisLogged={setisLogged}
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}  />
      </div>
    </div>
  )
}

export default Dashboard