import { useState } from "react"

function Contador() {
    const [contador, setContador] = useState(1);


    return (
        <div>
            <p>Contador: {contador}</p>
            <button onClick={() => setContador(contador + 1)}>Incrementar</button>
        </div>
    )
}

export default Contador