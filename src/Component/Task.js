import React from 'react';
import '../App.css';

export default function Task({taskName, category}){
    return (
        <div className='task'>
         <h1>Category:{category} </h1>
         <h1>Task: {taskName}</h1>
        </div>
    )
}