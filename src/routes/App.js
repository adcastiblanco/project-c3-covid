import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from '../pages/login';
import Home from '../pages/Home/Home';
import Layout from '../components/layout/Layout';
import User from '../pages/Users/User';
import UserEdit from '../pages/Users/UserEdit';
import Template from '../components/Template';

import theme from '../theme';
import { ThemeProvider } from '@material-ui/core';
import '../assets/styles/index.css';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Switch>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/template" component={Template}></Route>
          <Layout>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/users" component={User}></Route>
            <Route exact path="/users/:userId/edit" component={UserEdit} />
          </Layout>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
