import React, { useState } from 'react';
import './TaskList.css';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onTaskComplete, onDeleteTask, onEditTask, onSaveEdit, onAddTask }) => {
  const [newTaskDescription, setNewTaskDescription] = useState('');

  const handleInputChange = (e) => {
    setNewTaskDescription(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onAddTask(newTaskDescription);
      setNewTaskDescription('');
    }
  };

  return (
     <div className="task-list-container">
      <div className='vertical-line'></div>
       <div class="vertical-line-new"></div>
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
           />
        ))}
        {/* Nuevo input para agregar tarea al final de la lista */}
        <div className="new-task-input-bottom">
          <input
            type="text"
            placeholder="New Task..."
            value={newTaskDescription}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>
    </div>
  );
};

export default TaskList;