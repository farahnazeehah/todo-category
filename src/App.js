// ref: https://www.youtube.com/watch?v=-l0FEONO-cM
// ref: https://www.youtube.com/watch?v=k195rHv8N-0 (CURRENT)
import './App.css';
import React, { useState } from 'react';
import {library} from '@fortawesome/fontawesome-svg-core'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import {faCirclePlus} from '@fortawesome/free-solid-svg-icons'
import Task from './Component/Task.js';

library.add(faTrash);
library.add(faCirclePlus);

function App() {

  const [taskName, setTaskName] = useState("  ");
  const [catName, setCatName] = useState("  ");
  const [taskList, setTaskList] = useState([]);

  //ES6
  const addTask = () =>{
 // setTaskList ([...(taskList=currentvalue), {task(property): taskName(value), category: catName}])
    setTaskList ([...taskList, {task: taskName, category: catName}])
    setTaskName('')
    setCatName('')
  }

  return (
    <div className='App'>

      <h3 style={{ 
        color: 'black', 
        lineHeight : 4, 
        padding: 5,
        fontSize:20 }}>
        To Do List By Category
      </h3>

      <br/>

      <input 
        id='input-category'
        type='text'
        placeholder='Add new category'
        onChange={(e) => {
          setCatName(e.target.value)
        }}
      />

      <input 
        id='input-task'
        type='text'
        placeholder='Add new task'
        onChange={(e) => {
          setTaskName(e.target.value)
        }}
      />
      <button className='add-btn'onClick={addTask}>
       Add   
      </button>

      <br/>

      {taskList.map((task) => {
        return <Task taskName={task.task} category={task.category}/>
      })}
    </div>
  );
}

export default App;