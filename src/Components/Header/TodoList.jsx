import React, { useState } from 'react';
import './TodoList.css';

const TodoList = ({onAddTask}) => {
  const [newTaskDescription, setNewTaskDescription] = useState('');

  const handleAddTask = () => {
    if (newTaskDescription.trim() !== '') {
      onAddTask(newTaskDescription);
      setNewTaskDescription('');
    }
  };
  return (
    <div className="todo-list-container">
      <div className="header">
        <div className="title">Todo List</div>
        <div className="add-task-container">
          <input
            type="text"
            placeholder="Nueva tarea"
            value={newTaskDescription}
            onChange={(e) => setNewTaskDescription(e.target.value)}
          />
          <button className="add-button" onClick={handleAddTask}>
            +
          </button>
        </div>
      </div>
      {/* Resto del componente */}
    </div>
  );
};

export default TodoList;
