import React from 'react';

/* InputTaskForm renders a form, and returns the input to our storeTask method. */
const InputTaskForm = ({ formValidation }) => { 
    return (                                      
      <form name="charlie" className="charlie" onSubmit={formValidation}>
        <input name="userinput" type="text" placeholder="Task..." size="35"/> 
        <button className="button is-info is-small" type="submit">Submit</button>
      </form>
    );
}

export default InputTaskForm;