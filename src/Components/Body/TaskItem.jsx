
import React, { useState } from 'react';
import './TaskItem.css';

const TaskItem = ({ task, onTaskComplete, onDeleteTask }) => {
  const [completed, setCompleted] = useState(false);

  const handleComplete = () => {
    setCompleted(!completed);
    onTaskComplete(task.id, !completed);
  };

  return (
    <div className={`task-row ${completed ? 'completed' : ''}`}>
      <div className="left-column">
        <div className="event-square" onClick={handleComplete}></div>
      </div>
      <div className="right-column">{task.description}</div>
      <div className="delete-button" onClick={() => onDeleteTask(task.id)}>
        X
      </div>
    </div>
  );
};

export default TaskItem;



  