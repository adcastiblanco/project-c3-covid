import React from 'react';
import { Redirect } from 'react-router-dom';


import { connect } from 'react-redux';
import { loginRequest } from '../../actions/index';

import { Button } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import useStyles from '../../assets/styles/Login/LoginStyles';
import TwitterIcon from '@material-ui/icons/Twitter';

const SocialMedia = (props) => {
  const classes = useStyles();


  const handleLoginWithGoogle = () => {
    props.handleLoader(false);
    
  };

  const handleLoginWithFacebook = () => {
    props.handleLoader(false);
    
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
