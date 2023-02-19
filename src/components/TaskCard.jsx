import React from 'react'

export  function TaskCard({task, deleteTask}) {
  function btnAccion(params) {
    console.log(task.id);
  }
  return (

    <div>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <button onClick={()=>deleteTask(task.id)}>Eliminar tarea</button>
    </div>
  );
}
