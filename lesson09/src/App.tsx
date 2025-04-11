import { Route, Routes } from "react-router";

function App() {
  return (
    <>
      <Routes>
        {/* Rota Principal */}
        <Route index element={<h1 className="bg-red-500 text-2xl">HELLO WORLD</h1>} />
        <Route path="activities">
          {/* Rota Atividade */}
          <Route index element={<h1 className="">ACTIVITIES</h1>} />
          {/* Rota Detalhe Atividade */}
          <Route path=":activityId" element={<h1>ACTIVITY DETAIL</h1>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
