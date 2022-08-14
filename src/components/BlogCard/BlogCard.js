import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useFetch } from '../../helpers/functions'
import loadingImg from "../../assets/spinner.gif"
import "./BlogCard.css"
import {  toastWarnNotify } from '../../helpers/ToastNotify'
import {FaUserCircle} from "react-icons/fa"


const BlogCard = ({isLogged,setisLogged,currentUser,setCurrentUser}) => {

  const {blogs,isLoading} = useFetch()
  console.log(isLoading) 

  const navigate = useNavigate()
  console.log(blogs)


    const handleCard = (id) =>{
        !isLogged && toastWarnNotify("Please log in to see details");
        navigate("/details/" + id);
        
    }

   

  return (
    <div className='container'>  
    <div className='row'>

    
    <div className='main-card '>
    {isLoading ? (
      <img src={loadingImg} alt="" />
    ):(
      <>
         {blogs?.map((item)=>{
      return(

      
        <div className="card-group col-lg-4 col-md-3 col-sm-2 col-xsm-1 ">
  <div className="cards "  onClick={()=>handleCard(item.id)}>
    <img src={item.url} className="card-img-top" />
    <div className="card-body">
      <h5 className="card-title">{item.title}</h5>
      
      <p className="card-text">{item.content.substring(0,150)}</p>
      <p className="card-text"> <FaUserCircle/> {item.user} </p>
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
    </div>
    </div>
  )
}

export default BlogCard