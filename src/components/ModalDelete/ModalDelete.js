import React from 'react'
import { useNavigate } from 'react-router-dom'
import { DeleteBlog } from '../../helpers/functions'
import "./ModalDelete.css" 

const ModalDelete = ({setDeleteModal,setId,Id}) => {
const navigate = useNavigate()
console.log(Id)

const delBlog = (id) =>{
    DeleteBlog(id,navigate)
    

}


  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setDeleteModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Are You Sure You Want to Delete?</h1>
        </div>
        
       
        <div className="footer">
          <button
            onClick={() => {
              setDeleteModal(false);
            }}
            id="cancelBtn"
          >
            CANCEL
          </button>
          <button onClick={()=>{delBlog(Id)}}>DELETE</button>
        </div>
      </div>
    </div>
  )
}

export default ModalDelete