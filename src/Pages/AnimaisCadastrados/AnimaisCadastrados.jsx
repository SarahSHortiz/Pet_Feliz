import { useEffect, useState } from "react";
import CardsEditarAnimal from "../../Components/Card/CardEditarAnimal/CardEditarAnimal";
import '../AnimaisCadastrados/AnimaisCadastrados.css';
import { AuthContextFunctions } from "../../AuthContext";
import { Alert } from "bootstrap";

export default function AnimaisCadastrados() {
  const [animais, setAnimais] = useState([]); // Criar estado para armazenar os animais

  const [id, setid] = useState('');

  const [filters, setFilters] = useState({
    Id: "",
  });

  useEffect(() => {
    const usuarioLogado = AuthContextFunctions.CheckUserLogin();

    if (usuarioLogado) {
      const userData = JSON.parse(AuthContextFunctions.GetUserData());

      const userid = userData.Cod_Usuario;
      setid(userid);


    } else {
      alert("nenhum usuario logado")


    }

  }, []);

  useEffect(() => {
    if (id) {
      getDataFromApi();
    }
  }, [id])

  const getDataFromApi = () => {

    var queryString = "Id=" + id;


    console.log(queryString)

    fetch("https://petfeliz.azurewebsites.net/api/PetFeliz/ListarPet?" + queryString, {
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


  };


  return (
    <div className="body-pets-listacadastrados">
      <div className="pets-listacadastrados-container">

        <div className="title-listacadastrados">
          <h1>Animais Cadastrados</h1>
        </div>

        <div className="cards-container3">
          {animais.map((animal) => (
            <CardsEditarAnimal cardanimal={animal} key={animal.id_Pet} />
          ))}
        </div>
      </div>
    </div>
  );
}
