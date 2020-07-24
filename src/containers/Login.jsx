import React from 'react'

import '../assets/styles/components/Login.scss'

const Login = () => {

    const container = React.createRef()

    console.log(container)
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
            <div className="form-container sign-up-container">
                <form action="#" className="form-login-register">
                    <h1>Create Account</h1>
                    <div className="social-container">
                        <a href="#" className="social-item"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="social-item"><i className="fab fa-google-plus-g"></i></a>
                        <a href="#" className="social-item"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    <span>or use your email for registration</span>
                    <input className="form-input" type="text" placeholder="Name" />
                    <input className="form-input" type="email" placeholder="Email" />
                    <input className="form-input" type="password" placeholder="Password" />
                    <button className="form-button">Sign Up</button>
                </form>
            </div>
            <div className="form-container sign-in-container">
                <form action="#" className="form-login-register">
                    <h1>Sign in</h1>
                    <div className="social-container">
                        <a href="#" className="social-item"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="social-item"><i className="fab fa-google-plus-g"></i></a>
                        <a href="#" className="social-item"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    <span>or use your account</span>
                    <input className="form-input" type="email" placeholder="Email" />
                    <input className="form-input" type="password" placeholder="Password" />
                    <a href="#">Forgot your password?</a>
                    <button className="form-button">Sign In</button>
                </form>
            </div>
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

    )
}

export default Login