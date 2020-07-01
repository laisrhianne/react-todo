import React, { useState } from 'react'
import uuid from 'uuid';

function TodoForm({ addTodo }) {
    const [todo, setTodo] = useState({
        id: '',
        task: '',
        completed: false,
    })

    // updates the task when the input value changes
    function handleTaskInputChange(e) {
        setTodo({...todo, task: e.target.value })
    }

    function handleSubmit(e){
        e.preventDefault();
        if (todo.task.trim()) {
            // adds todo to the array of todos
            addTodo({...todo, id: uuid.v4() });
            // resets task input
            setTodo({...todo, task: '' });
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                name='task'
                type='text'
                value={todo.task}
                onChange={handleTaskInputChange}
            />
            <button type='submit' />
        </form>
    )
}

export default TodoForm;