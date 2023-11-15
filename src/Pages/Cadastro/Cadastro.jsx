import "../Cadastro/Cadastro.css";
import img1 from '../../assets/cachorroCadastro.jpg';
import { useState } from "react";
import axios from "axios";

function Cadastro() {
  const [usuario, setUsuario] = useState({
    CPF: '',
    Nome: '',
    Email: '',
    Telefone: '',
    Senha: '',
    Logradouro: {
      CEP: '',
      NomeLog: '',
      Numero: '',
    },
    Cidade: {
      Nome_Cidade: ''
    },
    Estado: {
      Nome_Estado: ''
    }
  });

  const [cadastroSucesso, setCadastroSucesso] = useState(null);

  const handleInputChange = (evento) => {
    const { name, value } = evento.target;
    setUsuario((prevUsuario) => ({
      ...prevUsuario,
      [name]: value,
    }));
  };

  const handleLogradouroInputChange = (evento) => {
    const { name, value } = evento.target;
    setUsuario((prevUsuario) => ({
      ...prevUsuario,
      Logradouro: {
        ...prevUsuario.Logradouro,
        [name]: value,
      },
    }));
  };

  const handleCidadeInputChange = (evento) => {
    const { name, value } = evento.target;
    setUsuario((prevUsuario) => ({
      ...prevUsuario,
      Cidade: {
        ...prevUsuario.Cidade,
        [name]: value,
      },
    }));
  };

  const handleEstadoInputChange = (evento) => {
    const { name, value } = evento.target;
    setUsuario((prevUsuario) => ({
      ...prevUsuario,
      Estado: {
        ...prevUsuario.Estado,
        [name]: value,
      },
    }));
  };

  const handleSubmit = async (evento) => {
    evento.preventDefault();

    try {
      // Validação dos campos
      if (!usuario.Nome || !usuario.CPF || !usuario.Email || !usuario.Telefone || !usuario.Senha ||
          !usuario.Logradouro.CEP || !usuario.Logradouro.NomeLog || !usuario.Logradouro.Numero) {
        alert("Preencha todos os campos");
        return;
      }

      // Requisição para cadastrar o usuário
      const response = await axios.post("https://petfeliz.azurewebsites.net/api/Usuario/cadastrarUsuario", usuario);
      console.log("Cadastro bem-sucedido:", response.data);

      // Limpar o formulário após o sucesso
      setUsuario({
        CPF: '',
        Nome: '',
        Email: '',
        Telefone: '',
        Senha: '',
        Logradouro: {
          CEP: '',
          NomeLog: '',
          Numero: '',
        },
        Cidade: {
          Nome_Cidade: ''
        },
        Estado: {
          Nome_Estado: ''
        }
      });

      // Atualizar o estado de sucesso para exibir a mensagem
      setCadastroSucesso(true);
    } catch (error) {
      // Tratamento de erro
      if (error.response) {
        alert("Erro ao cadastrar o usuário. Tente novamente mais tarde.");
        console.error("Erro no cadastro:", error.response.data);
      } else if (error.request) {
        alert("Erro ao enviar a requisição. Tente novamente mais tarde.");
        console.error("Sem resposta do servidor:", error.request);
      } else {
        alert("Ocorreu um erro. Tente novamente mais tarde.");
        console.error("Erro inesperado:", error.message);
      }

      // Se ocorrer um erro, definir o estado de sucesso como falso
      setCadastroSucesso(false);
    }
  };

  return (
    <div className="cadastro-body">
      <div className="cadastro-img">
        <img
          src={img1}
          alt="imagem"
        />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="cadastro-form">
          <div className="cadastro-title">
            <h1>Faça seu Cadastro!</h1>
            </div>
          <input type="text" id="name" name="Nome" value={usuario.Nome} onChange={handleInputChange} placeholder="Nome" />
          <input type="email" id="email" name="Email" value={usuario.Email} onChange={handleInputChange} placeholder="E-mail" />
          <input type="password" id="senha" name="Senha" value={usuario.Senha} onChange={handleInputChange} placeholder="Senha" />
          <input
            type="password"
            id="senhaconfirmar" name="senhaconfirmar" placeholder="Confirmar Senha" />
          <input type="number" id="tel" name="Telefone" value={usuario.Telefone} onChange={handleInputChange} placeholder="Celular" />
          <input type="text" id="cpf" name="CPF" value={usuario.CPF} onChange={handleInputChange} placeholder="CPF" />
          <input type="text" id="endereco" name="CEP" value={usuario.Logradouro.CEP} onChange={handleLogradouroInputChange} placeholder="CEP"
          />
          <input type="text" id="estado" name="Nome_Estado" value={usuario.Estado.Nome_Estado} onChange={handleEstadoInputChange} placeholder="Estado"/>
          <input type="text" id="cidade" name="Nome_Cidade" value={usuario.Cidade.Nome_Cidade} onChange={handleCidadeInputChange} placeholder="Cidade"/>
          <input type="text" id="endereco" name="NomeLog" value={usuario.Logradouro.NomeLog} onChange={handleLogradouroInputChange} placeholder="Endereço" />
          <input type="text" id="cidade" name="Numero" value={usuario.Logradouro.Numero} onChange={handleLogradouroInputChange} placeholder="Numero" />
        </div>
        <div>
          <button type="submit" className="cadastro-buttom1">
            CADASTRAR
          </button>
        </div>
        <div className="cadastro-buttom2">
          <a href="#">Já sou cadastrado(a)</a>
        </div>
        {cadastroSucesso !== null && (
          <div className={cadastroSucesso ? 'sucesso' : 'erro'}>
            {cadastroSucesso ? 'Usuário cadastrado com sucesso!' : 'Erro ao cadastrar o usuário. Tente novamente mais tarde.'}
          </div>
        )}
      </form>
    </div>
  );
}

export default Cadastro;
