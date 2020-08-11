import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import App from './style';

const Layout = ({ children }) => (
  <App>
    <Header />
    <Sidebar />
    {children}
    <Footer />
  </App>
);

export default Layout;
