import React from 'react';
import ListDataCards from './styles';

const ContainerDataCards = ({ children }) => {
  return (
    <ListDataCards>
      {children}
    </ListDataCards>
  );
};

export default ContainerDataCards;
