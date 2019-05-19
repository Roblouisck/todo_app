import React from 'react';

/* GetTask renders a form, and returns the input to our InputTask method. */
const GetTask = ({ task }) => { 
    return (                                      
      <form name="charlie" onSubmit={task}>
        <input name="userinput" type="text"/> 
        <button type="submit">Submit</button>
      </form>
    );
}

export default GetTask;