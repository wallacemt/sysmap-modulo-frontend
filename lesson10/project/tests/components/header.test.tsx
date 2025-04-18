import { describe, it, expect } from "vitest";
import React from "react";
import { render, screen } from "@testing-library/react";
import { Header } from "../../src/components/header";

describe("[Component] Header", () => {
  it("should render the header with the correct title", () => {
    render(<Header />);

    const headerElement = screen.getByRole("heading", {
      name: /Lista de Tarefas/i,
    });

    expect(headerElement).toBeInTheDocument();
    expect(headerElement).toHaveClass("text-3xl font-heading");
    expect(headerElement).toHaveTextContent("Lista de Tarefas");
  });
});
