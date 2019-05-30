import React, { Component } from 'react';
import InputTaskForm from './components/InputTaskForm';
import DisplayTasks from './components/DisplayTasks';
import './App.css';

class App extends Component {
  state = {
    userinput: '',
    tasksarray: [],                               
  }


/* ============================================== #FUNCTIONS ============================================== 
=========================================================================================================== */
formValidation = event => {                                       // event prop passed from InputTaskForm component
  event.preventDefault();                                         // prevent form from auto-refreshing on submit
  const userInput = event.target.userinput.value                  // userInput stored
  const userInputIsBlank = userInput.trim().length < 1            // trim (remove) prefixed and affixed spaces, then check length

  userInputIsBlank 
    ? alert(`Error: invalid submission`) 
    : this.storeTask(userInput);
};

storeTask = userInput => {                                         // userInput passed from formValidation function
    this.setState({
      userinput: userInput,
      tasksarray: [...this.state.tasksarray, { title: userInput, crossedOut: false } ] //create a copy of tasks array then add a new object into the array filled out with user input
    });
    document.forms["charlie"].reset();                             // reset input field after submission
};


removeTask = (event, index) => {                                    // props passed from DisplayTasks component
  event.stopPropagation();                                          // prevents bubbling to crossOutTask in the DisplayTask component
  const removedTaskArray = [...this.state.tasksarray];              //removedTaskArray is just a copy of our current array for the moment
 
  removedTaskArray.splice(index, 1);                                //here removedTaskArray actually becomes an array w/ the removed task (removed with splice)                 
  this.setState({ tasksarray: removedTaskArray });   
};


crossOutTask = index => {                                           // index prop passed from DisplayTasks component
  const { tasksarray } = this.state
  const selected = tasksarray[index];

  this.setState({                                           
    tasksarray: [                                                   // change tasksarray state to: [prior slice, change, after slice]
      ...tasksarray.slice(0, index),                                // slice off (copies) of array elements prior to index element
      Object.assign(selected, {crossedOut: !selected.crossedOut}),  // invert the selected line's crossedOut value
      ...tasksarray.slice(index + 1)                                // slice off (copies) of array elements after index element
    ]
  });
};


componentDidUpdate() {
  console.log(this.state.tasksarray);                               // debugging :) 
};


/* =============================================== #RENDER ================================================ 
=========================================================================================================== */
  render() { 
    const { tasksarray } = this.state
    const { formValidation, storeTask, removeTask, crossOutTask } = this

    return (
      <div className="overall-grid-container">
        <div className="input-tasks-grid-container box">
          <h1 className="title is-4">Task Submission Box</h1>

          <InputTaskForm 
            task={storeTask}
            formValidation={formValidation} />
          </div>
        
        <div className="tasks-grid-container">
          <h1 className="tasks-title title is-4">Tasks </h1>
          <h1 className="tip-text Tasks-title subtitle is-6">Tip: click on a task to mark it as done</h1>

            <DisplayTasks 
              tasksArray={tasksarray} 
              removeTask={removeTask} 
              crossOutTask={crossOutTask} />
        </div>
      </div>
      );
    };
};


/* ================================================ #EXPORT =============================================== 
=========================================================================================================== */
export default App;