/* ================================ IMPORT ================================ */
import React, { Component } from 'react';
import GetTask from './components/GetTask';
import DisplayTasks from './components/DisplayTasks';


/*  ================================= CODE SUMMARY ====================================
1. GetTask renders a form, and returns the input to our InputTask method.
2. Our inputTask method takes those inputs and stores them in state.
3. DisplayTasks then maps each input in the tasksarray state into an html list.
======================================================================================= */


/* =================================== STATE =================================== 
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

  
/* ================================== METHODS ================================== 
    - event.preventDefault(); stops the form from refreshing
    - both setState functions update our state via user input returned from the GetTask 
       component
    - document.forms['charlie'].reset() resets the form after the user submits a task.
   ============================================================================= */
  inputTask = event => {
    event.preventDefault(); 
    this.setState({ userinput: event.target.userinput.value })
    this.setState({
      tasksarray: this.state.tasksarray.concat(' ' + event.target.userinput.value)
    })
    document.forms['charlie'].reset()
    }


/* ================================ COMPONENTS  ================================ 
  - const { tasksarray } = this.state  is to destructure tasksarray (so we 
     no longer have to prefix this.state to it when we want to use it)
  - GetTask renders a form, and returns the input to our InputTask method.
  - DisplayTasks maps each input in the tasksarray state into an html list.
   ============================================================================= */
  render() { 
    const { tasksarray } = this.state;
    return (
      <div>
        <GetTask task={this.inputTask} />
        <DisplayTasks tasks={tasksarray} />
      </div>
      );
    }
}


/* =================================== EXPORT =================================== */
export default App;




