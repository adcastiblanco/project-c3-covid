import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../containers/Home';
import LoginRegister from '../containers/LoginRegister';
import RegisterSymptoms from '../containers/RegisterSymptoms';
import GlobalStyles from '../assets/styles/GlobalStyles';

const App = () => (
  <BrowserRouter>
    <GlobalStyles />
    <Switch>
      <Route exact path='/login' component={LoginRegister} />
      <Layout>
        <Route exact path='/RegisterSymptoms' component={RegisterSymptoms} />
        <Route exact path='/' component={Home} />
      </Layout>
    </Switch>
  </BrowserRouter>
);

export default App;
