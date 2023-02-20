import React, { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const {createTask} = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
        title,
        id: Date.now(),
        description
    }
    setTitle('')
    setDescription('')
    createTask(newTask)
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <input autoFocus value={title}
        type="text"
        placeholder="escribe tu tarea"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <textarea value={description} onChange={(e)=>{setDescription(e.target.value)}} placeholder="Escribe una descripcion"></textarea>
      <button>Guardar</button>
    </form>
  );
}
