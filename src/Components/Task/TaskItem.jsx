import React, { useState, useEffect } from 'react';
import './TaskItem.css';

const TaskItem = ({ task, onTaskComplete, onDeleteTask, onEditTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(task.description);
  const [blockClick, setBlockClick] = useState(false);
  const [isChecked, setIsChecked] = useState(task.completed);

  useEffect(() => {
    setIsChecked(task.completed);
  }, [task.completed]);

  const handleComplete = () => {
    if (!blockClick) {
      setIsChecked(isChecked === null ? true : !isChecked);
      onTaskComplete(task.id, isChecked === null ? true : !isChecked);
    }
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
      onEditTask(task.id, editedDescription);
      setIsEditing(false);
    }
  };

  const handleKeyDown = (e) => {
    if (!blockClick && e.key === 'Enter') {
      handleSaveEdit();
    }
  };

  const handleDelete = () => {
    onDeleteTask(task.id);
  };

  return (
    <div className={`task-row ${isChecked === true ? 'completed' : ''}`} onClick={() => setBlockClick(!blockClick)}>
      <div className="left-column">
        <div className="event-square" onClick={handleComplete}>
          <span className={isChecked === true ? 'tarea-tick' : isChecked === false ? 'tarea-x' : ''}>
            {isChecked === true ? '✔' : isChecked === false ? '✖' : ''}
          </span>
        </div>
      </div>
      <div className={`right-column ${isChecked === true ? 'completed-task' : ''}`}>
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
      <div className="delete-button" onClick={handleDelete}>
        🗑️
      </div>
    </div>
  );
};

export default TaskItem;
