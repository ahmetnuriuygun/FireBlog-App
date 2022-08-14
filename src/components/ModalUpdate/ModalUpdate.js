import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UpdateUser } from "../../helpers/functions";
import "./ModalUpdate.css";

const ModalUpdate = ({ setOpenModal,setInfoDetail,infoDetail }) => {
  console.log(infoDetail)
  const [updateTitle,setUpdateTitle] = useState()
  const [updateUrl,setUpdateUrl] = useState()
  const [updateContent,setUpdateContent] = useState()
  const navigate = useNavigate()
  const updateBlog = (id,user) =>{
    UpdateUser(id,updateTitle,updateUrl,updateContent,user,navigate)
    navigate("/")
  }




  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Are You Sure You Want to Update?</h1>
        </div>
        <div className="body">
      <form>
        <div>
          <input className='new-blog-form-box' type="text" value={updateTitle? updateTitle : setUpdateTitle(infoDetail.title)} placeholder='Title*' required onChange={(e)=>setUpdateTitle(e.target.value)} />
        </div>

        <div>
          <input className='new-blog-form-box' type="url" value={updateUrl? updateUrl : setUpdateUrl(infoDetail.url)}  name="link" id="link" placeholder='Image URL*' required onChange={(e)=>setUpdateUrl(e.target.value)} />
        </div>
        <div>
          <input className='new-blog-form-box' type="text" value={updateContent? updateContent : setUpdateContent(infoDetail.content)}  name="content" id="content" placeholder='Content*' required onChange={(e)=>setUpdateContent(e.target.value)} />
        </div>
      </form>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button onClick={()=>{updateBlog(infoDetail.id,infoDetail.user)}}>Update</button>
        </div>
      </div>
    </div>
  );
}

export default ModalUpdate;