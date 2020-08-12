import React from 'react';
import { MdDehaze } from 'react-icons/md';
import StyledBurger from './styles';

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <MdDehaze style={{ alignSelf: 'center' }} size={30} color='white' />
    </StyledBurger>
  );
};

export default Burger;
