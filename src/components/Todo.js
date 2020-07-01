import React from 'react';

function Todo({ todo, toggleComplete }) {
    function handleCheckboxClick() {
        toggleComplete(todo.id);
    }

  return (
    <div style={styles.div}>
      <input type='checkbox' onClick={handleCheckboxClick} />
      <li
        style={{
          color: 'white',
          textDecoration: todo.completed ? 'line-through' : null,
        }}
      >
        {todo.task}
      </li>
      <button>X</button>
    </div>
  );
}

const styles = {
  div: {
    display: 'flex',
  },
};

export default Todo;
