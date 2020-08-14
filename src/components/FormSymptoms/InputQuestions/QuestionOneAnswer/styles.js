import styled from 'styled-components';
import { device } from '../../../../assets/styles/Breakpoints';

export const ContainerAnswer = styled.div`
  display: flex;
  justify-content: space-evenly;
  @media ${device.tablet} {
    flex-direction: column;
    align-items: center;
  }
  div {
    width: 40%;
    display: flex;
    border: 1px solid lightgray;
    align-items: center;
    margin-bottom: 8px;
    border-radius: 5px;
    label {
      width: 100%;
      display: block;
      cursor: pointer;
      margin: 5px;
      font-weight: bold;
    }
    &:hover {
      background-color: #f1f1f1;
      transition: 0.4s;
    }
  }
`;
