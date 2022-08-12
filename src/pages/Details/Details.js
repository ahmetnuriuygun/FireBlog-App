import React from 'react'
import { useNavigate, useParams} from 'react-router-dom'
import { DeleteBlog,  useFetch} from '../../helpers/functions';
import { Card, Col } from 'react-bootstrap'
import "./Details.css"
import Modal from '../../components/Modal/Modal';
import { useState } from 'react';



const Details = ({currentUser,setCurrentUser,EditUser}) => {
  
  const {id} = useParams();
  
  const {blogs} = useFetch();

  const navigate = useNavigate();
  
  const handleDelete = (id) =>{
    DeleteBlog(id,navigate);
}
  const handleUpdate = (filteredBlog) => {
    setModalOpen(true);
    setInfoDetail(filteredBlog)
}

const [infoDetail,setInfoDetail] = useState()
const [modalOpen, setModalOpen] = useState(false);

// console.log(modalOpen)


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
                  <Card.Text>{filteredBlog.user}</Card.Text>
                </Card.Body>
                {filteredBlog.user === currentUser
                ? (
                  <>
                  <div><button onClick={()=>{handleUpdate(filteredBlog)}}>UPDATE</button>
                </div>
                {modalOpen && <Modal setOpenModal={setModalOpen}
                                    setInfoDetail={setInfoDetail}
                                    infoDetail={infoDetail}
                 />}  
                  <br />
                  <div><button onClick={()=>{handleDelete(filteredBlog.id)}}
                  >Delete</button></div>
                  </>

                ) : (
                  <>

                  </>
                )} 

                
              </Card>
            </Col>
      ))}
    </div>
            
    </div>
  )
}

export default Details