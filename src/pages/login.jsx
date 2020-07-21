import React, { useState } from 'react';
import Login from '../components/login/Login';
import SocialMedia from '../components/login/SocialMedia';
import PageLoading from '../components/Loader/PageLoading';

// Imports style components
import { Grid, Typography, CardContent, Card } from '@material-ui/core';
import useStyles from '../assets/styles/Login/LoginStyles';

const login = () => {
  const classes = useStyles();

  const [loader, setloader] = useState(false);

  const handleLoader = (value) => {
    setloader(value);
  };

  if (loader) {
    return <PageLoading></PageLoading>;
  }

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Grid className={classes.grid} container>
          <Card className={classes.cardContainer} variant="outlined">
            <CardContent className={classes.mediaContainer}>
              <SocialMedia handleLoader={handleLoader} />
            </CardContent>
            <CardContent className={classes.authContainer}>
              <Typography variant="h2" color="primary">
                Mi App
              </Typography>
              <Login />
            </CardContent>
          </Card>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default login;
