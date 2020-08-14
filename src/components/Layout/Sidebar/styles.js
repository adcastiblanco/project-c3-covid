import styled from 'styled-components';
import { device } from '../../../assets/styles/Breakpoints';

export const Aside = styled.aside`
  background: #1d2129;
  grid-area: side;
  z-index: 2;
  display: flex;
  flex-flow: column;
  height: 105.3%;
  justify-content: space-between;
  padding-bottom: 10px;
  box-shadow: 1px 1px 4px -1px #252a34;
  p {
    margin: 0;
    text-align: center;
    color: #fbfbfb;
    font-weight: bold;
    font-size: 1em;
    span {
      color: #98ca3f;
    }
  }

  @media ${device.tablet} {
    position: fixed;
    top: 54px;
    height: 100vh;
    bottom: 0px;
    left: 0px;
    right: 60%;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-101%)')};
    transition: 0.3s;
  }

  @media ${device.mobileL} {
    right: 30%;
  }
`;

export const SidebarList = styled.ul`
  padding: 0;
  width: 100%;
  margin: 0;
  list-style: none;
`;

export const SidebarItem = styled.li`
  & a {
    display: block;
    line-height: 2.5em;
    height: 2.5em;
    text-align: center;
    text-decoration: none;
    color: #fbfbfb;
    font-size: 1em;
    font-weight: bold;
    border-radius: 5px;
    border: 1px solid transparent;
    &:hover {
      color: #08d9d6;
      transition: 0.2s;
      border: 1px solid #252a34;
      background-color: #252a34;
    }
  }
`;
