import React from 'react';
import { Link } from 'react-router-dom';
import {
  MainHeader,
  MenuHeader,
  LogoContainer,
  NavMenu,
  NavList,
  NavItem,
} from './styles';
import logo from '../../../assets/images/brand.png';

const Header = () => {
  const session = () => {
    const { username } = window.localStorage;
    if (username !== undefined) {
      return (
        <>
          <NavItem className="header-menu__item welcome">
            <p>
              Bienvenido <span>{username}</span>
            </p>
          </NavItem>
          <NavItem className="header-menu__item">
            <Link to="/login" onClick={() => window.localStorage.clear()}>
              Cerrar sesión
            </Link>
          </NavItem>
        </>
      );
    }
    return (
      <NavItem className="header-menu__item">
        <Link to="/login">Iniciar Sesión</Link>
      </NavItem>
    );
  };
  return (
    <MainHeader>
      <LogoContainer>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </LogoContainer>
      <MenuHeader className="header">
        <NavMenu className="header-menu">
          <NavList className="header-menu__list">{session()}</NavList>
        </NavMenu>
      </MenuHeader>
    </MainHeader>
  );
};

export default Header;
