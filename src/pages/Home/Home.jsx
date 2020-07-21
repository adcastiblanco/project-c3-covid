import React, { useEffect } from 'react';
import { Typography } from '@material-ui/core';
import { firebaseConfig } from '../../utils/firebase';
import Layout from '../../components/layout/Layout';

const Home = () => {
  useEffect(() => {
    // firebaseConfig.auth()
  }, []);

  return <main></main>;
};

export default Home;
