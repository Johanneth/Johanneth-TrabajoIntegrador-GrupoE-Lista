
import React, { useState } from 'react';
import './TaskForm.css';

const TaskForm = ({ onAddTask }) => {
  const [newTaskDescription, setNewTaskDescription] = useState('');

  const handleButtonClick = () => {
    if (newTaskDescription.trim() !== '') {
      onAddTask(newTaskDescription);
      setNewTaskDescription('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('tasks', newTaskDescription );
    setNewTaskDescription('');
    onAddTask(newTaskDescription)
    };

  return (
    <div className="todo-list-container">
     <div className="header">
      <div className="title">Todo List</div>
        <div className="add-button-container">
        </div>
      </div>
    </div>
  );
};

export default TaskForm;