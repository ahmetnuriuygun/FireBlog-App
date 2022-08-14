import React from 'react'
import BlogCard from "../components/BlogCard/BlogCard"

const Dashboard = ({isLogged,setisLogged,currentUser,setCurrentUser}) => {
  const myStyles = {
    header : {color: "#046582" , fontSize:"60px ", fontWeight:"bold",letterSpacing:"2px"}
  }
  
  return (
    <div>
      <h1 style={myStyles.header} className='text-center  h1 dashboard mt-3'>
        DASHBOARD
      </h1>

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