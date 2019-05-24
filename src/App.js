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


/* ================================== #METHODS  ================================== */
storeTask = event => {
  event.preventDefault();
    this.setState({
      userinput: event.target.userinput.value,
      tasksarray: [...this.state.tasksarray, { title: event.target.userinput.value, strike: false } ] //create a copy of tasks array then add a new object into the array filled out with user input
    });
    document.forms["charlie"].reset();
  };


removeTask = (event, index) => {
  event.stopPropagation();                                 // prevents bubbling to strikeTask in the DisplayTask component
  
  const removedTaskArray = [...this.state.tasksarray];     // copy of tasksarray
  removedTaskArray.splice(index, 1);                       // remove index from array               
  this.setState({ tasksarray: removedTaskArray });         // replace old array
};


strikeTask = index => {
  const { tasksarray } = this.state
  const selected = tasksarray[index];

  this.setState({
    tasksarray: [                                           // setState new tasksarray: [below slice, change, after slice]
      ...tasksarray.slice(0, index),                        // create a copy of the array, below index
      Object.assign(selected, {strike: !selected.strike}),  // invert the selected line's strike value
      ...tasksarray.slice(index + 1)                        // create a copy of the array, after index
    ]
  });
};


componentDidUpdate() {
  console.log(this.state.tasksarray);                       // debugging :) 
}


/* =================================== #RENDER  ================================== */

  render() { 
    const { tasksarray } = this.state
    const { storeTask }  = this
    const { removeTask } = this
    const { strikeTask } = this

    return (
      <div>
        <InputTaskForm 
          task={storeTask} />

        <DisplayTasks 
          tasks={tasksarray} 
          removeTask={removeTask} 
          strikeTask={strikeTask} />
      </div>
      );
    };
};





/* =================================== EXPORT =================================== */
export default App;