import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Layout from '../containers/Layout'
import Home from '../containers/Home'
import Login from '../containers/Login'

const App = () => (
    <BrowserRouter>
    <Layout>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
        </Switch>
        </Layout>
    </BrowserRouter>
)

export default App