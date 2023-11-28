import "../SobrenosTransp/SobreTrans.css";
import quemsomos from "../../../assets/PET FELIZ (2).png"
import equipe from "../../../Components/img/mulhercomdog.jpg"
import lupa from '../../../Components/img/transparencia.jpeg'
import propaganda2 from "../../../Components/img/propaganda2.jpg"
import { Link } from "react-router-dom";


export default function SobreTrans() {
  return (
    <div className="sobrenos">
      <div className="sobrenos-body">
        <div className="sobrenos-nav-all">
          <div className="sobrenos-nav1">
          <Link to="/SobrenosInicial"><a href="">Quem Somos?</a></Link>
          </div>
          <div className="sobrenos-nav2">
          <Link to="/SobrenosAjudar"><a href="">Como Ajudar?</a></Link>
          </div>
        </div>

        <div className="sobrenos-img1">
          <img src={quemsomos} alt="logo" />
        </div>
        <div className="sobrenos-title">
          <h1>Transparência</h1>
        </div>

        <div className="propaganda">
          <img src={propaganda2} alt="logo" />
        </div>


        <div className="sobrenos-text1">
          <p>

            A transparência é uma das nossas principais prioridades. Sabemos que nossos doadores querem ter certeza do bem estar de seus futuros pets. por isso que nos esforçamos para fornecer informações claras e precisas sobre as condições reais dos animais para serem adotados.
          </p>
        </div>


        <div className="sobrenos-text2">
          <p>

            Nós acreditamos que a  transparência é fundamental para construir confiança com nossos doadores e garantir que nossa plataforma possa continuar ajudando animais necessitados.


          </p>
        </div>

        <div className="sobrenos-img2">
          <img src={equipe} alt="logo" />
        </div>

        <div className="sobrenos-text3">
          <p>
          Nosso objetivo é fazer a diferença na vida dos animais que resgatamos e ajudar a educar a comunidade sobre a importância da adoção responsável de animais.  Estamos comprometidos em ajudar os animais necessitados a encontrar suas  famílias amorosas, oferecendo serviços de adoção, doação e aconselhamento.
          </p>
        </div>

        <div className="sobrenos-img4">
         <img src={lupa}></img>
        </div>
      </div>
    </div>
  );
}