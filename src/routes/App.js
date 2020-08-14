import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Layout from '../components/Layout';

import Home from '../containers/Home';
import LoginRegister from '../containers/LoginRegister';
import RegisterSymptoms from '../containers/RegisterSymptoms';
import AboutUs from '../containers/AboutUs';

import GlobalStyles from '../assets/styles/GlobalStyles';
import '../assets/styles/Main.scss';

function SecureRoutes({ component, path, ...restElements }) {
  const token = localStorage.getItem('token');
  const username = localStorage.getItem('username');
  if (token && username) {
    return <Route path={path} component={component} {...restElements} />;
  } else {
    return <Redirect to="/login" {...restElements} />;
  }
}

const App = () => (
  <BrowserRouter>
    <GlobalStyles />
    <Switch>
      <Route exact path="/login" component={LoginRegister} />
      <Layout>
        <SecureRoutes exact path="/" component={Home} />
        <SecureRoutes
          exact
          path="/RegisterSymptoms"
          component={RegisterSymptoms}
        />
        <SecureRoutes exact path="/about-us" component={AboutUs} />
      </Layout>
    </Switch>
  </BrowserRouter>
);

export default App;
