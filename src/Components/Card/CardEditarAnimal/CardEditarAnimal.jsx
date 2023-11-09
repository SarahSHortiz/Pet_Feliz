// import React from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios"; // Importe o Axios

// function CardEditarAnimal({ card }) {
//     const navigate = useNavigate();

//     function navegarEditar() {
//         navigate("/src/Modal/PerfilAnimal", { state: { id: card.id } });
//     }

//     function handleExcluir() {
//         axios.delete(`/${card.id}`).then((response) => {
//             if (response.status === 200) {
//                 alert("Card excluído com sucesso!");
//             } else {
//                 alert("Erro ao excluir o card.");
//             }
//         })
//             .catch((error) => {
//                 console.error("Erro ao excluir o card:", error);
//             });
//     }
//     return (
//         <div>
//             <label>
//                 <img src={card.imagem} style={{ width: 200, height: 200 }} alt={card.nome} />
//             </label>
//             <h1>{card.nome}</h1>
//             <h3>CPF: {card.cidade}</h3>
//             <h3>Email: {card.Estado}</h3>

//             <button onClick={navegarEditar}>Alterar</button>
//             <button onClick={handleExcluir}>Excluir</button>
//         </div>
//     );
// }

// export default CardEditarAnimal;
