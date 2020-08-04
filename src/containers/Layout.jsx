import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'

const Layout = (props) => (
    <div className="app">
        <Header />
        <Sidebar />
        {props.children}
        <Footer />
    </div>
)
export default Layout
