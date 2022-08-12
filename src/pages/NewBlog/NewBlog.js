import React from 'react'
import BlogForm from '../../components/BlogForm.css/BlogForm'


const NewBlog = ({currentUser,setCurrentUser}) => {
  // console.log(info)
 return (
    <BlogForm currentUser={currentUser}
    setCurrentUser={setCurrentUser}
     />
  )
}

export default NewBlog