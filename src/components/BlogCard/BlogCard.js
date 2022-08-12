import React from 'react'
import { Card, CardGroup, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useFetch } from '../../helpers/functions'
import loadingImg from "../../assets/spinner.gif"
import "./BlogCard.css"

const BlogCard = ({isLogged,setisLogged,currentUser,setCurrentUser}) => {

  const {blogs,isLoading} = useFetch()
  console.log(isLoading) 

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
    {isLoading ? (
      <img src={loadingImg} alt="" />
    ):(
      <>
         {blogs?.map((item)=>{
      return(
        <div class="card-group">
  <div class="cards">
    <img src={item.url} class="card-img-top" />
    <div class="card-body">
      <h5 class="card-title">{item.title}</h5>
      <p class="card-text">{item.content}</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  </div>
   )
        {/* <CardGroup className='cards'>
<Card style={{ width: "18rem" }} onClick={()=>handleCard(item.id)} >
                <Card.Img variant="top" src={item.url} width={"25px"} />
                <Card.Body>
                  <Card.Title className='title' >{item.title}</Card.Title>
                  <Card.Text>{item.content}</Card.Text>
                  <Card.Text>{item.user}</Card.Text>
                </Card.Body>
                
              </Card>
        </CardGroup> */}
              
           
     
    })}
      </>
    )}
   
        
    </div>
  )
}

export default BlogCard