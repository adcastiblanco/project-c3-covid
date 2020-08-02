import React from 'react'

import '../assets/styles/components/LoginRegister.scss'

import Login from '../components/Login'
import Register from '../components/Register'
import Overlay from '../components/Overlay';

const LoginRegister = () => {
    const container = React.createRef()
    return (
        <div className="login-register-container" ref={container}>
            <div className="login-register-form">
                <Login ref={container}/>
                <Register ref={container}/>
                <Overlay ref={container}/>
            </div>
        </div>
    )
}

export default LoginRegister
