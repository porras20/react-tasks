import { useEffect, useState } from 'react'
import { TaskForm } from './components/TaskForm'
import { TaskList } from './components/TaskList'
import { tasks as data } from "./data/tasks";

export default function App() {
  const [tasks, setTasks] = useState([git )
    useEffect(() => {
      setTasks(data)
    }, [])

    function createTask(task) {
      setTasks([...tasks, task])
    }

    function deleteTask(taskId) {
      setTasks(tasks.filter(task => task.id !== taskId))
    }

  return (
    <>
      <TaskForm createTask={createTask}/>
      <TaskList tasks={tasks} deleteTask={deleteTask}/>
    </>
  )
}
