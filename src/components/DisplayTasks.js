import React from 'react';

const DisplayTasks = ({ tasks, removeTask, strikeTask }) => {
  return (
    <div id="orderedList">
      <ol>
        {tasks.map((task, index) => (
          <li onClick={() => strikeTask(index)} key={index} >
            {task.strike ? <strike>{task.title}</strike> : task.title}
            <button id="removeButton" onClick={event => removeTask(event, index)} >Remove</button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default DisplayTasks;
