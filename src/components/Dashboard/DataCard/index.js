import React from 'react';

import { GraphContainer, GraphTitle, GraphItem } from './styles'

const DataCard = ({ title, children, containerClass }) => {
  return (
    <GraphContainer className={containerClass}>
      <GraphTitle>{title}</GraphTitle>
      <GraphItem className='graph'>
        {children}
      </GraphItem>
    </GraphContainer>
  );
};

export default DataCard;
