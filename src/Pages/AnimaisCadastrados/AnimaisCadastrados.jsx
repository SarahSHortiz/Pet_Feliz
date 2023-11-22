import { useEffect, useState } from "react";
import "../AnimaisCadastrados/AnimaisCadastrados.css";
import CardsEditarAnimal from "../../Components/Card/CardEditarAnimal/CardEditarAnimal";
import './AnimaisCadastrados.css';

export default function AnimaisCadastrados() {
  const [animais, setAnimais] = useState([]); // Criar estado para armazenar os animais

  useEffect(() => {
    fetch("https://petfeliz.azurewebsites.net/api/PetFeliz/ListarPet", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        setAnimais(json); // Atualizar o estado com os animais obtidos
      })
      .catch((error) => {
        console.log(error);
        alert("Erro ao buscar animais");
      });
  }, []);

  return (
    <div className="body-pets-listacadastrados">
      <div className="pets-listacadastrados-container">
        <div className="title-listacadastrados">
          <h1>Animais Cadastrados</h1>
        </div>
        <div className="cards-container">
          {animais.map((animal) => (
            <CardsEditarAnimal cardanimal={animal} key={animal.id_Pet} />
          ))}
        </div>
      </div>
    </div>
  );
}
