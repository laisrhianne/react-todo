import React, { useEffect, useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem('todos-list'));
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);

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
        <h1 style={styles.title}>React Todo</h1>
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
