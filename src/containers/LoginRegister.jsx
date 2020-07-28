import React from 'react'

import '../assets/styles/components/LoginRegister.scss'

import Login from '../components/Login'
import Register from '../components/Register'
const LoginRegister = () => {

    const container = React.createRef()

    let addPanel = (event) => {
        event.preventDefault()
        container.current.classList.add("right-panel-active");
    }
    let removePanel = (event) => {
        event.preventDefault()
        container.current.classList.remove("right-panel-active");
    };

    return (
        <div className="login-register-container" ref={container}>
            <div className="login-register-form">
                <Login />
                <Register />
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button className="form-button ghost" id="signIn" onClick={removePanel}>Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button className="form-button ghost" id="signUp" onClick={addPanel}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginRegister