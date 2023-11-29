
import React, { useState } from 'react';
import './TaskForm.css';

const TaskForm = ({ onAddTask }) => {
  const [newTaskDescription, setNewTaskDescription] = useState('');

  const handleButtonClick = () => {
    // Verificar que haya una descripción antes de agregar la tarea
    if (newTaskDescription.trim() !== '') {
      onAddTask(newTaskDescription);
      setNewTaskDescription('');
    }
  };

  //Para guardar en el Local Storage del navegador el valor.
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
         <button className="add-button" onClick={handleButtonClick}>
           +
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskForm;