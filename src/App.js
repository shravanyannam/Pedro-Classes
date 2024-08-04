import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import ExcusesAPI from './Components/ExcusesAPI';
import CrudAddTask from './Components/CrudAddTask';
import FetchData from './Components/FetchData';
// import { useReducer } from 'react';
// import UseMemoHook from './UseMemoHook';
import UseStateHook from './Components/UseStateHook';
import { createContext, useState } from 'react';
import { UseReducerExample } from './Components/UseReducerExample';
import UseRefEx from './Components/UseRefEx';

export const AppContext = createContext();

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [newTask, setNewTask] = useState("");
  // const reducer = (state,action) => {
  //   switch(action.type){
  //     case "INCREAMENT": 
  //       return {count: state.count + 1, showText: state.showText};
  //     case "toggleShowText":
  //       return {count: state.count, showText: !state.showText};
  //     default: 
  //       return state;     
  //   }
  // }
  // const [state, dispatch] = useReducer(reducer , {count: 0, showText: false});

  return (
    <div className="App">
      <AppContext.Provider value={{toDoList, newTask, setToDoList, setNewTask}}>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<UseStateHook />}/>
            <Route path="/fetchdata" element={<FetchData />}/>
            <Route path="/excuseapi" element={<ExcusesAPI />}/>
            <Route path="/crudaddtask" element={<CrudAddTask />}/>
            <Route path="/increaseanddisplay" element={<UseReducerExample />}/>
            <Route path='/inputtext' element={<UseRefEx />}/>
          </Routes>
        </Router>
      </AppContext.Provider>
      {/* <h1>{state.count}</h1>
      <button onClick={() => {
        dispatch({type: "INCREAMENT"});
        dispatch({type: "toggleShowText"})
      }}>
        Click Here
      </button>
      {state.showText && <h1>This is Text</h1>}
      <UseMemoHook/> */}
    </div>
  );
}

export default App;
