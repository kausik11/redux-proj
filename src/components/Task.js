// import { addtodo } from "../actions";
import { useDispatch } from "react-redux";
import { useRef } from "react";
import { addTodo } from "../features/todo/todoslice";

const Task = ()=>{
    const dispatch = useDispatch();
    const inputRef = useRef(null);

    function addNewTask( ) {
        const task = inputRef.current.value.trim();
        if (task !== '') {
            dispatch(addTodo(task));
            inputRef.current.value = '';
        }
    }

    return (
        <div>
            <div>
                <input type="text" placeholder="add task here" ref={inputRef}></input>

                <button onClick={addNewTask}>Add Task</button>
            </div>
        </div>
    )
}   

export default Task;