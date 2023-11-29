
import React, { useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import './Task.css';

function Task({ id, texto, completada, completarTarea, eliminarTarea }) {
  const [eliminando, setEliminando] = useState(false);

  const handleDobleClick = () => {
    setEliminando(true);
    eliminarTarea(id);
  };

  return (
    <div className={eliminando ? 'tarea-contenedor eliminando' : (completada ? 'tarea-contenedor completada' : 'tarea-contenedor')}>
      <div className="tarea-checkbox">
        <input
          type="checkbox"
          id={`tarea-${id}`}
          checked={completada}
          onChange={() => completarTarea(id)}
        />
        <div className="tarea-tick-container">
          {completada && <span className="tarea-tick">✔</span>}
        </div>
      </div>
      <div className='tarea-texto' onDoubleClick={handleDobleClick}>
        {texto}
      </div>
      <div className='tarea-contenedor-iconos' onClick={() => eliminarTarea(id)}>
        <AiOutlineCloseCircle className='tarea-icono' />
      </div>
    </div>
  );
}

export default Task;
