import React from 'react';

const Label = ({ title, data }) => {
  return (
    <>
      <div className='Label'>
        <h5>{title}</h5>
        <h4>{data}</h4>
        <h6>acumulados</h6>
      </div>
    </>
  );
};

export default Label;
