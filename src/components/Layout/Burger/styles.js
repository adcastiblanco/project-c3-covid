import styled from 'styled-components';
import { device } from '../../../assets/styles/Breakpoints';

const StyledBurger = styled.button`
  display: none;
  position: absolute;
  top: 10px;
  left: 10px;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background-color: #252a34;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  grid-column: 1 / 2;
  &:focus {
    outline: none;
  }
  @media ${device.tablet} {
    position: fixed;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    /* background: blue; */
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }

  @media ${device.tablet} {
    display: flex;
    grid-column: 2 / 3;
    /* background: blue; */
  }
`;

export default StyledBurger;
