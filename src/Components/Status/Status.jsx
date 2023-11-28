import React, { useState, useEffect } from "react";
import axios from "axios";


export function getStatusColor(status) {
  switch (status) {
    case 'Disponível':
      return { backgroundColor: 'green' };
    case 'Adotado':
      return { backgroundColor: 'red' };
    case 'Interessado':
      return { backgroundColor: 'yellow' };
    default:
      return { backgroundColor: 'white' };
  }
}
function Status() {
  const [animais, setAnimais] = useState([]);

  useEffect(() => {
    axios.get("https://petfeliz.azurewebsites.net/api/PetFeliz/ListarPet")
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
        <div key={animal.id} style={getStatusColor(animal.status_Pet)}>
          <h2>Nome do Animal: {animal.nome}</h2>
          <p>Status de Adoção: {animal.status_Pet}</p>
        </div>
      ))}
    </div>
  );
}

export default Status;
