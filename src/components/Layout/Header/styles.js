import styled from 'styled-components';

export const MainHeader = styled.header`
  grid-area: head;
  display: flex;
  justify-content: space-around;
  background-color: #252a34;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  height: 55px;
  width: 100%;
`;

export const LogoContainer = styled.figure`
  grid-column: 1 / 2;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  box-shadow: 0px 0px 4px 0px #252a34;
  background: #1d2129;
  margin-left: 8%;
  & a {
    text-align: center;
  }
  & img {
    height: 100%;
    width: 80%;
  }
`;

export const MenuHeader = styled.menu`
  grid-column: 2 / 6;
  margin: 0;
`;

export const NavMenu = styled.nav`
  height: 100%;
  margin: 0;
  padding-right: 1em;
`;

export const NavList = styled.ul`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 0;
  font-weight: bold;
`;

export const NavItem = styled.li`
  list-style: none;
  margin-right: 1.8em;
  align-items: center;
  color: white;
  & span {
    color: #ff445b;
  }
  & a {
    color: white;
    text-decoration: none;
    font-weight: bold;
    &:hover {
      color: #08d9d6;
      transition: 0.2s;
    }
  }
`;
