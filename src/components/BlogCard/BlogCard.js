import React from 'react'
import { Card, Col } from 'react-bootstrap'
import { Navigate, useNavigate } from 'react-router-dom'
import { useFetch } from '../../helpers/functions'
import "./BlogCard.css"

const BlogCard = ({isLogged,setisLogged,currentUser,setCurrentUser}) => {
  const {blogs} = useFetch()
  // console.log(blogs)

  const navigate = useNavigate()

  const handleCard = (id) =>{
    
    isLogged ? (
      alert("Please log in to see details")
    ) : (
      navigate("/details/" + id)
    )
}

  return (
    <div>
    {blogs?.map((item)=>{
      return(
        <Col
              className="d-flex justify-content-center mb-4"
              sm={12}
              md={6}
              lg={4}
              key={item.id}
            >
              <Card style={{ width: "18rem" }} onClick={()=>handleCard(item.id)} >
                <Card.Img variant="top" src={item.url} />
                <Card.Body>
                  <Card.Title className='title' >{item.title}</Card.Title>
                  <Card.Text>{item.content}</Card.Text>
                  <Card.Text>{item.user}</Card.Text>
                </Card.Body>
                
              </Card>
            </Col>
      )
    })}
        
    </div>
  )
}

export default BlogCard