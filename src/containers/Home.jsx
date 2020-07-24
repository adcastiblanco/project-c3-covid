import React from 'react';

import '../assets/styles/components/Home.scss'
import '../assets/styles/grids.scss'

import Sidebar from '../components/Sidebar'

const Home = () => (
    <div className="home">
        <Sidebar />
        <main className="home__dashboard">Main</main>
    </div>
)

export default Home