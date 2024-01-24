import {ChangeEvent, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Task} from "./Interface.ts";
import TodoTask from "./components/todo-task/TodoTask.tsx";

function App() {

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
        setTodoList([...todoList,newTask ]);
        setTask("");
        console.log(task);
        console.log(todoList);
        console.log(todoList.length);
    }

    const deleteTask = function deleteTask(taskDescriptionToDelete: string){
        setTodoList(todoList.filter((task) =>{
            return task.taskDescription != taskDescriptionToDelete;
        }));
    }

    return (
        <div className="App">
            <div className="header">

                <input type="text" placeholder="Task..." name="task" value={task} onChange={handleChange}/>

                <button type="button" onClick={addTask} >Add Task</button>
            </div>

            <div className="todoList">
                {todoList.map((task :Task,  key:number)=>{
                    return <TodoTask key={key} task={task} deleteTask={deleteTask}/>;
                })}
            </div>

        </div>
    )
}

export default App
