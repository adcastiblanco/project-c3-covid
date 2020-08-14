import styled from 'styled-components';
import { device } from '../../assets/styles/Breakpoints';

console.log(device);

export const RegisterSymptoms = styled.section`
  height: 100%;
  width: 100%;
  padding: 2% 15%;
  border-radius: 5px;
  box-sizing: border-box;
  @media ${device.tablet} {
    padding: 2%;
  }
`;

export const Form = styled.form`
  width: 100%;
  border-radius: 10px;
  background-color: var(--white-color);
  height: fit-content;
  box-sizing: border-box;
  padding: 2% 5%;
  p {
    font-weight: bold;
  }
  & .show {
    display: block !important;
  }

  & .symptoms-check {
    display: none;
    margin-bottom: 1em;
    & .one-SubContainer {
      grid-template-rows: repeat(3, 60px);
      @media ${device.tablet} {
        grid-template-rows: auto;
      }
    }
    & .two-SubContainer {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: repeat(2, 70px);
      @media ${device.tablet} {
        grid-template-rows: repeat(4, 65px);
        grid-template-columns: 1fr;
      }
      @media ${device.mobileL} {
        grid-template-rows: repeat(4, 90px);
        grid-template-columns: 1fr;
      }
    }
  }
`;

export const ButtonSymptoms = styled.button`
  margin: 2% auto 0;
  background-color: var(--primary-color);
  border: 1px solid lightgrey;
  padding: 10px 20px;
  width: 60%;
  border-radius: 10px;
  color: white;
  font-size: 1em;
  font-weight: bold;
  cursor: pointer;
  display: none;
  &:hover {
    background-color: var(--cian-color-C3);
    transition: 0.4s;
  }
  &.symptoms-send {
    display: none;
  }
`;
