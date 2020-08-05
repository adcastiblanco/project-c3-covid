import React from 'react';

const DataCard = ({ title, children }) => {
  return (
    <div className='container'>
      <div className='title'>
        <h3>{title}</h3>
      </div>
      <div className='graph'>
        {children}
      </div>
    </div>
  );
};

export default DataCard;
