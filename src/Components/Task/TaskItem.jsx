import React, { useState, useEffect } from 'react';
import './TaskItem.css'

const TaskItem = ({ task, onTaskComplete, onDeleteTask, onEditTask, onDeleteConfirmation }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(task.description);
  const [blockClick, setBlockClick] = useState(false);
  const [isChecked, setIsChecked] = useState(task.completed);
  const [isDeleteVisible, setIsDeleteVisible] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  useEffect(() => {
    // Actualizar el estado isChecked cuando cambia la propiedad task.completed
    setIsChecked(task.completed);
  }, [task.completed]);

  const handleComplete = () => {
    if (!blockClick) {
      const newCheckedState = isChecked === null ? true : !isChecked;
      onTaskComplete(task.id, newCheckedState);
      // Mostrar el mensaje de confirmación solo cuando se completa la tarea
      if (newCheckedState) {
        onDeleteConfirmation(task.id);
      }
    }
  };

  const handleDoubleClick = () => {
    // Si la tarea está marcada como completada y la cruz roja está visible, mostrar mensaje de confirmación
    if (isChecked && isDeleteVisible) {
      setShowDeleteConfirmation(true);
    }
  };

  const handleDeleteConfirmation = () => {
    setIsDeleteVisible(true);
  };

  const handleConfirmDelete = () => {
    onDeleteTask(task.id);
    setShowDeleteConfirmation(false);
  };

  const handleEdit = () => {
    if (!blockClick) {
      setIsEditing(true);
      setEditedDescription(task.description);
    }
  };

  const handleInputChange = (e) => {
    setEditedDescription(e.target.value);
  };

  const handleSaveEdit = () => {
    if (!blockClick) {
      onEditTask(task.id, editedDescription);
      setIsEditing(false);
    }
  };

  const handleBlur = () => {
    if (!blockClick) {
      // Llama a onAddTask con el valor actual del input
      onAddTask(editedDescription);
      setIsEditing(false);
    }
  };

  const handleKeyDown = (e) => {
    if (!blockClick && e.key === 'Enter') {
      handleSaveEdit();
    }
  };

  return (
    <div className={`task-row ${isChecked === true ? 'completed' : ''}`} onClick={() => setBlockClick(!blockClick)}>
      <div className="left-column">
        <div className="event-square" onClick={handleComplete} onDoubleClick={handleDoubleClick}>
          <span className={isChecked === true ? 'tarea-tick' : isChecked === false ? 'tarea-x' : ''}>
            {isChecked === true ? '✔' : isChecked === false ? '✖' : ''}
          </span>
        </div>
      </div>
      <div className={`right-column ${isChecked === false ? 'completed-task' : ''}`}>
        {isEditing ? (
          <>
            <input
              type="text"
              value={editedDescription}
              onChange={handleInputChange}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
              readOnly={!isChecked} 
            />
          </>
        ) : (
          <div onClick={handleEdit}>{task.description}</div>
        )}
      </div>
      {isDeleteVisible && (
        <div className="delete-button" onClick={handleConfirmDelete}>
          x
        </div>
      )}
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

export default TaskItem;

