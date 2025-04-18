import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { TaskList } from "../../src/components/task-list";

describe("[Component] Task List", () => {
  it("should render an empty task list", () => {
    render(<TaskList tasks={[]} toggleTaskCompletion={() => {}} />);

    const taskList = screen.getByRole("list");
    expect(taskList).toBeInTheDocument();
    expect(taskList).toBeEmptyDOMElement();
  });

  it("should render a task list with tasks", () => {
    const tasks = [
      { id: "1", text: "Task 1", done: false },
      { id: "2", text: "Task 2", done: true },
    ];

    render(<TaskList tasks={tasks} toggleTaskCompletion={() => {}} />);

    const taskList = screen.getByRole("list");
    expect(taskList).toBeInTheDocument();
    expect(taskList).not.toBeEmptyDOMElement();

    const taskItems = screen.getAllByRole("listitem");
    expect(taskItems.length).toBe(tasks.length);
  });

  it("should call toggleTaskCompletion when a task is clicked", () => {
    const tasks = [
      { id: "1", text: "Task 1", done: false },
      { id: "2", text: "Task 2", done: true },
    ];

    const toggleTaskCompletion = vi.fn();

    render(
      <TaskList tasks={tasks} toggleTaskCompletion={toggleTaskCompletion} />
    );

    const taskButton = screen.getAllByRole("button")[0];
    taskButton.click();

    expect(toggleTaskCompletion).toHaveBeenCalledWith(tasks[0].id);
    expect(toggleTaskCompletion).toHaveBeenCalledTimes(1);
  });
});
