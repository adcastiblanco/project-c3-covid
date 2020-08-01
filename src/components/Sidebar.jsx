import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <aside className="home-sidebar">
            <ul className="home-sidebar__list">
                <li className="home-sidebar__item">
                    <Link to="/">Registrar sintomas</Link>
                </li>
                <li className="home-sidebar__item">
                    <Link to="/">Estadisticas</Link>
                </li>
                <li className="home-sidebar__item">
                    <Link to="/">Consejos de cuidado</Link>
                </li>
                <li className="home-sidebar__item">
                    <Link to="/">Sobre el COVID-19</Link>
                </li>
                <li className="home-sidebar__item">
                    <Link to="/">Acerca de nosotros</Link>
                </li>
            </ul>
        </aside>
    )
}

export default Sidebar