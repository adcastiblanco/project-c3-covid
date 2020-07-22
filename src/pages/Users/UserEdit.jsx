import React, { useState, useEffect } from 'react';

import UserForm from '../../components/users/UserForm';

import { Breadcrumbs, Link } from '@material-ui/core';

const UserEdit = (props) => {
  const [form, setform] = useState({
    displayName: '',
    email: '',
  });


  useEffect(() => {
    db.collection('users')
      .where('id', '==', props.match.params.userId)
      .get()
      .then((usersRef) => {
        usersRef.forEach((doc) => {
          setform({
            ...form,
            displayName: doc.data().displayName,
            email: doc.data().email,
          });
        });
      });
  }, []);

  const handleChange = (e) => {
    setform({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <React.Fragment>
      <Breadcrumbs color="inherit" aria-label="breadcrumb">
        <Link color="inherit">Usuarios</Link>
        <Link color="textPrimary">Modificar usuario</Link>
      </Breadcrumbs>

      <UserForm value={form} onChange={handleChange} onSubmit={onSubmit} />
    </React.Fragment>
  );
};

export default UserEdit;
