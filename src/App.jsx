import { useEffect, useState } from 'react'
import { TaskForm } from './components/TaskForm'
import { TaskList } from './components/TaskList'
import { tasks as data } from "./data/tasks";

export default function App() {
  const [tasks, setTasks] = useState([])
    useEffect(() => {
      setTasks(data)
    }, [])

    function createTask(task) {
      setTasks([...tasks, task])
    }
  return (
    <>
      <TaskForm createTask={createTask}/>
      <TaskList tasks={tasks}/>
    </>
  )
}
