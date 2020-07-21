import React from 'react';

import { TextField, Button } from '@material-ui/core';

import useStyles from '../../assets/styles/Login/LoginStyles';
const UserForm = (props) => {
  const classes = useStyles();

  const handleClick = (e) => {
    console.log('Button was clicked');
  };

  return (
    <form className={classes.loginForm} onSubmit={props.onSubmit}>
      <TextField
        label="Nombre de usuario"
        name="displayName"
        type="text"
        value={props.value.displayName}
        variant="outlined"
        autoComplete="displayName"
        onChange={props.onChange}
        autoFocus
      />
      <TextField
        label="Email"
        name="email"
        type="text"
        value={props.value.email}
        variant="outlined"
        autoComplete="displayName"
        onChange={props.onChange}
      />

      <Button color="primary" type="submit" variant="contained">
        Guardar
      </Button>
    </form>
  );
};

export default UserForm;
