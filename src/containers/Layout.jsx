import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import App from '../assets/styles/App.scss'

const Layout = (props) => (
    <>
        <Header />
        {props.children}
        <Footer />
    </>
)
export default Layout
