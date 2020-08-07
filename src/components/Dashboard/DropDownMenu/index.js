import React, { useState } from 'react';
import { MenuContainer, SelectCountry, ListCountries, CountryItem, CountryName } from './styles'

const DropDownMenu = ({ title, items = [], handleSetCountry, country }) => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  const handledOnClick = (item) => {
    handleSetCountry(item.name);
    toggle();
  };

  return (
    <MenuContainer>
      <SelectCountry
        tabIndex={0}
        role="button"
        onKeyPress={() => toggle(!open)}
        onClick={() => toggle(!open)}
      >
        <p><b>{country || title}</b></p>
        <p>{open ? 'Close' : 'Open'}</p>
      </SelectCountry>
      {open && (
        <ListCountries className="dd-list">
          {items.map((item) => (
            <CountryItem className="dd-list-item" key={item.alpha3Code}>
              <CountryName type="button" onClick={() => handledOnClick(item)}>
                {item.name}
              </CountryName>
            </CountryItem>
          ))}
        </ListCountries>
      )}
    </MenuContainer>
  );
};

export default DropDownMenu;
