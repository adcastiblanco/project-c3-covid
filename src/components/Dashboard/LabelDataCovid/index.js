import React from 'react';

import { CovidNumbersContainer, CovidNumbersItem, CovidNumbersTitle, CovidNumbersData, TextAccumulated } from './styles'

const Label = ({ title, data }) => {
  return (
    <CovidNumbersContainer>
      <CovidNumbersItem>
        <CovidNumbersTitle>{title}</CovidNumbersTitle>
        <CovidNumbersData>{data}</CovidNumbersData>
        <TextAccumulated>Acumulados</TextAccumulated>
      </CovidNumbersItem>
    </CovidNumbersContainer>
  );
};

export default Label;
