import React from 'react'

export default function TodoList(props) {
  console.log(props.taskName);
  return (
        <div className="task" style={{ backgroundColor : props.completed ? "green" : "white"}}>
            <h1>{props.taskName}</h1>
            <button onClick={() => props.deleteHandler(props.id)}>X</button>
            <button onClick={() => props.completedHanlder(props.id)}>Completed</button>
        </div>
  )
}
