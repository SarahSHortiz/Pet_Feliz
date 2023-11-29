import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Certifique-se de ter o axios instalado no seu projeto
import { useLocation } from "react-router-dom";


const PerfilAnimal = () =>{

const [Porte_Pet, setPorte_Pet] = useState("");
const [Sexo_Pet, setSexo_Pet] = useState("");
const [Idade_Pet, setIdade_Pet] = useState("");
const [Descricao_Pet, setDescricao_Pet] = useState("");
const [Status_Pet, setStatus_Pet] = useState("");
const [Castrado, setCastrado] = useState("");
const [Foto_Pet] = useState("");
const [Base64, setBase64] = useState(null);
const [Cod_Usuario, setCod_Usuario] = useState("");
const [Nome_Foto] = useState("");
const [Nome_Pet, setNome_Pet] = useState("")

const [Especie, setEspecie] = useState({
    Nome_Especie: '',
})

const [Raca, setRaca] = useState({
    Nome_Raca: '',
});

const [Animal, setAnimal] = useState({
    Nome_Animal: '',
});

const [Vacina, setVacina] = useState({
    data_vacina: '',
    status: 'Selecione a Opção',
    descricao: '',
});


const [errors, setErrors] = useState({});

const nome_Animal = ['Gato', 'Cão'];
const idade_Pet = ['Entre 0 e 1', 'Entre 1 e 4', 'Entre 4 e 10', 'Mais de 10'];
const porte_Pet = ['Anão', 'Pequeno Porte', 'Médio Porte', 'Grande Porte', 'Molosso'];
const sexo_Pet = ['Macho', 'Fêmea'];
const castrado = ['Sim', 'Não'];
const status_Pet = ['Disponível', "Interessados", 'Adotado'];
const status = ['Não Válido', 'Válido'];

const validateForm = () => {
    const errors = {};

};

function editarpet(evento) {
    evento.preventDefault();

    const body = { nome, cpf, email, celular, imagem };


  useEffect(() => {


    fetch("https://petfeliz.azurewebsites.net/api/usuarioAtualizarPet", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        })
            .then((response) => { alert("Usuário alterado com sucesso"); })
            .catch((error) => {
                console.log(error);
                alert("Erro ao alterar usuario");
            });
    }





  const handleChange = (event) => {
    const { name, value } = event.target;
    setCardAnimal({ ...cardanimal, [name]: value });
  };

  const handleSubmit = () => {
    // Aqui você pode enviar as alterações para a API
    // Usando os dados em 'cardanimal'
    console.log('Informações do animal atualizadas:', cardanimal);
    // Coloque aqui a lógica para enviar as alterações para a API
  };

  return (
    <div>
      <img src={cardanimal.foto_Pet} alt="Imagem do Card" style={{ objectFit: 'cover', borderRadius: "6px", maxWidth: '100%', maxHeight: '20rem' }} />
      
      <div>
        <label>Nome do Pet:</label>
        <input
          type="text"
          name="nome_Pet"
          value={cardanimal.nome_Pet}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Sexo do Pet:</label>
        <input
          type="text"
          name="sexo_Pet"
          value={cardanimal.sexo_Pet}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Descrição:</label>
        <input
          type="text"
          name="descricao_Pet"
          value={cardanimal.descricao_Pet}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Idade do Pet:</label>
        <input
          type="text"
          name="idade_Pet"
          value={cardanimal.idade_Pet}
          onChange={handleChange}
        />
      </div>


      <button onClick={handleSubmit}>Salvar Alterações</button>
    </div>
  );
};


