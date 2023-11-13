import { useState } from 'react';
import img1 from '../../assets/logingatinho.jpeg'; // Import the image correctly
import '../Login/Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Login() {

  const navigate = useNavigate();
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
  });

  const setMensagem = useState('');

  const handleInputChange = (evento) => {
    const { name, value } = evento.target;
    setUsuario((prevUsuario) => ({
      ...prevUsuario,
      [name]: value,
    }));
  };

  const handleLogin = async (evento) => {
    evento.preventDefault();

    try {
      if (!usuario.Email || !usuario.Senha) {
        setMensagem('Preencha ambos os campos.');
        return;
      }
      const response = await axios.post("https://petfeliz.azurewebsites.net/api/Usuario/login", usuario);
      if (response.status === 200) {
        navigate("/alterarPerfil")
      } else {
        setMensagem('Usuário ou senha incorretos.');
      }
    } catch (error) {
      
      console.error("Erro na solicitação:", error);

    }
  };

  return (
    <div className="login-body">
      <div className="login-img">
        <img className="login-img" src={img1} alt="Login" />
      </div>
      <div className="login-form-all">
        <div className="login-title">
          <h1>Faça seu Login!</h1>
        </div>

        <form className="login-form" onSubmit={handleLogin}>
          <input type="email" id="email" name="Email" placeholder="E-mail" value={usuario.Email} onChange={handleInputChange} />
          <input type="password" id="senha" name="Senha" placeholder="Senha" value={usuario.Senha} onChange={handleInputChange} />
          <div className="login-buttom-entrar" onChange={handleInputChange}>
            <a type="submit">ENTRAR</a> 
          </div>
        </form>

        <div className="login-buttom-senha">
        <Link to="/EsqueciSenha"><a href="#">Esqueceu a Senha?</a></Link>
        </div>
        <div className="login-buttom-cadastro">
        <Link to="/Cadastro" >  <a href="#">Cadastre-se</a></Link>
        </div>
      </div>
    </div>
  );
}

export default Login;