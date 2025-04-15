import { Header } from "@/components/header";
import { CreateTaskForm } from "@/components/create-task-form";
import { TaskList } from "@/components/task-list";
import { useTasks } from "@/hooks/useTasks";

function Home() {
  const { tasks, createTask, toggleTaskCompletion } = useTasks();

  return (
    <div className="container">
      <Header />

      <main className="space-y-8">
        <CreateTaskForm onSubmit={createTask} />

        {tasks.length === 0 ? (
          <p className="pt-3 text-neutral-500 text-sm text-center">
            Ainda não há tarefas cadastradas
          </p>
        ) : (
          <TaskList tasks={tasks} toggleTaskCompletion={toggleTaskCompletion} />
        )}
      </main>
    </div>
  );
}

export { Home };
