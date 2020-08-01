import React from 'react';

const DataCard = ({title, graph}) => {
  return (
    <div className='container'>
      <div className='title'>
        <h1>{title}</h1>
      </div>
      <div className='graph'>
        {graph}
      </div>
    </div>
  );
}

export default DataCard;