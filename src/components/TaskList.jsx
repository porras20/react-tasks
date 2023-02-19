import { TaskCard } from "./TaskCard";

export function TaskList({tasks, deleteTask}) {
  return (
    <div>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} deleteTask={deleteTask} />
      ))}
    </div>
  );
}
