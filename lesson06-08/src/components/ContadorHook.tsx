import useContador from "../hooks/useContador";

function ContadorHook() {
    const {contador, incrementar} = useContador();


  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
}

export default ContadorHook;
