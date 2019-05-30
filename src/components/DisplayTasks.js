import React from 'react';

const DisplayTasks = ({ tasksArray, removeTask, crossOutTask }) => { 
  return (
    <div id="orderedList">
      <ol>

        {/* Create our list items and corresponding buttons by mapping over the tasks array. The array is currently made up of objects with a title and crossedOut key. Therefore keep in mind the task prop is carrying objects, not the task title itself */}
        {tasksArray.map((task, index) => (                            
          <li onClick={ () => crossOutTask(index) } key={index} >

            {/* Check the crossedOut value of the current task object. If crossedOut is true display it crossed out, else display it uncrossed */}
            { task.crossedOut                                         
              ? <strike>{task.title}</strike> 
              : task.title }

            <button className="removeButton button is-danger is-small" onClick={ event => removeTask(event, index) } >Remove</button>
          </li>
        ))}

      </ol>
    </div>
  );
};

export default DisplayTasks;
