function Mensagem({ messagem = "", user = "" }) {
    return (
        <div>
            <p>{user ? user : 'Usuário desconhecido'}</p>
            <h1>{messagem}</h1>
        </div>
    )
} 

export default Mensagem
