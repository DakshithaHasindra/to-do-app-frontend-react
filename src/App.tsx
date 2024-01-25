import {ChangeEvent, useEffect, useRef, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Task} from "./Interface.ts";
import TodoTask from "./components/todo-task/TodoTask.tsx";
import {deleteTaskFromServer, getAllTasks, saveTask, updateStatusInServer} from "./service/services.ts";

function App() {

    const initialized = useRef(false);

    useEffect(()=>{
        getAllTasks()
            .then(taskList =>{
                // taskList.map(task =>{
                //     console.log(task._id);
                // })
                setTodoList(taskList);
            })
            .catch(err =>{
                console.log(err);
            })
    },[]);


    const [task, setTask] = useState<string>("");
    const [todoList, setTodoList] = useState<Task[]>([]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        if(event.target.name === "task"){
            setTask(event.target.value);
            // console.log(task);
        }
    }

    const addTask = function addTask(){
        const newTask = new Task(task, false);
        saveTask(newTask)
            .then(task =>{
                setTodoList([...todoList,task ]);
                setTask("");
                console.log(task);
                alert("Task Saved")
            })
            .catch(err=>{
                console.log(err);
                alert("Something went wrong")
            })

    }

    const deleteTask = function deleteTask(task_idToDelete: string){
        deleteTaskFromServer(task_idToDelete)
            .then(()=>{
                setTodoList(todoList.filter((task) =>{
                    // return task.description != task_idToDelete;
                    return task._id != task_idToDelete;
                }));
            })
            .catch(err =>{
                console.log(err);
            })


    }


    const updateStatus = function updateStatus(task:Task):boolean{
        task.status = !task.status;
        updateStatusInServer(task)
            .then(success =>{
                console.log(success);
                if(!success){
                    task.status = !task.status;

                }
            })
            .catch(err=>{
                console.log(err)
            })
        console.log(task.status);
        return task.status;
    }



    return (
        <div className="App">
            <div className="header">

                <input type="text" placeholder="Task..." name="task" value={task} onChange={handleChange}/>

                <button type="button" onClick={addTask} >Add Task</button>
            </div>

            <div className="todoList">
                {todoList.map((task :Task,  key:number)=>{
                    return <TodoTask key={key} task={task} deleteTask={deleteTask} updateStatus={updateStatus}/>;
                })}
            </div>

        </div>
    )
}

export default App
