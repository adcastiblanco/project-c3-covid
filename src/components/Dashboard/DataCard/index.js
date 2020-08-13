import React from 'react';
import { GraphContainer, GraphTitle, GraphItem } from './styles'

const DataCard = ({ title, children }) => {
  return (
    <GraphContainer>
      <GraphTitle>{title}</GraphTitle>
      <GraphItem className='graph'>
        {children}
      </GraphItem>
    </GraphContainer>
  );
};

export default DataCard;
