import React from 'react';

/* InputTaskForm renders a form, and returns the input to our storeTask method. */
const InputTaskForm = ({ task }) => { 
    return (                                      
      <form name="charlie" onSubmit={task}>
        <input name="userinput" type="text"/> 
        <button type="submit">Submit</button>
      </form>
    );
}

export default InputTaskForm;