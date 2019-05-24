import React, { Component } from 'react';
import InputTaskForm from './components/InputTaskForm';
import DisplayTasks from './components/DisplayTasks';

class App extends Component {
  constructor() {
    super()
    this.state = {
      userinput: '',
      tasksarray: [],                               
    }
  }


/* ================================== #FUNCTIONS ================================== 
=================================================================================== */

formValidation = event => {                                 // event prop passed from InputTaskForm component
  event.preventDefault();                                   // prevent form from auto-refreshing on submit
  const userInput = event.target.userinput.value            // userInput stored
  
  if (userInput.trim().length < 1) {                        // trim (remove) prefixed and affixed spaces, then check length
    alert(`Error: invalid submission`)
  } else {
    this.storeTask(event, userInput);
  };
};


storeTask = (event, userInput) => {                         // props passed from formValidation function
    this.setState({
      userinput: userInput,
      tasksarray: [...this.state.tasksarray, { title: userInput, strike: false } ] //create a copy of tasks array then add a new object into the array filled out with user input
    });
    document.forms["charlie"].reset();
  };


removeTask = (event, index) => {                           // props passed from DisplayTasks component
  event.stopPropagation();                                 // prevents bubbling to strikeTask in the DisplayTask component
  
  const removedTaskArray = [...this.state.tasksarray];     // copy of tasksarray
  removedTaskArray.splice(index, 1);                       // remove index from array               
  this.setState({ tasksarray: removedTaskArray });         // replace old array
};


strikeTask = index => {                                    // index prop passed from DisplayTasks component
  const { tasksarray } = this.state
  const selected = tasksarray[index];

  this.setState({                                           
    tasksarray: [                                           // change taskarray state to: [prior slice, change, after slice]
      ...tasksarray.slice(0, index),                        // slice off (copies) of array elements prior to index element
      Object.assign(selected, {strike: !selected.strike}),  // invert the selected line's strike value
      ...tasksarray.slice(index + 1)                        // slice off (copies) of array elements after index element
    ]
  });
};


componentDidUpdate() {
  console.log(this.state.tasksarray);                       // debugging :) 
};


/* ================================== #RENDER ===================================== 
=================================================================================== */

  render() { 
    const { tasksarray } = this.state
    const { formValidation } = this
    const { storeTask }  = this
    const { removeTask } = this
    const { strikeTask } = this

    return (
      <div>
        <InputTaskForm 
          task={storeTask}
          formValidation={formValidation} />


        <DisplayTasks 
          tasks={tasksarray} 
          removeTask={removeTask} 
          strikeTask={strikeTask} />
      </div>
      );
    };
};





/* ================================== #EXPORT ===================================== 
=================================================================================== */
export default App;