import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Layout from '../containers/Layout'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Home from '../containers/Home'
import LoginRegister from '../containers/LoginRegister'

import '../assets/styles/globals.scss'

const App = () => (
    <BrowserRouter>
        {window.location.pathname !== '/login' && <Header />}
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={LoginRegister} />
        </Switch>
        {window.location.pathname !== '/login' && <Footer />}
    </BrowserRouter>
)

export default App