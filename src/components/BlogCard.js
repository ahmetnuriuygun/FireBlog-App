import React from 'react'
import { useFetch } from '../helpers/functions'

const BlogCard = () => {
  const {blogs} = useFetch()
  console.log(blogs)
  return (
    <div>
    {blogs?.map((item,index)=>{
      return(
        <div className="card" >
          <img className="card-img-top" style={{width:"50px"}} src={item.url} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">{item.content}</p>
          </div>
        </div>
      )
    })}
        
    </div>
  )
}

export default BlogCard