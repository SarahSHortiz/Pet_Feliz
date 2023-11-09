import { useState, useEffect } from "react";
import axios from "axios";

function Status() {
  const [animais, setAnimais] = useState([]);

  useEffect(() => {
    axios.get("")
      .then((response) => {
        setAnimais(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar dados da API:", error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Animais para Adoção</h1>
      {animais.map((animal) => (
        <div key={animal.id}>
          <h2>Nome do Animal: {animal.nome}</h2>
          <p>Status de Adoção: {animal.status}</p>
        </div>
      ))}
    </div>
  );
}

export default Status;
