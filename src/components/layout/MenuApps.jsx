import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setApps } from '../../actions/index';
import {
  Drawer,
  Toolbar,
  IconButton,
  Typography,
  Card,
  CardActionArea,
  CardContent,
  Box,
  CardMedia,
} from '@material-ui/core';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import menuAppsStyles from '../../assets/styles/Layout/menuApps';

const MenuApps = (props) => {
  //Props
  const { openMenuApp } = props;

  //Import styles
  const classes = menuAppsStyles();

  //State open menu Apss
  const {
    openMenu: [openMenu, setOpenMenu],
  } = {
    openMenu: useState(false),
    ...openMenuApp,
  };

  const toogleDrawer = () => {
    setOpenMenu(false);
  };

  const handleSetApps = (value) => {
    props.setApps({
      id: value.id,
      appname: value.appname,
      icon: value.icon,
    });
    setOpenMenu(false);
  };
  return (
    <>
      <Drawer
        variant="temporary"
        open={openMenu}
        classes={{
          paper: classes.menuApps,
        }}
        onClose={toogleDrawer}
      >
        <Box boxShadow={2}>
          <Toolbar className={classes.toolbar}>
            <IconButton onClick={toogleDrawer} className={classes.iconButton}>
              <ArrowBackIcon></ArrowBackIcon>
            </IconButton>
            <Typography variant="subtitle1" className={classes.title}>
              Modúlos
            </Typography>
          </Toolbar>
        </Box>

        <div className={classes.list}>
          {props.apps
            .filter((apps) => apps.enabled === true)
            .map((apps) => (
              <Card key={apps.id} className={classes.listItem} color="action">
                <CardActionArea onClick={() => handleSetApps(apps)}>
                  <CardContent>
                    <CardMedia
                      component="img"
                      image={apps.icon}
                      className={classes.listItem__icon}
                    ></CardMedia>
                    <Typography>{apps.appname}</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
        </div>
      </Drawer>
    </>
  );
};

const mapDispathcToProps = {
  setApps,
};

const mapStateToProps = (state) => {
  return {
    apps: state.apps,
  };
};

export default connect(mapStateToProps, mapDispathcToProps)(MenuApps);
