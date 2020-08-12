import React, { useState } from 'react';
import App from './style';
import Header from './Header';
import Footer from './Footer';
import Burger from './Burger';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <App>
      <Header />
      <div>
        <Burger open={open} setOpen={setOpen} />
        <Sidebar open={open} setOpen={setOpen} />
      </div>
      {children}
      <Footer />
    </App>
  );
};

export default Layout;
