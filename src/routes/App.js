import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Layout from '../containers/Layout'
import Home from '../containers/Home'
import LoginRegister from '../containers/LoginRegister'

import '../assets/styles/globals.scss'



const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/login" component={LoginRegister} />
            <Layout>
                <Route exact path="/" component={Home} />
            </Layout>
        </Switch>

    </BrowserRouter>
)

export default App