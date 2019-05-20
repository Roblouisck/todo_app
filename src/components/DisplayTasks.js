import React from 'react';

/* 
  -Tasks is standing in for our tasksarray state. tasks.map is saying to go through the tasks in that array and execute our code block nested underneath for each task. 

  -For each task in the array it will:
    1. Create a list element  with a key correspeonding to that elements number in the array (index)
    2. Put the current task being iterated over between the list tags
    3. Attach a button to each list element that will run our removeTask method on click.

  Note: The index paramter of removeTask(index) is set when DisplayTask is run (not when the user clicks), and has nothing to do with the list key. 
*/

const DisplayTasks = ({ tasks, removeTask }) => { 
  return (
    <ol> 
      {tasks.map((task, index) => 
        <li key={index}> {task} 
        <button style={{ marginLeft: '10px' }} onClick={() => removeTask(index)}>Remove</button>
        </li>)}
    </ol>
    )
}

export default DisplayTasks;
