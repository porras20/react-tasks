import React, { useContext } from 'react'
import { TaskContext } from '../context/TaskContext';


export  function TaskCard({task}) {
  const {deleteTask} = useContext(TaskContext)
  return (
    <div>
      <h1 className='text-3xl font-bold underline'>{task.title}</h1>
      <p>{task.description}</p>
      <button onClick={()=>deleteTask(task.id)}>Eliminar tarea</button>
    </div>
  );
}
