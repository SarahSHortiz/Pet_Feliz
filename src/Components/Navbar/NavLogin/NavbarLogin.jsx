import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuItemsLogin } from '../NavLogin/MenuItemsLogin';
import './NavbarLogin.css';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { AuthContextFunctions } from '../../../AuthContext';

function LogoutButton() {
  const handleLogout = () => {
      localStorage.removeItem(TOKEN_KEY);
    AuthContextFunctions.SaveJWT(''); // Limpa o token
    window.location.href = '/home'; // Redireciona para a página de login após o logout
  };

  return (
    <MenuItem onClick={handleLogout}>
    <Link to='/home'>  Logout</Link>
    </MenuItem>
  );
}

function NavbarLogin() {
  const [clicked, setClicked] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleClick2 = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
        <div style={{ overflowY: 'auto' }}>
          <Button
            id="basic-button"
            aria-controls="basic-menu"
            aria-haspopup="true"
            aria-expanded={Boolean(anchorEl)}
            onClick={handleClick2}
            style={{ overflowY: 'auto' }}
          >
            PERFIL
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            style={{ overflowY: 'auto', textDecoration: 'none' }}
          >
            <Link to='/perfil'><MenuItem onClick={handleClose}>PERFIL</MenuItem></Link>
            <Link to='/AnimaisCadastrados'><MenuItem onClick={handleClose}>ANIMAIS CADASTRADOS</MenuItem></Link>
            <Link to='/alterarsenha'><MenuItem onClick={handleClose}>ALTERAR SENHA</MenuItem></Link>
            <Link to='/alterarperfil'><MenuItem onClick={handleClose}>ALTERAR PERFIL</MenuItem></Link>
            <LogoutButton />
          </Menu>
        </div>
      </ul>
    </nav>
  );
}

export default NavbarLogin;
