import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { firebaseConfig } from '../../utils/firebase';

import {
  Container,
  Button,
  Breadcrumbs,
  Table,
  TableContainer,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const User = () => {
  const [users, setusers] = useState([]);
  const db = firebaseConfig.firestore();

  useEffect(() => {
    db.collection('users')
      .get()
      .then((usersRef) => {
        const usersList = usersRef.docs.map((user) => user.data());
        setusers(usersList);
      });
  }, []);

  const handleEdit = (value) => {
    console.log(value);
  };
  const handleDelet = (value) => {
    console.log(value);
  };

  const classes = useStyles();
  return (
    <Container>
      <Breadcrumbs color="inherit" aria-label="breadcrumb">
        <Link>Usuarios</Link>
      </Breadcrumbs>
      <Button>Nuevo usuario</Button>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nombre usuario</TableCell>
              <TableCell>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.length !== 0 ? (
              users.map((row) => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.displayName}
                  </TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>
                    <Link to={`/users/${row.id}/edit`}>
                      <IconButton color="secondary">
                        <EditIcon />
                      </IconButton>
                    </Link>

                    <IconButton onClick={() => handleEdit(row.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow></TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default User;
