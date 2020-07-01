import React from 'react';

function Todo({ todo, toggleComplete, removeTodo }) {
  function handleCheckboxClick() {
    toggleComplete(todo.id);
  }

  function handleRemoveClick() {
    removeTodo(todo.id);
  }

  return (
    <div style={styles.container}>
      <input type='checkbox' onClick={handleCheckboxClick} />
      <li
        style={{
          color: 'white',
          textDecoration: todo.completed ? 'line-through' : null,
          listStyle: 'none',
          marginLeft: 15,
        }}
      >
        {todo.task}
      </li>

      <img
        onClick={handleRemoveClick}
        src='https://img.icons8.com/fluent/48/000000/close-window.png'
        style={styles.remove}
        alt='Remove'
      />
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  remove: {
    display: 'block',
    marginLeft: 20,
    height: 35,
    width: 35,
    justifyContent: 'center',
  },
};

export default Todo;
