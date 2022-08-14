import React from 'react'
import {  useParams} from 'react-router-dom'
import { useFetch} from '../../helpers/functions';
import { Card, Col } from 'react-bootstrap'
import "./Details.css"
import ModalUpdate from '../../components/ModalUpdate/ModalUpdate';
import { useState } from 'react';
import {FaUserCircle} from "react-icons/fa"
import ModalDelete from '../../components/ModalDelete/ModalDelete';




const Details = ({currentUser,setCurrentUser,EditUser}) => {
  
  const {id} = useParams();
  
  const {blogs} = useFetch();

  
  
  const handleDelete = (Id) =>{
    setDeleteModal(true);
    setId(Id)
}
  const handleUpdate = (filteredBlog) => {
    setModalOpen(true);
    setInfoDetail(filteredBlog)
}
const [Id, setId] = useState()
const [infoDetail,setInfoDetail] = useState()
const [modalOpen, setModalOpen] = useState(false);
const [deleteModal,setDeleteModal] = useState(false)



  return(
    <div className='main'>
    
    <div className="header">
      <h1>DETAILS</h1>
    </div>

    <div>
      {blogs?.filter(blog=>blog.id === id).map(filteredBlog=>(
        <Col
              className="d-flex justify-content-center mb-4"
              key={filteredBlog.id}
            >
              <Card className="details-info">
                <Card.Img variant="top" src={filteredBlog.url} />
                <Card.Body className='card-body'>
                  <Card.Title className='title' >{filteredBlog.title}</Card.Title>
                  <Card.Text className='text-muted'>{"date"}</Card.Text>
                  <Card.Text className='text'>{filteredBlog.content}</Card.Text>
                  <Card.Text className='user'> <FaUserCircle className='icon'/>{filteredBlog.user} </Card.Text>
                </Card.Body>
                {filteredBlog.user === currentUser
                ? (
                
                  <>
                    <div>
                        <button className='update' onClick={()=>{handleUpdate(filteredBlog)}}>UPDATE</button>
                    </div>
                            {modalOpen && <ModalUpdate setOpenModal={setModalOpen}
                                    setInfoDetail={setInfoDetail}
                                    infoDetail={infoDetail} />}   
                    <div>
                      <button className='delete' onClick={()=>{handleDelete(filteredBlog.id)}}>Delete</button>
                    </div>
                        {deleteModal && <ModalDelete setDeleteModal={setDeleteModal}
                                    setId={setId}
                                    Id={Id} />}   
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