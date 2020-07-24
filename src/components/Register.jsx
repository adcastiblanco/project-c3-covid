import React from 'react'

const Register = () => (
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
)

export default Register