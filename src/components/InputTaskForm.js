import React from 'react';

/* InputTaskForm renders a form, and returns the input to our storeTask method. */
const InputTaskForm = ({ formValidation }) => { 
    return (                                      
      <form name="charlie" onSubmit={formValidation}>
        <input name="userinput" type="text" placeholder="Task..." /> 
        <button type="submit">Submit</button>
      </form>
    );
}

export default InputTaskForm;