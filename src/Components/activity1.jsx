import React, { useState, useEffect, useRef, useReducer } from 'react';

// Initial state and reducer function for useReducer
const initialState = { tasks: [] };

function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return { tasks: [...state.tasks, action.task] }; // Use action.task instead of action.payload
    case 'remove':
      return { tasks: state.tasks.filter((task, index) => index !== action.index) }; // Use action.index instead of action.payload
    case 'reset':
      return initialState;
    default:
      throw new Error();
  }
}

function TodoList() {
  const [task, setTask] = useState(''); // useState for task input
  const [state, dispatch] = useReducer(reducer, initialState); // useReducer for task management
  const inputRef = useRef(); // useRef for input field

  useEffect(() => {
    // Focus on the input field when the component mounts
    inputRef.current.focus();
  }, []);

  const handleAddTask = () => {
    if (task.trim()) {
      dispatch({ type: 'add', task }); // Directly include task in the action object
      setTask('');
    }
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        ref={inputRef}
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a new task"
      />
      <button onClick={handleAddTask}>Add Task</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset List</button>
      <ul>
        {state.tasks.map((task, index) => (
          <li key={index}>
            {task} <button onClick={() => dispatch({ type: 'remove', index })}>Remove</button> {/* Use action.index */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
