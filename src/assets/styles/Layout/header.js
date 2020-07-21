import { makeStyles } from "@material-ui/core/styles";
const headerStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: theme.palette.primary.default,
    display: "flex",
    justifyContent: "space-between",
  },
  header__app: {
    width: theme.vars.sideBarWidht - 24,
    display: "flex",
    alignItems: "center",
    height: "64px",
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1.3),
  },
  title: {
    color: theme.palette.white,
  },
}));
export default headerStyles;
