import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div>
        <Link to="/" style={{padding: "15px"}}>Use State Hook</Link>
        <Link to="/fetchdata" style={{padding: "15px"}}>Fetch Data</Link>
        <Link to="/excuseapi" style={{padding: "15px"}}>Excuse API</Link>
        <Link to="/crudaddtask" style={{padding: "15px"}}>Crud Add Task</Link>
        <Link to="/increaseanddisplay" style={{padding: "15px"}}>Increase And Display</Link>
        <Link to="/inputtext" style={{padding: "15px"}}>Input Text</Link>
    </div>
  )
}
