
import React, { useState } from 'react';
import './TaskItem.css';
import { BsCheck2Square, BsSquare } from "react-icons/bs";

const TaskItem = ({ task, onTaskComplete, onDeleteTask }) => {
  const [completed, setCompleted] = useState(false);

  const handleComplete = () => {
    setCompleted(!completed);
    onTaskComplete(task.id, !completed);
  };

  return (
    <div className={`task-row ${completed ? 'completed' : ''}`} style={{ color: completed && "#000000" , textDecoration: completed ? "line-through" : "none" }}>
      <div className="left-column">
      <div onClick={handleComplete}>
        {completed ? <BsCheck2Square size={20
        } /> : <BsSquare size={16} />}
      </div>
        {/* <div className="event-square" onClick={handleComplete}></div> */}
      </div>
      <div className="right-column">{task.description} </div>
      <div className="delete-button" onClick={() => onDeleteTask(task.id)}>
        X
      </div>
    </div>
  );
};

export default TaskItem;



  