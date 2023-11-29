import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import TaskList from './Components/Task/TaskList';
import TaskForm from './Components/Task/TaskForm';

const MainApp = () => {
 const [tasks, setTasks] = useState([
 { id: 1, description: 'Throw away my books' },
 { id: 2, description: 'Recycle my homework' },
 { id: 3, description: 'Do some stupid things' },
 { id: 4, description: 'Create a stunning app' },
 { id: 5, description: 'Design my webside' }, 
 { id: 6, description: 'After Task' },
 
// ... Otras tareas
 ]);

 
const handleTaskComplete = (taskId, completed) => {
 
const updatedTasks = tasks.map((task) =>
 task.id === taskId ? { ... task, completed } : task
 );
 setTasks(updatedTasks);
 };

const handleAddTask = (newTaskDescription) => {
 //lógica para agregar una nueva tarea
 const newTask = {
 id: tasks.length + 1,
 description: newTaskDescription,
 };
 setTasks([... tasks, newTask]);
 };

 
const handleEditTask = (taskId, description) => {
  const updatedTasks = tasks.map((task) =>
    task.id === taskId ? { ...task, description } : task
  );
  setTasks(updatedTasks);
};

const handleSaveEdit = (taskId, newDescription) => {
  const updatedTasks = tasks.map((task) =>
    task.id === taskId ? { ...task, description: newDescription } : task
  );
  setTasks(updatedTasks);
  
};

const handleDeleteTask = (taskId) => {
 //Filtrar las tareas para eliminar la tarea 
 const updatedTasks = tasks.filter((task) => task.id !== taskId);
 setTasks(updatedTasks);
 };

return (
 <React.StrictMode>
 <TaskForm onAddTask={handleAddTask}/>
 <TaskList 
  tasks={tasks}
  onTaskComplete={handleTaskComplete}
  onDeleteTask={handleDeleteTask}
  onEditTask={handleEditTask}
  onSaveEdit={handleSaveEdit} 
  onAddTask={handleAddTask}
  />
 </React.StrictMode>
 );
};

ReactDOM.createRoot(document.getElementById('root')).render(<MainApp />);