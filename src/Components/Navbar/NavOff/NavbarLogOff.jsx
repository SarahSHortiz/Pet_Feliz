import { Component } from "react";
import "./NavbarLogOff.css";
import { Link } from "react-router-dom";
import { MenuItemsOff } from "./MenuItemsOff";

class NavbarLogOff extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItems1">
        <h1 className="Navbar-logo1">Pet Feliz</h1>

        <div className="menu_icons1" onClick={this.handleClick}>
          <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={this.state.clicked ? "Nav-menu active" : "Nav-menu"}>
          {MenuItemsOff.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.URL}>
                  <i></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
          <Link style={{ textDecoration: 'none'}}  to="/Cadastro">
            <button className="button-navbar1">Cadastre-se</button>
          </Link>
        </ul>
      </nav>
    );
  }
}

export default NavbarLogOff;

