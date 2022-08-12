import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import imgblok from "../../assets/blok.png"
import { AddUser } from '../../helpers/functions'
import "./BlogForm.css"

const BlogForm = ({currentUser,setCurrentUser,info,setInfo}) => {
  const [title,setTitle] = useState()
  const [url,setUrl] = useState()
  const [content,setContent] = useState()


  const navigate = useNavigate()

  const handleNewBlog = (e) =>{
    e.preventDefault()
    AddUser(title,url,content,navigate,currentUser)
}

  return (
    
    <div>
          <div className='container-new-blog'> 
              <div className="new-blog-img-div">
                <img src={imgblok} alt="" width={"250px"} />
              </div>

              <div className='new-blog-text' >
                <h1>New Blog</h1>
              </div>

              <form>
              
                <div>
                  <input className='new-blog-form-box' type="text" placeholder='Title*' required onChange={(e)=>setTitle(e.target.value)} />
                </div>

                <div>
                    <input className='new-blog-form-box' type="url" name="link" id="link" placeholder='Image URL*' required onChange={(e)=>setUrl(e.target.value)}/>
                </div>
        
                <div>
                    <input className='new-blog-text-box' type="text" placeholder="Content*" onChange={(e)=>setContent(e.target.value)}/>
                </div>
                    <button className='new-blog-button btn' type='submit' onClick={handleNewBlog}>SUBMIT</button>
              </form>

          </div>
      </div>
  )
}

export default BlogForm