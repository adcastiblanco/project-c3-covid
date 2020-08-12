import React, { useState, useRef } from 'react';
import App from './style';
import Header from './Header';
import Footer from './Footer';
import Burger from './Burger';
import Sidebar from './Sidebar';
import useOnClickOutside from '../../hooks/useClickOutside';

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  return (
    <App>
      <Header />
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Sidebar open={open} setOpen={setOpen} />
      </div>
      {children}
      <Footer />
    </App>
  );
};

export default Layout;
