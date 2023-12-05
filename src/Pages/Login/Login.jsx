import { useState } from 'react';
import img1 from '../../assets/logingatinho.jpeg'; // Import the image correctly
import '../Login/Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AuthContextFunctions } from '../../AuthContext';

function Login({setIsLoggedIn}) {

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
    Cidade: {
      Nome_Cidade: ''
    },
    Estado: {
      Nome_Estado: ''
    }
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
      const response = await axios.post("https://petfeliz.azurewebsites.net/api/Auth/Login", usuario);
      // const response = await axios.post("https://localhost:44302/api/Auth/Login", usuario);
      if (response.status === 200) {
      
        AuthContextFunctions.SaveJWT(response.data.token)
        const user = AuthContextFunctions.GetUserData();
        setIsLoggedIn(true);
        navigate("/", { state: { id: user.Cod_Usuario } })
      } else {
        setMensagem('Usuário ou senha incorretos.');
      }
    } catch (error) {
      console.error('Erro no login:', error);
      setMensagem('Erro no servidor.');

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
          <div className="login-buttom-entrar1" onChange={handleInputChange}>
            <button type="submit">ENTRAR</button> 
          </div>
        </form>

        <div className="login-buttom-senha">
        <Link to="/EsqueciSenha"><p>Esqueceu a Senha?</p></Link>
        </div>
        <div className="login-buttom-cadastro">
        <Link to="/Cadastro" ><p>Cadastre-se</p></Link>
        </div>
      </div>
    </div>
  );
}

export default Login;