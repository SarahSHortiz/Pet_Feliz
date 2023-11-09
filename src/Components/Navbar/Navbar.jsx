import { Component } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import {MenuItems} from '../Navbar/MenuItems';

class Navbar extends Component {
  state = { clicked: false, isLoggedIn: false };
  // Adicione um estado para controlar se o usuário está logado ou não

  handleDropdown = () => {
    // Função para mostrar/ocultar o dropdown
    this.setState({ showDropdown: !this.state.showDropdown });
  }

  render() {
    const { showDropdown, isLoggedIn } = this.state;

    return (
      <nav className="NavbarItems">
        <h1 className="Navbar-logo">Pet Feliz</h1>

        <div className="menu_icons" onClick={this.handleDropdown}>
          <i className={showDropdown ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        <ul className={showDropdown ? "Nav-menu active" : "Nav-menu"}>
          {MenuItems.map((item, index) => (
            <li key={index}>
              <Link className={item.cName} to={item.URL}>{item.title}</Link>
            </li>
          ))}
          {isLoggedIn ? (
            // Se o usuário estiver logado, mostrar o botão "Perfil" com o dropdown
            <li className="dropdown">
              <span onClick={this.handleDropdown} className="nav_links">Perfil</span>
              {showDropdown && (
                <div className="dropdown-content">
                  <Link to="/meu-perfil">Meu Perfil</Link>
                  <Link to="/alterar-senha">Alterar Senha</Link>
                  <Link to="/alterar-perfil">Alterar Perfil</Link>
                  <span onClick={this.handleLogoff}>Sair</span>
                </div>
              )}
            </li>
          ) : (
            // Se o usuário não estiver logado, mostrar o botão "Cadastre-se"
            <li>
              <Link to="/Cadastro">
                <button className="button-navbar">Cadastre-se</button>
              </Link>
            </li>
          )}
        </ul>
      </nav>
    );
  }

  handleLogoff = () => {
    // Função para realizar o logoff (logout) do usuário
    // Você deve implementar a lógica de logout aqui, por exemplo, definindo isLoggedIn como falso
    this.setState({ isLoggedIn: false, showDropdown: false });
  }
}

export default Navbar;
