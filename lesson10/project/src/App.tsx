import { Route, Routes } from "react-router";
import { Home } from "./pages";
import { TasksProvider } from "./contexts/tasks";
import { Modal } from "./pages/modal";

function App() {
  return (
    <Routes>
      <Route
        index
        element={
          <TasksProvider>
            <Home />
          </TasksProvider>
        }
      />

      <Route path="modal" element={<Modal />} />
    </Routes>
  );
}

export { App };
