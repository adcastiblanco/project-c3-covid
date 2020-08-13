import styled, { keyframes } from 'styled-components';
import { device } from '../../../assets/styles/Breakpoints';

const animationCountriesList = keyframes`
  from {
    height: 0;
  }

  to {
    height: 300px;
  }
`;

export const MenuContainer = styled.div`
  grid-area: menu;
  position: relative;
  top: 0;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  display: flex;
  width: 100%;
  height: 100%;
  @media ${device.mobileL} {
    grid-row: 2 / 3;
    grid-column: 1 / 5;
  }
`;

export const SelectCountry = styled.div`
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  width: 80%;
  padding: 0 5%;
  box-sizing: border-box;
`;

export const ListCountries = styled.ul`
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
  animation: ${animationCountriesList} 0.3s alternate;
  z-index: 1;
  padding: 0;
  margin: 0;
  width: 80%;
  position: absolute;
  top: 84%;
  height: 300px;
  overflow-y: scroll;
`;

export const CountryItem = styled.li`
  list-style-type: none;

  &:first-of-type {
    > button {
      border-top: 1px solid var(--gray-color-C3);
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }
  }

  &:last-of-type > button {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`;

export const CountryName = styled.button`
  display: flex;
  justify-content: center;
  background-color: white;
  font-size: 16px;
  padding: 15px 20px;
  border: 0;
  border-bottom: 1px solid #ccc;
  width: 100%;
  text-align: left;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
  &:hover,
  &:focus {
    cursor: pointer;
    font-weight: bold;
    background-color: #ccc;
  }
`;
