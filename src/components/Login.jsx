import React from 'react'

const Login = () => (
    <div className="form-container sign-in-container">
                <form action="#" className="form-login-register">
                    <h1>Sign in</h1>
                    <div className="social-container">
                        <a href="#" className="social-item"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="social-item"><i className="fab fa-google-plus-g"></i></a>
                        <a href="#" className="social-item"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    <span>or use your account</span>
                    <input required className="form-input" type="email" placeholder="Email" />
                    <input required className="form-input" type="password" placeholder="Password" />
                    <a href="#">Forgot your password?</a>
                    <button className="form-button">Sign In</button>
                </form>
            </div>
)

export default Login