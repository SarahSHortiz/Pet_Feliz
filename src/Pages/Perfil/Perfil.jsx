import { useEffect, useState } from 'react';
import "../Perfil/Perfil.css";
import { AuthContextFunctions } from '../../AuthContext';
import { Link } from 'react-router-dom';

export default function Perfil() {
  const [nome, setNome] = useState("");
  const [Cidade, setCidade] = useState({
    Nome_Cidade: ""
  });
  const [Estado, setEstado] = useState({
    Nome_Estado: ""
  });


  useEffect(() => {
    const usuariologado = AuthContextFunctions.CheckUserLogin();

    if (usuariologado) {
      const userData = JSON.parse(AuthContextFunctions.GetUserData());
      const usernome = userData.Nome_Usuario;
      const usercidade = userData.Nome_Cidade;
      const userestado = userData.Nome_Estado;
      setNome(usernome);
      setCidade(usercidade);
      setEstado(userestado);
      console.log(userData);
    }
  }, []);

  return (
    <div className="perfil-body">
      <div className="perfil-container">
        <div className="perfil-title">
          <h1>Meu Perfil</h1>
        </div>

        <form className="dados-usuario-perfil">
          <div className="question">
            <input type="text" readOnly value={nome} />
          </div>
          <div className="question">
            <input type="text" readOnly value={Cidade} />
          </div>
          <div className="question">
            <input type="text" readOnly value={Estado} />
          </div>
        </form>

        <div className='bnt-perfil-usuario'>
          <div className="perfil-bnt-cadastrar">
          <Link to='/Doe'><button>CADASTRAR ANIMAL</button></Link>
          </div>
          <div className="perfil-bnt-petscadastrados">
          <Link to='/AnimaisCadastrados'><button>ANIMAIS CADASTRADOS</button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}
