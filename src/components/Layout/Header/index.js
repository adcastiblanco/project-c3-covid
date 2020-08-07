import React from 'react';
import { Link } from 'react-router-dom';

import { MainHeader, LogoContainer, MenuHeader, NavMenu, NavList, NavItem } from './styles'

import logo from '../../../assets/images/brand.png';

const Header = () => {
  const session = () => {
    let username = window.localStorage.username
    if (username !== undefined) {
      return (
        <>
          <NavItem className="header-menu__item">
            <p>Bienvenido <span>{username}</span></p>
          </NavItem>
          <NavItem className="header-menu__item">
            <Link to="/login" onClick={() => window.localStorage.clear()}>Cerrar sesión</Link>
          </NavItem>
        </>
      )
    }
    else {
      return (
        <NavItem className="header-menu__item">
          <Link to="/login">Iniciar Sesión</Link>
        </NavItem>
      )
    }
  }
  return (
    <MainHeader>
      <LogoContainer>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </LogoContainer>
      <MenuHeader className="header">
        <NavMenu className="header-menu">
          <NavList className="header-menu__list">
            <NavItem className="header-menu__item">
              <Link to="/">Inicio</Link>
            </NavItem>
            <NavItem className="header-menu__item">
              <Link to="/">Perfil</Link>
            </NavItem>
            {session()}
          </NavList>
        </NavMenu>
      </MenuHeader>
    </MainHeader>
  )
};

export default Header;
