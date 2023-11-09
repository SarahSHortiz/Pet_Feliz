import axios from "axios";
import "../PerfilAnimal/PerfilAnimal.css";
import { useEffect, useState } from 'react';
import axios from "axios";

    export default function PerfilAnimal() {
        const [pet, setPet] = useState({
            Nome: '',
            Raca: '',
            Porte: '',
            Idade: '',
            Especie: '',
            Castrado: '',
            Vermifugado: '',
            Vacinado: '',
        });
    
        useEffect(() => {
            // Substitua 'idDoAnimal' pelo ID do animal que você deseja editar.
            axios.get(`https://petfeliz.azurewebsites.net/api/PetFeliz/ObterDetalhesDoAnimal?id=${idDoAnimal}`)
                .then((response) => {
                    const animalData = response.data; // Dados do animal da API
                    setPet(animalData); // Define os dados do animal no estado
                })
                .catch((error) => {
                    console.error('Erro ao carregar dados do animal:', error);
                });
        }, [idDoAnimal]);
    


    const [ setInputValue] = useState('');

const handleChange = (event) => {
    const { name, value } = event.target;
    setPet((prevPet) => ({
        ...prevPet,
        [name]: value,
    }));
};


const handleSubmit = (evento) => {
    evento.preventDefault();

    axios.put(`https://petfeliz.azurewebsites.net/api/PetFeliz/EditarPet?id=${idDoAnimal}`, pet)
        .then((response) => {
            console.log("Alterações salvas com sucesso:", response.data);
            // Você pode redirecionar o usuário para outra página ou realizar outras ações após salvar as alterações.
        })
        .catch((error) => {
            console.error('Erro ao salvar alterações:', error);
            alert('Erro ao salvar as alterações');
        });
};


    return (
        <div className="perfil-animal-body">
            <div className="perfil-animal-container">
                <div className="perfil-title">
                    <h1>Perfil Animal</h1>
                </div>
                <form className="dados-animal-perfil" onSubmit={handleSubmit}>
                    <div className="question">
                        <input
                            type="text"
                            required
                            placeholder="Nome"
                            value={pet.Nome}
                            onChange={(e) => setPet({ ...pet, Nome: e.target.value })}
                        />
                    </div>
                    <div className="question">
                        <input
                            type="text"
                            required
                            placeholder="Raça"
                            value={pet.Raca}
                            onChange={(e) => setPet({ ...pet, Raca: e.target.value })}
                        />
                    </div>
                    <select className="question">
                        <input
                            type="text"
                            placeholder="Porte"
                            value={pet.Porte}
                            onChange={(e) => setPet({ ...pet, Porte: e.target.value })}
                        />
                    </select>
                    {/* Adicione campos para outros atributos do animal aqui */}
                    <button type="submit">SALVAR ALTERAÇÕES</button>
                </form>
                <div className="cancelar-animal-editar">
                    <button>CANCELAR</button>
                </div>
            </div>
        </div>
    );
}
