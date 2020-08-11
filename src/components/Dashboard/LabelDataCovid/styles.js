import styled from 'styled-components';
import { dataBorder } from '../../../utils/dataColors';

export const CovidNumbersContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const CovidNumbersItem = styled.div`
  align-self: center;
  border-radius: 5px;
  background-color: var(--white-color);
  width: 80%;
  height: 65%;
  padding: 5px;
  text-align: center;
  border-left: ${({ border }) => (dataBorder(border))}
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
