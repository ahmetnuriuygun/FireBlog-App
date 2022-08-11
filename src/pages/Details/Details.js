import React from 'react'
import { useParams} from 'react-router-dom'
import { useFetch} from '../../helpers/functions';
import { Card, Col } from 'react-bootstrap'
import "./Details.css"



const Details = () => {
  
  const {id} = useParams();
  
  
  const {blogs} = useFetch();

  console.log(blogs);



  return(
    <div>
    
    <div className="header">
      <h1>DETAILS</h1>
    </div>

    <div>
      {blogs?.filter(blog=>blog.id === id).map(filteredBlog=>(
        <Col
              className="d-flex justify-content-center mb-4"
              sm={12}
              md={6}
              lg={4}
              key={filteredBlog.id}
            >
              <Card className="details-info">
                <Card.Img variant="top" src={filteredBlog.url} />
                <Card.Body className='card-body'>
                  <Card.Title className='title' >{filteredBlog.title}</Card.Title>
                  <Card.Text>{filteredBlog.content}</Card.Text>
                </Card.Body>
                
              </Card>
            </Col>
      ))}
    </div>
      
    </div>
  )
}

export default Details