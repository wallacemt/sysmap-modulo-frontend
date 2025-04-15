import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Plus } from "lucide-react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Props {
  onSubmit: (data: CreateTaskForm) => void;
}

const createTaskSchema = z.object({
  task: z.string({ required_error: "Campo obrigatório" }),
});

export type CreateTaskForm = z.infer<typeof createTaskSchema>;

function CreateTaskForm({ onSubmit }: Props) {
  const form = useForm({
    resolver: zodResolver(createTaskSchema),
  });

  return (
    <Form {...form}>
      <form
        className="grid justify-items-end gap-2"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="task"
          render={({ field, fieldState }) => (
            <FormItem className="w-full">
              <FormLabel>Nome da tarefa</FormLabel>

              <FormControl>
                <Input placeholder="Ex.: Comprar pão" {...field} />
              </FormControl>

              {!fieldState.error ? (
                <FormDescription>
                  Descreva a tarefa que você deseja adicionar à lista.
                </FormDescription>
              ) : (
                <FormMessage />
              )}
            </FormItem>
          )}
        />

        <Button>
          <Plus />
          Adicionar tarefa
        </Button>
      </form>
    </Form>
  );
}

export { CreateTaskForm };
