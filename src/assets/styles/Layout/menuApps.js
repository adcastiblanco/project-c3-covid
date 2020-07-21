import { makeStyles } from "@material-ui/core/styles";

const menuAppsStyles = makeStyles((theme) => ({
  iconButton: {
    color: theme.palette.white,
    marginRight: "0.3em",
  },
  title: {
    color: theme.palette.white,
  },
  menuApps: {
    width: theme.vars.sideBarWidht + 120,
  },
  toolbar: {
    backgroundColor: theme.palette.primary.default,
    color: theme.palette.white,
    padding: "0",
    paddingLeft: "5px",
  },
  list: {
    margin: ".5em",
    display: "grid",
    gridTemplateColumns: "auto auto",
    textAlign: "center",
  },
  listItem: {
    margin: "5px",
    backgroundColor: "#F9F9F9",
  },
  listItem__icon: {
    width: "50px",
    margin: "auto",
  },
}));

export default menuAppsStyles;
