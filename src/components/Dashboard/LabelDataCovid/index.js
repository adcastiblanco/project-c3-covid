import React from 'react';
import { Statistic } from 'antd';
import { CovidNumbersContainer, CovidNumbersItem, CovidNumbersData, TextAccumulated } from './styles';

const Label = ({ title, data, color }) => {
  return (
    <CovidNumbersContainer>
      <CovidNumbersItem border={color}>
        <CovidNumbersData>
          <Statistic
            title={title}
            value={data}
          />
        </CovidNumbersData>
        <TextAccumulated>Acumulados</TextAccumulated>
      </CovidNumbersItem>
    </CovidNumbersContainer>
  );
};

export default Label;
