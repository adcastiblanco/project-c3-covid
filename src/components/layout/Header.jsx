import React, { useState } from 'react';
import {
  Divider,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  MenuItem,
  Menu,
} from '@material-ui/core';
import AppsIcon from '@material-ui/icons/Apps';
import AccountCircle from '@material-ui/icons/AccountCircle';
import headerStyles from '../../assets/styles/Layout/header';

const Header = ({ openMenuApp }) => {
  const classes = headerStyles();
  //state
  const [anchorEl, setAnchorEl] = useState(null);

  //state open menu Apps
  const {
    openMenu: [openMenu, setOpenMenu],
  } = {
    openMenu: useState(false),
    ...openMenuApp,
  };

  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenMenuApps = () => {
    !openMenu && setOpenMenu(true);
  };

  return (
    <AppBar position="static">
      <Toolbar className={classes.header}>
        <div className={classes.header__app}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleOpenMenuApps}
          >
            <AppsIcon />
          </IconButton>
          <Typography variant="h4" className={classes.title}>
            Mi App
          </Typography>
        </div>
        <div>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Perfil</MenuItem>
            <MenuItem onClick={handleClose}>Cerrar sesión</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
