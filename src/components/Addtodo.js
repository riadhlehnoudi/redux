import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addtask, addTask } from '../redux/todoslice/Todoslice';

const Addtodo = () => {
  const dispatch = useDispatch();
   const [task, setTask] = useState({
    id:Math.random(),
    title:"",
    description:"",
    isDone:false,
  });
  return (
    <div className='add-task'>
      <input type='text' placeholder='enter task title' 
      onChange={(e)=>{
        setTask({ ...task,title:e.target.value});
      }}/>
      <input type='text'  placeholder='enter task title'  onChange={(e)=>{
        setTask({...task,description:e.target.value});
      }}
        />
      <button
      onClick={()=>dispatch(addtask(task))}>add new task</button>

    </div>
  )
}

export default Addtodo