import React from 'react';

const DataCard = ({ title, children }) => {
  return (
    <div className='container'>
      <div className='title'>
        <h1>{title}</h1>
      </div>
      <div className='graph'>
        {children}
      </div>
    </div>
  );
};

export default DataCard;
