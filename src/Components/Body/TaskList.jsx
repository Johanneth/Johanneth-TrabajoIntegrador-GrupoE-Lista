
import React from 'react';
import './TaskList.css';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onTaskComplete, onDeleteTask }) => {
  return (
    <div className="task-list-container">
      <div className='vertical-line'></div>
      <div className="folder-sheet">
        <div className="empty-row"></div>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onTaskComplete={onTaskComplete}
            onDeleteTask={onDeleteTask}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskList;

