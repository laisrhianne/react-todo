import React, { useEffect, useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  // add state to the function (todo)
  const [todos, setTodos] = useState([]);

  // retrieves saved todos from local storage
  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem('todos-list'));
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);

  // saves the todos in local storage everytime 'todos' changes
  useEffect(() => {
    localStorage.setItem('todos-list', JSON.stringify(todos));
  }, [todos]);

  function addTodo(todo) {
    setTodos([todo, ...todos]);
  }

  function toggleComplete(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 style={styles.title}>To-do List</h1>
        <TodoForm addTodo={addTodo} />
        <TodoList 
          todos={todos} 
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
        />
      </header>
    </div>
  );
}

const styles = {
  title: {
    padding: 16,
  }
}

export default App;
