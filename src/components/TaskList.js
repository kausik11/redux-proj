import { useSelector,useDispatch } from "react-redux";
import { deletetodo } from "../actions";
import React from 'react'

const TaskList = () => {
    const task = useSelector((state)=>state.task);
    const dispatch = useDispatch();
   //console.log(task)
    const handleData = (id)=>{
        dispatch(deletetodo(id))
    }
  return (
    <div>
      <div>
        <h3>Your listed task:</h3>
        <ul>{
            task.task.map((task)=>(
                <li key={task.id}>
                {task.text}
                <button onClick={()=>handleData(task.id)}>delete</button>
                </li>
            )
            )
        }</ul>
      </div>
    </div>
  )
}

export default TaskList
