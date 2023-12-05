import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { AuthContextFunctions } from "../../AuthContext";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import "../AlterarPerfil/AlterarPerfil.css";

export default function AlterarPerfil() {

  const navigate = useNavigate();
  const location = useLocation();
  const id = location.state && location.state.id;

  const [Nome, setNome] = useState("");
  const [Telefone, setTelefone] = useState("");
  const [Senha, setSenha] = useState("");
  const [Id, setId] = useState("");
  const [Email, setEmail] = useState("");
  const [Estado, setEstado] = useState({
    Nome_Estado: ""
  });
  const [Cidade, setCidade] = useState({
    Nome_Cidade: '',
  });
  const [NomeLog, setNomeLog] = useState("");
  const [CEP, setCEP] = useState("");
  const [Numero, setNumero] = useState("");

  const [confsenha, setConfSenha] = useState('');


  useEffect(() => {
    const usuarioLogado = AuthContextFunctions.CheckUserLogin();

    if (usuarioLogado) {
      const userData = JSON.parse(AuthContextFunctions.GetUserData());

      const userNome = userData.Nome_Usuario;
      setNome(userNome);

      const userEmail = userData.Email;
      setEmail(userEmail);

      const userTelefone = userData.Telefone;
      setTelefone(userTelefone);

      const usercidade = userData.Nome_Cidade;
      setCidade({ ...Cidade, Nome_Cidade: usercidade });

      const userestado = userData.Nome_Estado;
      setEstado({ ...Estado, Nome_Estado: userestado });

      const userNomeLog = userData.Nome_Log;
      setNomeLog(userNomeLog);

      const userCep = userData.CEP;
      setCEP(userCep);

      const userNumero = userData.Numero_Log;
      setNumero(userNumero);

      const userId = userData.Cod_Usuario;
      setId(userId)
    } else {
      alert("nenhum usuario logado")
    }

  }, []);

  const editarUsuario = async (e) => {
    e.preventDefault();

    const Usuario = {
      Email,
      Senha
    }

    const Logradouro = {
      NomeLog,
      CEP,
      Numero
    }
    const body = {
      Id,
      Nome,
      Telefone,
      Estado,
      Cidade,
      Logradouro,
      Senha,
    };

    try {

      if (!Nome) {
        alert("Preencha o campo nome");
        return;
      }

      if (!Telefone) {
        alert("Preencha o campo telefone");
        return;
      }
      if (!Senha) {
        alert("Preencha o campo senha");
        return;
      }
      if (Senha != confsenha) {
        alert("Senhas diferentes! Por favor verificar");
        return;
      }
      if (!Logradouro.CEP) {
        alert("Preencha o campo CEP");
        return;
      }
      if (!Logradouro.NomeLog) {
        alert("Preencha o campo endereço");
        return;
      }
      if (!Logradouro.Numero) {
        alert("Preencha o campo numero");
        return;
      }


      const response = await axios.put("https://petfeliz.azurewebsites.net/api/Usuario/atualizarUsuario", body, {
        headers: {
          'Content-Type': 'application/json',
        }

      });
      if (response.status === 200) {

        alert("Usuário alterado com sucesso");

        const response = await axios.post("https://petfeliz.azurewebsites.net/api/Auth/Login", Usuario);

        if (response.status === 200) {

          AuthContextFunctions.SaveJWT(response.data.token)
          const user = AuthContextFunctions.GetUserData();
          navigate("/Perfil", { state: { id: user.Cod_Usuario } });
        }
      }
    } catch (error) {
      console.error("Erro ao alterar o usuário", error);
      if (error.response) {
        // A requisição foi feita e o servidor respondeu com um código de status
        // que está fora da faixa de 2xx
        console.error("O servidor respondeu com:", error.response.data);
        console.error("Código de status:", error.response.status);
        console.error("Headers:", error.response.headers);
      } else if (error.request) {
        // A requisição foi feita, mas nenhuma resposta foi recebida
        console.error("Nenhuma resposta recebida. Detalhes da requisição:", error.request);
      } else {
        // Algo aconteceu na configuração da requisição que gerou um erro
        console.error("Erro na configuração da requisição:", error.message);
      }
      alert("Erro ao alterar o usuário. Consulte o console para mais informações.");
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

        <form onSubmit={(e) => editarUsuario(e)} className="alterar-perfil-form">
          <div className="form-group">
            <label className="texto1" htmlFor="name">Nome</label>
            <input type="text" id="name" value={Nome} onChange={(e) => setNome(e.target.value)} name="name" placeholder="Nome" />
          </div>

          <div className="form-group">
            <label className="texto1" htmlFor="tel">Telefone</label>
            <input type="tel" id="tel" value={Telefone} onChange={(e) => setTelefone(e.target.value)} name="tel" placeholder="Telefone" />
          </div>

          <div className="form-group">
            <label className="texto1" htmlFor="estado">Estado  </label>
            <input type="text" id="estado" value={Estado.Nome_Estado} onChange={(e) => setEstado({ ...Estado, Nome_Estado: e.target.value })} name="estado" placeholder="Estado" />
          </div>

          <div className="form-group">
            <label className="texto1" htmlFor="cidade">Cidade  </label>
            <input type="text" id="cidade" value={Cidade.Nome_Cidade} onChange={(e) => setCidade({ ...Cidade, Nome_Cidade: e.target.value })} name="cidade" placeholder="Cidade" />
          </div>

          <div className="form-group">
            <label className="texto1" htmlFor="endereco">Endereço  </label>
            <input type="text" id="endereco" value={NomeLog} onChange={(e) => setNomeLog(e.target.value)} name="endereco" placeholder="Endereço" />
          </div>

          <div className="form-group">
            <label className="texto1" htmlFor="cep">CEP</label>
            <input type="text" id="cep" value={CEP} onChange={(e) => setCEP(e.target.value)} name="cep" placeholder="CEP" />
          </div>

          <div className="form-group">
            <label className="texto1" htmlFor="numero">Número</label>
            <input type="text" id="numero" value={Numero} onChange={(e) => setNumero(e.target.value)} name="numero" placeholder="Número" />
          </div>

          <div className="form-group">
            <label className="texto1" htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              value={Senha}
              onChange={(e) => setSenha(e.target.value)}
              name="senha"
              placeholder="Senha"
            />
          </div>

          <div className="form-group">
            <label className="texto1" htmlFor="senha"> Confirmar Senha</label>
            <input
              type="password"
              id="senhaconfirmar"
              value={confsenha}
              onChange={(e) => setConfSenha(e.target.value)}
              name="confsenha"
              placeholder="Confirmar Senha"
            />
          </div>



          <div className="bnt-alterar-perfil">
            <button type="submit" value={"Editar"}>
              ALTERAR
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}