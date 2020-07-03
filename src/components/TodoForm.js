import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function TodoForm({ addTodo }) {
  // adds state to function (todo)
  const [todo, setTodo] = useState({
    id: '',
    task: '',
    completed: false,
  });

  // updates the task when the input value changes
  function handleTaskInputChange(e) {
    setTodo({ ...todo, task: e.target.value });
  }

  // adds the todo when button is clicked
  function handleSubmit(e) {
    e.preventDefault();
    if (todo.task.trim()) {
      // adds todo to the array of todos with unique id
      addTodo({ ...todo, id: uuidv4() });
      // resets task input
      setTodo({ ...todo, task: '' });
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset style={styles.fieldset}>
        <legend>Task:</legend>
        <input
          name='task'
          type='text'
          value={todo.task}
          onChange={handleTaskInputChange}
        />
        <button type='submit' style={styles.submit}>
          Submit
        </button>
      </fieldset>
    </form>
  );
}

const styles = {
  submit: {
    marginLeft: 20,
  },
  fieldset: {
      borderRadius: 10,
  }
};

export default TodoForm;
