import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuItemsLogin } from '../NavLogin/MenuItemsLogin';
import './NavbarLogin.css';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { AuthContextFunctions } from '../../../AuthContext';
// import {LogoutButton} from '../../../AuthContext';



// const LogoutButton  = () => {
//   localStorage.removeItem('@jwt');
// AuthContextFunctions.SaveJWT('');
// window.location.href = '/home'; 
// };
// async function

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
     <h1 className="Navbar-logo" style={{textDecoration:'none',}}>Pet Feliz</h1>
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
            style={{ overflowY: 'auto',  backgroundColor: "black" }}
          >
            PERFIL
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            style={{ overflowY: 'auto' }}
          >

            <Link style={{ textDecoration: 'none', color: "black"}}to='/perfil'><MenuItem onClick={handleClose}>PERFIL</MenuItem></Link>
            <Link  style={{ textDecoration: 'none', color: "black"}}to='/AnimaisCadastrados'><MenuItem onClick={handleClose}>ANIMAIS CADASTRADOS</MenuItem></Link>
            <Link style={{ textDecoration: 'none',color: "black"}} to='/alterarperfil'><MenuItem onClick={handleClose}>ALTERAR PERFIL</MenuItem></Link>
           <MenuItem onClick={AuthContextFunctions.LogoutButton} style={{ textDecoration: 'none', color: 'red'}}>SAIR</MenuItem>
          </Menu>
        </div>
      </ul>
    </nav>
  );
}

export default NavbarLogin;
