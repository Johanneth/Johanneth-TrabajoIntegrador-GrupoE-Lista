
import React, { useState } from 'react';
import './TaskForm.css';

const TaskForm = ({ onAddTask }) => {
  const [newTaskDescription, setNewTaskDescription] = useState('');
  const [isInputVisible, setIsInputVisible] = useState(false);

  const handleButtonClick = () => {
    setIsInputVisible(true);
  };

  const handleInputChange = (e) => {
    setNewTaskDescription(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleButtonClick();
    }
  };

  const handleAddTask = () => {
    if (newTaskDescription.trim() !== '') {
      onAddTask(newTaskDescription);
      setNewTaskDescription('');
      setIsInputVisible(false); // Oculta el input después de agregar la tarea
    }
    };


  return (
    <div className="todo-list-container">
     <div className="header">
      <div className="title">Todo List</div>
        <div className="add-button-container">
         <button className="add-button" onClick={handleButtonClick}>
           +
          </button>
        </div>
      </div>
      {isInputVisible && (
        <div className='inputTask'>
      <input
        type="text"
        placeholder="New Task..."
        value={newTaskDescription}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <button className='btnAdd' onClick={handleAddTask}>Add Task</button>
    </div>
  )}
  </div>
);
};

export default TaskForm;