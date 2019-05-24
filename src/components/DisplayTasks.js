import React from 'react';

const DisplayTasks = ({ tasks, removeTask, strikeTask }) => {
  return (
    <ol>
      {tasks.map((task, index) => (
        <li 
          key = {index} 
          onClick = {() => strikeTask(index)} 
          style = {{ cursor: "pointer" }} > 

          {task.strike ? <strike>{task.title}</strike> : task.title}

          <button 
            onClick = {event => removeTask(event, index)} 
            style = {{ marginLeft: "10px", cursor: "pointer" }} > Remove
          </button>

        </li>
      ))}
    </ol>
  );
};

export default DisplayTasks;
