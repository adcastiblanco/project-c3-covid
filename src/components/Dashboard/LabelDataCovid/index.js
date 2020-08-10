import React from 'react';

import { Statistic } from 'antd'
import { CovidNumbersContainer, CovidNumbersItem, CovidNumbersTitle, CovidNumbersData, TextAccumulated } from './styles'

const Label = ({ title, data }) => {
  return (
    <CovidNumbersContainer>
      <CovidNumbersItem>
        <CovidNumbersData>
          <Statistic title={title}
            value={data} />
        </CovidNumbersData>
        <TextAccumulated>Acumulados</TextAccumulated>
      </CovidNumbersItem>
    </CovidNumbersContainer>
  );
};

export default Label;
