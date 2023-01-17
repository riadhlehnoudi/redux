import React, { useState } from 'react'
import {Button ,Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { updateTask } from '../redux/todoslice/Todoslice';
const EditTask = ({id}) => {
    const [show, setShow] = useState(false);
    const dispatch =useDispatch()

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [edited, setedited] = useState({
title:"",
description:"",
    });
  return (
    <div>
        <Button variant="primary" onClick={handleShow}>
    EditTask
  </Button>

  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton></Modal.Header>
      
    <Modal.Body className='inps'>
        <input type='text' placeholder='enter task title' 
      onChange={(e)=>{
        setedited({ ...edited,title:e.target.value});
      }}/>
      <input type='text'  placeholder='enter task title'  onChange={(e)=>{
        setedited({...edited,description:e.target.value});
      }}/>

        </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary" onClick={()=>{
        handleClose();
        dispatch(EditTask({id:id,edited}))
      }}>
        Save Changes
      </Button>
    </Modal.Footer>
  </Modal>
  </div>
  )
}

export default EditTask