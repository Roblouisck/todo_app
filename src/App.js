/* ==================================== #IMPORT ==================================== */
import React, { Component } from 'react';
import InputTaskForm from './components/InputTaskForm';
import DisplayTasks from './components/DisplayTasks';





/*  ================================= CODE SUMMARY ====================================

1. InputTaskForm renders a form, and returns the input to our storeTask method.
2. Our storeTask method takes those inputs and stores them in state.
3. DisplayTasks then maps each input in the tasksarray state into an html list.
4. Our removeTask method is fed an index (via our DisplayTasks component) corresponding 
   to the list item we want deleted. It creates a new array without that list item, and 
   replaces our current array (in state).
5. Because setting a new state runs render() again our DisplayTasks component is updated with 
   our new state. 

======================================================================================= */






/* =================================== #STATE ================================== 
    -Text input from users is stored in the userinput state
    -That input is also stored as array items in tasksarray
   ============================================================================= */
class App extends Component {
  constructor() {
    super()
    this.state = {
      userinput: '',
      tasksarray: []                                   
    }
  }
  




/* =================================================================================
                                      #METHODS 
   ================================================================================= */
/* ================================== #STORE TASK ================================== 
    - event.preventDefault(); stops the form from refreshing
    - The setState function updates our states via user input returned from the InputTaskForm 
         component
    - document.forms['charlie'].reset() resets the form after the user submits a task.
   ============================================================================= */
  storeTask = event => {
    event.preventDefault(); 
    this.setState ({ 
      userinput: event.target.userinput.value, 
      tasksarray: this.state.tasksarray.concat(' ' + event.target.userinput.value) 
    })
    document.forms['charlie'].reset()
    }


/* ================================== #REMOVE TASK ================================== 
    - use the spread operator to copy the state of our tasksarray into a new array.
    - use the index returned from our onClick event to identify which item to remove.
    - remove the item from our new array via splice then replace our old array using setState.
   ============================================================================= */
  removeTask = index => {
    const removedTasksArray = [...this.state.tasksarray];
    removedTasksArray.splice(index, 1)
    this.setState ({tasksarray: removedTasksArray})
  }





/* ================================ #COMPONENTS  ================================ 
  - const { tasksarray } = this.state  is to destructure tasksarray (so we 
     no longer have to prefix this.state to it when we want to use it)
  - InputTaskForm renders a form, and returns the input to our storeTask method.
  - DisplayTasks maps each input in the tasksarray state into an html list.
   ============================================================================= */
  render() { 
    const { tasksarray } = this.state;
    return (
      <div>
        <InputTaskForm task={this.storeTask} />
        <DisplayTasks tasks={tasksarray} removeTask={this.removeTask}/>
      </div>
      );
    }
}





/* =================================== EXPORT =================================== */
export default App;




