import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    height: '100%',
  },
  grid: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    [theme.breakpoints.down('sm')]: {
      width: 450,
    },
    width: 900,
    height: 405,
    maxWidth: '100%',
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    overflow: 'visible',
  },
  mediaContainer: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
    margin: 'auto',
    width: '50%',
    padding: 50,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },

  newsTitle: {
    display: 'flex',
    flexDirection: 'row',
    '& > *': {
      margin: theme.spacing(0, 0, 0, 1),
    },
  },
  authContainer: {
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
    width: '50%',
    padding: 50,
  },
  loginForm: {
    '& > *': {
      width: '100%',
      marginTop: 20,
      textAlign: 'center',
    },
  },
  socialMedia: {
    display: 'flex',
    flexDirection: 'column',
    '& > *': {
      marginTop: '1em',
    },
  },
}));

export default useStyles;
