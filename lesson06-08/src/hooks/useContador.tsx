import { useState } from "react";

function useContador() {
  const [contador, setContador] = useState(1);

  function incrementar() {
    setContador(contador + 1);
  }

  return { contador, incrementar };
}

export default useContador;
