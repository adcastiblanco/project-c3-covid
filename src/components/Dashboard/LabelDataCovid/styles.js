import styled from 'styled-components';
import { device } from '../../../assets/styles/Breakpoints';
import { dataBorder } from '../../../utils/dataColors';

export const CovidNumbersContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const CovidNumbersItem = styled.div`
  align-self: center;
  border-radius: 5px;
  background-color: var(--white-color);
  width: 140px;
  height: 55px;
  padding: 5px;
  text-align: center;
  border-left: ${({ border }) => dataBorder(border)};
  @media ${device.mobileM} {
    width: 305px;
  }
  @media ${device.mobileS} {
    width: 255px;
  }
`;

export const CovidNumbersTitle = styled.h5`
  font-size: 12px;
  color: var(--primary-color);
  margin: 0;
`;

export const CovidNumbersData = styled.h4`
  font-size: 15px;
  color: var(--black-color);
  margin: 0;
`;

export const TextAccumulated = styled.h6`
  font-size: 10px;
  color: #5a5c69;
  margin: 0;
`;
