import React from 'react';

/* DisplayTasks maps each input in the tasksarray state into an html list. */
const DisplayTasks = ({ tasks }) => { 
  return (
    <ol> 
      {tasks.map((task, index) => 
        <li key={index}> {task} </li>)}
    </ol>
    )
}

export default DisplayTasks;