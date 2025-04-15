import { createContext, PropsWithChildren, useState } from "react";
import type { Task } from "@/types/task";

interface Props {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TasksContext = createContext<Props>({
  tasks: [],
  setTasks: () => {},
});

function TasksProvider({ children }: PropsWithChildren) {
  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <TasksContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TasksContext.Provider>
  );
}

export { TasksContext, TasksProvider };
