import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuItemsLogin } from '../NavLogin/MenuItemsLogin';
import './NavbarLogin.css';

export default function NavbarLogin() {
  const [clicked, setClicked] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="NavbarItems">
      <h1 className="Navbar-logo">Pet Feliz</h1>
      <div className="menu_icons" onClick={handleClick}>
        <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>

      <ul className={clicked ? 'Nav-menu active' : 'Nav-menu'}>
        {MenuItemsLogin.map((item, index) => (
          <li key={index}>
            <Link className={item.cName} to={item.URL}>
              <i></i>
              {item.title}
            </Link>
          </li>
        ))}
        <div className="menu">
          <button onClick={toggleMenu}>Menu</button>
          {menuOpen && (
            <div className="menu-options">
              <ul>
                <li>
                  <Link to="/perfil">Perfil</Link>
                </li>
                {/* Adicione aqui outros links do menu, se necessário */}
              </ul>
            </div>
          )}
        </div>
      </ul>
    </nav>
  );
}
