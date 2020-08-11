import styled from 'styled-components';

export const Aside = styled.aside`
  background: #1d2129;
  grid-area: side;
  display: flex;
  flex-flow: column;
  height: 100%;
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
