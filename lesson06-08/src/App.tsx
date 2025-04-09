
import Mensagem from ".//components/Mensagem";
import "./App.css";
import Contador from "./components/Contador";
import FruitList from "./components/FruitList";

function App() {

  return (
    <>
      <Mensagem user="Wallace" messagem="Mensagem 1" />
      <FruitList/>
      <Contador/>
    </>
  );
}

export default App;
