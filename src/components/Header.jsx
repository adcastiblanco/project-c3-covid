import React from 'react'

import '../assets/styles/components/Header.scss'

import logo from '../assets/images/brand.png'
const Header = () => (
    <header>
        <figure className="logo">
            <img src={logo} alt="" width="200px"/>
        </figure>
        <div className="header">
            <menu className="header-menu">
                <ul>
                    <li className="header-menu__item">Inicio</li>
                    <li className="header-menu__item">Covid</li>
                    <li className="header-menu__item">Estadisticas</li>
                    <li className="header-menu__item">Perfil</li>
                </ul>
            </menu>
        </div>
    </header>
)

export default Header