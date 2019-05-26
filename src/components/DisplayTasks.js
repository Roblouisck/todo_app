import React from 'react';

const DisplayTasks = ({ tasksArray, removeTask, crossOutTask }) => { 
  return (
    <div id="orderedList">
      <ol>
        {tasksArray.map((task, index) => (
          <li onClick={ () => crossOutTask(index) } key={index} >

            { task.crossedOut 
              ? <strike>{task.title}</strike> 
              : task.title }

            <button className="removeButton" onClick={ event => removeTask(event, index) } >
              Remove
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default DisplayTasks;
