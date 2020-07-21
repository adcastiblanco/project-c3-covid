import { makeStyles } from "@material-ui/core/styles";
const sidebarStyles = makeStyles((theme) => ({
  paper: {
    position: "static",
    width: theme.vars.sideBarWidht,
    backgroundColor: theme.palette.background.secundary,
  },
  title: {
    marginRight: "0.2em",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0.5, 1),
  },
  drawerHeader__img: {
    backgroundSize: "cover",
    width: "30px",
    marginLeft: "0.5em",
    marginRight: "0.3em",
  },
  drawerHeaderOpen: {
    justifyContent: "space-between",
  },
  drawerHeaderClose: {
    justifyContent: "flex-start",
  },

  drawerOpen: {
    width: theme.vars.sideBarWidht,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
}));

export default sidebarStyles;
