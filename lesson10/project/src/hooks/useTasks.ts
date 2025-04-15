import type { CreateTaskForm } from "@/components/create-task-form";
import { TasksContext } from "@/contexts/tasks";
import { useContext } from "react";

function useTasks() {
  const { tasks, setTasks } = useContext(TasksContext);

  function createTask(data: CreateTaskForm) {
    setTasks((prev) => [
      ...prev,
      { id: window.crypto.randomUUID(), text: data.task, done: false },
    ]);
  }

  function toggleTaskCompletion(id: string) {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id === id) {
          return { ...task, done: !task.done };
        }

        return task;
      })
    );
  }

  return {
    tasks,
    createTask,
    toggleTaskCompletion,
  };
}

export { useTasks };
