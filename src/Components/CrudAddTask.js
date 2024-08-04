import React, { useContext } from 'react'
import TodoList from './TodoList';
import '../App.css'
import { AppContext } from '../App';

export default function CrudAddTask() {
    const {toDoList, newTask, setToDoList, setNewTask} = useContext(AppContext);

    const handleChange = (event) => {
        setNewTask(event.target.value);
    }

    const addTask = () => {
        const task = {
            id: toDoList.length === 0 ? 1 : toDoList[toDoList.length - 1].id + 1,
            taskName: newTask,
            completed: false,
        }
        setToDoList(task.taskName !== "" ? [...toDoList, task] : toDoList);
    }

    const deleteHandler = (id) => {
        setToDoList(toDoList.filter((task) => task.id !== id));
    }

    const completedHanlder = (id) => {
        setToDoList(
            toDoList.map((task) => {
                if(task.id === id){
                    console.log("Green");
                    return {...task, completed: true};
                } else {
                    return task;
                }

            })
        )
    }

  return (
    <div className="App">
        <div className="addTask">
            <input placeholder='Enter Task' onChange={handleChange}/>
            <button onClick={addTask}>Add Task</button>
        </div>
        <div className="list">
            {toDoList.map((task) => {
                return <TodoList taskName={task.taskName} id={task.id} deleteHandler={deleteHandler} completedHanlder={completedHanlder} completed={task.completed}/>
            })}
        </div>    
    </div>
  )
}
