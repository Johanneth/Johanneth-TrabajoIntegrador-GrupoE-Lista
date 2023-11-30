import React, { useState } from 'react';
import './TaskList.css';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onTaskComplete, onDeleteTask, onEditTask, onSaveEdit, onAddTask, deleteButtonEnabled }) => {
  const [newTaskDescription, setNewTaskDescription] = useState('');
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);

  const handleInputChange = (e) => {
    setNewTaskDescription(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onAddTask(newTaskDescription);
      setNewTaskDescription('');
    }
  };

  const handleDeleteConfirmation = (taskId) => {
    setTaskToDelete(taskId);
    setShowDeleteConfirmation(true);
  };

  const handleConfirmDelete = () => {
    onDeleteTask(taskToDelete);
    setTaskToDelete(null);
    setShowDeleteConfirmation(false);
  };
  


  return (
     <div className="task-list-container">
      <div className='vertical-line'></div>
       <div className="vertical-line-new"></div>
        <div className="folder-sheet">
         <div className="empty-row"></div>
          {tasks.map((task) => (
           <TaskItem
            key={task.id}
            task={task}
            onTaskComplete={onTaskComplete}
            onDeleteTask={onDeleteTask}
            onEditTask={onEditTask}
            onSaveEdit={onSaveEdit}
            onDeleteConfirmation={handleDeleteConfirmation}
           />
        ))}
        {/* Nuevo input para agregar tarea al final de la lista */}
        <div className="new-task-input-bottom">
         {/* Eliminado el código del botón de eliminar tareas completadas */}
         </div>
      </div>
      {showDeleteConfirmation && (
        <div className="delete-confirmation">
          <p>¿Desea eliminar la tarea?</p>
          <button onClick={handleConfirmDelete}>Sí</button>
          <button onClick={() => setShowDeleteConfirmation(false)}>No</button>
        </div>
      )}
    </div>
  );
};


export default TaskList;
