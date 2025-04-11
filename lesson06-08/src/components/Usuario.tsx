import { useEffect, useState } from "react";

function Usuario() {
    const [nomeUsuario, setNomeUsuario] = useState();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/1')
            .then(response => response.json())
            .then(json => setNomeUsuario(json.name))
    }, [])
    return (
        <div>
            {nomeUsuario ? <p>Seja bem vindo {nomeUsuario}!</p> : <p>Carregando...</p>}
        </div>
    )

}
export default Usuario;