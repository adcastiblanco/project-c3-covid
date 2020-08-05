import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'

const Layout = (props) => (
    <div className="app">
        <Header />
        <Sidebar />
        {props.children}
        <Footer />
    </div>
)
export default Layout
