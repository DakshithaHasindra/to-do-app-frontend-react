import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

    const [task, setTask] = useState<string>("");
    const [todo, setTodoList] = useState([]);

    const handleChange = () =>{

    }

  return (
    <div className="App">
        <div className="header">

                <input type="text" placeholder="Task..."/>

            <button>Add Task</button>
        </div>
        <div className="todoList"></div>
    </div>
  )
}

export default App
