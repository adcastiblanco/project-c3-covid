import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './Header';
import Sidebar from './Sidebar';
import MenuApps from './MenuApps';

import layoutStyles from '../../assets/styles/Layout/layout';

const Layout = (props) => {
  //Import styles
  const classes = layoutStyles();

  //state
  const [openMenu, setOpenMenu] = useState(false);

  // if (props.user.id === null) {
  //   return <Redirect to="/login" />;
  // }

  return (
    <>
      <Header openMenuApp={{ openMenu: [openMenu, setOpenMenu] }}></Header>
      <div className={classes.root}>
        <MenuApps openMenuApp={{ openMenu: [openMenu, setOpenMenu] }} />
        <Sidebar></Sidebar>
        {props.children}
      </div>
    </>
  );
};

// export default Layout;

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(Layout);
