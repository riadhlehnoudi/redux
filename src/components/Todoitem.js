import React from 'react'
import { useDispatch } from 'react-redux'
import { doneTask, removeTask, todoSlice } from '../redux/todoslice/Todoslice'
import EditTask from './EditTask'

const Todoitem = ({todo}) => {
  const dispatch = useDispatch()
  return (
    <div className={`todo-item ${todo.isDone? "done":"undone"} `}>
        <h2>{todo.title}</h2>
        <p>{todo.description}</p>
        <span onClick={()=>{dispatch(doneTask({id:todo.id}))}}>{todo.isDone?"Done" : "Not Done"}</span>
        <EditTask id={todo.id}/>
        <button onClick={()=>{dispatch(removeTask({id:todo.id}))}}>remove</button>
            </div>
            
  )
}

export default Todoitem;