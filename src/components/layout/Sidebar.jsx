import React, { useState } from 'react';
import clsx from 'clsx';
import { connect } from 'react-redux';
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton,
  Divider,
  Typography,
} from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import sidebarStyles from '../../assets/styles/Layout/sidebar';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import { Link } from 'react-router-dom';
const Sidebar = (props) => {
  //Import styles sidebar
  const classes = sidebarStyles();
  const [open, setOpen] = useState(true);

  const handleDrawer = () => {
    open ? setOpen(false) : setOpen(true);
  };

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(classes.paper, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
    >
      <div
        className={clsx(classes.drawerHeader, {
          [classes.drawerHeaderOpen]: open,
          [classes.drawerHeaderClose]: !open,
        })}
      >
        {open ? (
          <>
            <img
              className={classes.drawerHeader__img}
              src={props.startapp.icon}
            ></img>

            <Typography variant="body1">{props.startapp.appname}</Typography>
            <IconButton onClick={handleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </>
        ) : (
          <IconButton onClick={handleDrawer}>
            <ChevronRightIcon />
          </IconButton>
        )}
      </div>
      <Divider />
      <List>
        <Link to="/users">
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Usuarios" />
          </ListItem>
        </Link>
      </List>
    </Drawer>
  );
};

const mapStateToProps = (state) => {
  return {
    startapp: state.startapp,
  };
};

export default connect(mapStateToProps, null)(Sidebar);
