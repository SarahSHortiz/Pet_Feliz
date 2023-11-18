import "../AlterarPerfil/AlterarPerfil.css"
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { AuthContextFunctions } from "../../AuthContext";
import axios from "axios";

export default function AlterarPerfil() {
   
    
      const location = useLocation();
      const id = location.state && location.state.id;
    
      const [Nome, setNome] = useState("");
      const [Telefone, setTelefone] = useState("");
      const [Estado, setEstado] = useState("");
      const [Cidade, setCidade] = useState("");
      const [Logradouro, setLogradouro] = useState("");
      const [CEP, setCEP] = useState("");
      const [Numero, setNumero] = useState("");
      const [Email, setEmail] = useState("");
      const [CPF, setCPF] = useState("");
      const [Senha, setSenha] = useState(""); // Adicionado
    
      const user = AuthContextFunctions.GetUserData();
    
      useEffect(() => {
        if (location.state) {
          axios
            .get(`https://petfeliz.azurewebsites.net/api/Usuario/${id}`)
            .then((response) => {
              const usuario = response.data;
              setNome(usuario.Nome);
              setTelefone(usuario.Telefone);
    
              if (usuario.Estado) {
                setEstado(usuario.Estado.Nome_Estado);
              }
    
              if (usuario.Cidade) {
                setCidade(usuario.Cidade.Nome_Cidade);
              }
    
              setLogradouro(usuario.Logradouro.NomeLog);
              setCEP(usuario.Logradouro.CEP);
              setNumero(usuario.Logradouro.Numero);
              setEmail(usuario.Email);
              setCPF(usuario.CPF);
            })
            .catch((error) => {
              console.error("Erro ao buscar os dados do usuário", error);
            });
        } else {
          alert("Ocorreu um erro!");
        }
      }, [location.state, id]);
    
      const editarUsuario = async (e) => {
        e.preventDefault();
    
        const body = {
          id,
          Nome,
          Telefone,
          Estado: { Nome_Estado: Estado },
          Cidade: { Nome_Cidade: Cidade },
          Logradouro: { NomeLog: Logradouro, CEP, Numero },
          Email,
          CPF,
          Senha,
        };
    
        try {
          await axios.put("https://localhost:44302/api/Usuario/atualizarUsuario", body);
          alert("Usuário alterado com sucesso");
        } catch (error) {
          console.error("Erro ao alterar o usuário", error);
          alert("Erro ao alterar o usuário");
        }
      };


    return (
        <div className="body-alterar-perfil">
            <div className="alterar-perfil-container">
                <div className="title-alterar-perfil">
                    <h1>Alterar Perfil</h1>
                </div>
                <div className="preferencias">
                    <h1>Preferências</h1>
                </div>

                <form   onSubmit={(e) => editarUsuario(e)} className="alterar-perfil-form ">
                    <input type="text" id="name" name="name" placeholder="Nome"  value={Nome} onChange={(e) => setNome(e.target.value)} />
                    <input type="email" id="email" name="email" placeholder="E-mail"  value={Email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="tel" id="tel" name="tel" placeholder="Telefone"  value={Telefone} onChange={(e) => setTelefone(e.target.value)} />
                    <input type="text" id="estado" name="estado" placeholder="Estado" value={Estado} onChange={(e) => setEstado(e.target.value)}  />
                    <input type="text" id="cidade" name="cidade" placeholder="Cidade"  value={Cidade} onChange={(e) => setCidade(e.target.value)} />
                    <input type="endereco" id="endereco" name="endereco" placeholder="Endereço" value={Logradouro} onChange={(e) => setLogradouro(e.target.value)} />
                    <input type="text" id="cpf" value={CPF} onChange={(e) => setCPF(e.target.value)} name="cpf" placeholder="CPF" />
                    <input
              type="password"
              id="senha"
              value={Senha}
              onChange={(e) => setSenha(e.target.value)}
              name="senha"
              placeholder="Senha"
            />
                </form>
                <div className="bnt-alterar-perfil">
                    <button type="submit" value={"Editar"}>SALVAR</button>
                </div>
            </div >
        </div >
    )
}