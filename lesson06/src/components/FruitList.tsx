import { useState } from "react";

function FruitList() {
  const [frutas, setFrutas] = useState([
    { nome: "Banana", preco: 10 },
    { nome: "Maçã", preco: 5 },
    { nome: "Laranja", preco: 7 },
  ]);

  const preco = frutas.reduce((acc, fruta) => {
    return (acc += fruta.preco);
  }, 0);

  const formattedFruitList = frutas.map((fruta) => ({
    ...fruta,
    preco: `R$ ${fruta.preco}`,
  }));

  const user = "Tiago";

  function handleClick(fruta: string, user: string) {
    console.log(`${user}, você clicou na fruta: ${fruta}`);
  }

  return (
    <ul>
      {formattedFruitList.map((fruta, index) => (
        <li key={index}>
          <button onClick={() => handleClick(fruta.nome, user)}>
            {fruta.nome} - {fruta.preco}
          </button>
        </li>
      ))}

      <li>{preco}</li>

      <li>
        <button
          onClick={() => {
            const novaFruta = { nome: "Uva", preco: 8 };
            setFrutas([...frutas, novaFruta]);
          }}
        >
          Adicionar fruta
        </button>
      </li>
    </ul>
  );
}

export default FruitList;
