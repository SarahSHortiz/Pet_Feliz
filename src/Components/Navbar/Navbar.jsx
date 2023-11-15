import  { Component } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { MenuItems } from "../Navbar/MenuItems";

class Navbar extends Component {
  state = {
    showDropdown: false,
    isLoggedIn: false, // Defina o estado inicial como não logado
  };

  componentDidMount() {
    // Simulação de verificação de login ao carregar a página (use sua lógica real aqui)
    const isLoggedIn = localStorage.getItem("isLoggedIn"); // Pode ser uma verificação de token, cookie ou sessão
    if (isLoggedIn) {
      this.setState({ isLoggedIn: true });
    }
  }

  handleDropdown = () => {
    this.setState((prevState) => ({
      showDropdown: !prevState.showDropdown,
    }));
  };

  handleLogoff = () => {
    // Simulação de logout (use sua lógica real aqui)
    localStorage.removeItem("isLoggedIn"); // Limpar o token, cookie ou sessão
    this.setState({ isLoggedIn: false, showDropdown: false });
  };

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
              <Link className={item.cName} to={item.URL}>
                {item.title}
              </Link>
            </li>
          ))}
          {isLoggedIn ? (
            // Conteúdo a ser exibido quando o usuário está logado
            <li className="dropdown">
              <span onClick={this.handleDropdown} className="nav_links">
                Perfil
              </span>
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
            // Conteúdo a ser exibido quando o usuário não está logado
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
}

export default Navbar;
