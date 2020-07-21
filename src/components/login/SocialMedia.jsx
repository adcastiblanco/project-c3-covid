import React from 'react';
import { Redirect } from 'react-router-dom';

import {
  firebaseConfig,
  googleAuthProvider,
  facebookAuthProvider,
} from '../../utils/firebase';

import { connect } from 'react-redux';
import { loginRequest } from '../../actions/index';

import { Button } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import useStyles from '../../assets/styles/Login/LoginStyles';
import TwitterIcon from '@material-ui/icons/Twitter';

const SocialMedia = (props) => {
  const classes = useStyles();
  const db = firebaseConfig.firestore();

  const handleLoginWithGoogle = () => {
    props.handleLoader(false);
    firebaseConfig
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then((response) => {
        props.handleLoader(true);
        db.collection('users')
          .doc(response.user.uid)
          .set({
            displayName: response.user.displayName,
            email: response.user.email,
          })
          .then(() => {
            props.loginRequest({
              id: response.user.uid,
              username: response.user.displayName,
              email: response.user.email,
            });
            props.handleLoader(false);
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  };

  const handleLoginWithFacebook = () => {
    props.handleLoader(false);
    firebaseConfig
      .auth()
      .signInWithPopup(facebookAuthProvider)
      .then((response) => {
        props.handleLoader(true);
        db.collection('users')
          .doc(response.user.uid)
          .set({
            id: response.user.uid,
            displayName: response.user.displayName,
            email: response.user.email,
          })
          .then(() => {
            props.loginRequest({
              id: response.user.uid,
              username: response.user.displayName,
              email: response.user.email,
            });
            props.handleLoader(false);
          })
          .catch((error) => console.log(error));
      })
      .catch((err) => console.log(err));
  };

  const handleClick = () => {
    props.handleLoader(true);
  };

  if (props.user.id !== null) {
    return <Redirect to="/" />;
  }

  return (
    <React.Fragment>
      <div className={classes.socialMedia}>
        <Button
          size="large"
          variant="contained"
          color="primary"
          onClick={handleLoginWithFacebook}
        >
          <FacebookIcon />
          Iniciar con Facebook
        </Button>
        <Button
          size="large"
          variant="contained"
          color="default"
          onClick={handleLoginWithGoogle}
        >
          Iniciar con Google
        </Button>
        <Button
          size="large"
          variant="contained"
          color="secondary"
          onClick={handleClick}
        >
          <TwitterIcon />
          Iniciar con Twitter
        </Button>
      </div>
    </React.Fragment>
  );
};

const mapDispathcToProps = {
  loginRequest,
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, mapDispathcToProps)(SocialMedia);
