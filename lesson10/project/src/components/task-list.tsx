import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { Task } from "@/types/task";

interface Props {
  tasks: Task[];
  toggleTaskCompletion: (id: string) => void;
}

function TaskList({ tasks, toggleTaskCompletion }: Props) {
  return (
    <ul className="grid gap-1.5">
      {tasks.map((task) => (
        <li key={task.id}>
          <Card>
            <CardContent className="flex justify-between items-center gap-2">
              <span className={task.done ? "line-through" : ""}>
                {task.text}
              </span>

              <Button
                size="icon"
                variant="ghost"
                onClick={() => toggleTaskCompletion(task.id)}
              >
                {!task.done ? <Check /> : <X />}
              </Button>
            </CardContent>
          </Card>
        </li>
      ))}
    </ul>
  );
}

export { TaskList };
