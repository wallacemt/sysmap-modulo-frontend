import Mensagem from ".//components/Mensagem";
// import FruitList from "./components/FruitList";

import "./App.css";
// import Contador from "./components/Contador";
import ContadorHook from "./components/ContadorHook";
import Usuario from "./components/Usuario";
import useUsers from "./hooks/useUsers";
function App() {
  const user = useUsers();
  
  return (
    <>
      <Mensagem user={user} messagem="Mensagem 1" />
      {/* 
      <FruitList/>
      */}
      <Usuario />
      <ContadorHook />
    </>
  );
}

export default App;
