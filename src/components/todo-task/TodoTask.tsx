import React  from "react";
import {Task} from "../../Interface.ts";
import './TodoTask.css';

interface Props{
    task: Task;
    deleteTask(taskNameToDelete:string): void;
}

const TodoTask =({task, deleteTask}:Props) =>{
    return(
        <div className="task">
            <div className="content">
                <span>{task.taskDescription}</span>
            </div>
            <div>
                <input className="status" type="checkbox"/>
                <button>Edit</button>
                <button onClick={()=>{deleteTask(task.taskDescription)}}>Delete</button>
            </div>
        </div>

    )
}

export default TodoTask;