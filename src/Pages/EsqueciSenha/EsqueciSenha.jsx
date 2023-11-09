import "../EsqueciSenha/EsqueciSenha.css";
import img1 from '../../assets/esqueciSenhaanimais.jpg'
import { Link } from "react-router-dom";

export default function EsqueciSenha() {
  return (
    <div className="esquecisenha-body">
      <div className="esquecisenha-img">
        <img
          src={img1}
          alt=""
        />
      </div>
      <div className="esquecisenha-form-all">
        <div className="esquecisenha-title">
          <h1>Esqueci minha senha!</h1>
        </div>
        <div className="esquecisenha-form">
          <input type="email" id="email" name="email" />
        </div>
        <div className="esquecisenha-buttom-entrar">
          <a href="">ENTRAR</a>
        </div>
        <div className="linhas-css">
        </div>

        <div className="esquecisenha-buttom-voltar">
        <Link to="/Login">  <a href="">VOLTAR</a> </Link>
        </div>
      </div>
    </div>
  );
}
