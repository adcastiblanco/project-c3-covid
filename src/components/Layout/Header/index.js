import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../../assets/images/brand.png';
const Header = () => {
  const session = () => {
    let username = window.localStorage.username
    if (username !== undefined) {
      return (
        <>
          <li className="header-menu__item">
            <p>Bienvenido <span>{username}</span></p>
          </li>
          <li className="header-menu__item">
            <Link to="/login" onClick={() => window.localStorage.clear()}>Cerrar sesión</Link>
          </li>
        </>
      )
    }
    else {
      return (
        <li className="header-menu__item">
          <Link to="/login">Iniciar Sesión</Link>
        </li>
      )
    }
  }
  return (
    <header>
      <figure className="logo">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </figure>
      <div className="header">
        <menu className="header-menu">
          <ul className="header-menu__list">
            <li className="header-menu__item">
              <Link to="/">Inicio</Link>
            </li>
            <li className="header-menu__item">
              <Link to="/">Perfil</Link>
            </li>
            {session()}
          </ul>
        </menu>
      </div>
    </header>
  )
};

export default Header;
