import React from 'react';

import '../assets/styles/components/Home.scss'
import '../assets/styles/grids.scss'

import Sidebar from '../components/Sidebar'
import Dashboard from '../components/Dashboard'

const Home = () => (
    <div className="home">
        <Sidebar />
        <Dashboard />
    </div>
)

export default Home