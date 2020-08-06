import React, { useState } from 'react';

const DropDownMenu = ({ title, items = [], multiSelect = false }) => {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState([]);
  const toggle = () => setOpen(!open);
  const handledOnClick = (item) => {
    if(!selection.some((current) => current.name))
  };

  return (
    <div className='dd-wrapper'>
      <div
        tabIndex={0}
        className='dd-header'
        role='button'
        onKeyPress={() => toggle(!open)}
        onClick={() => toggle(!open)}
      >
        <div className='dd-header__title'>
          <p className='dd-header__title--bold'>{title}</p>
        </div>
        <div className='dd-header__action'>
          <p>{open ? 'Close' : 'Open'}</p>
        </div>
      </div>
      {open && (
        <ul className='dd-list'>
          {items.map((item) => (
            <li className='dd-list-item' key={item.alpha3Code}>
              <button type='button' onClick={() => handledOnClick(item)}>
                <span>{item.name}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropDownMenu;
