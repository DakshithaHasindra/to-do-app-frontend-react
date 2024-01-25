import React, {useState} from "react";
import {Task} from "../../Interface.ts";
import './TodoTask.css';

interface Props{
    task: Task;
    deleteTask(taskNameToDelete:string): void;
    updateStatus(task:Task):boolean;
}

const TodoTask =({task, deleteTask, updateStatus}:Props) =>{
    const [checked, setChecked] = useState<boolean>(task.status);

    return(
        <div className="task">
            <div className="content">
                <span>{task.description}</span>
            </div>
            <div>
                <input className="status" type="checkbox" checked={checked} onChange={(e)=>{
                    // task.status = !task.status;
                    let status = updateStatus(task);
                    setChecked(status);
                   }}/>
                <button>Edit</button>
                <button onClick={()=>{deleteTask(task._id)}}>Delete</button>
            </div>
        </div>

    )
}

export default TodoTask;