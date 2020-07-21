import React, { useState } from 'react';

import { NavLink, Redirect } from 'react-router-dom';
import { firebaseConfig } from '../../utils/firebase';

import { connect } from 'react-redux';
import { loginRequest } from '../../actions/index';

import { Typography, TextField, Button } from '@material-ui/core';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import useStyles from '../../assets/styles/Login/LoginStyles';

const Login = (props) => {
  const classes = useStyles();

  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLoginWithEmail = (e) => {
    e.preventDefault();
    const email = form.username;
    const password = form.password;
    firebaseConfig
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res);
        props.loginRequest({
          id: res.user.uid,
          username: res.user.displayName,
          email: res.user.email,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  if (props.user.id !== null) {
    return <Redirect to="/" />;
  }

  return (
    <React.Fragment>
      <Typography variant="h5">Inicio de sesión</Typography>

      <form className={classes.loginForm} onSubmit={handleLoginWithEmail}>
        <TextField
          label="Nombre de usuario"
          name="username"
          type="text"
          value={form.username}
          variant="outlined"
          autoComplete="username"
          onChange={handleChange}
          required
          autoFocus
        />
        <TextField
          label="Contraseña"
          name="password"
          type="password"
          value={form.password}
          variant="outlined"
          autoComplete="password"
          onChange={handleChange}
          required
        />
        <Button color="primary" type="submit" variant="contained">
          Iniciar sesión
          <LockOpenIcon fontSize="small" />
        </Button>
        <Typography variant="body1">
          <NavLink to={'/auth/forgotpw'}>¿Olvido su contraseña?</NavLink>
        </Typography>
      </form>
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

export default connect(mapStateToProps, mapDispathcToProps)(Login);
