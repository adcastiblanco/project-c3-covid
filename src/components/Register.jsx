import React, { useEffect } from 'react'

const Register = () => {
    useEffect(() => {
        let data = new FormData(document.getElementById('form-register'))
        fetch('https://cohort3apicovid.herokuapp.com/', {
            method: 'POST',
            body: data
        })
            .then(function (response) {
                if (response.ok) {
                    return response.text()
                }
            })
            .then(function (texto) {
                console.log(texto);
            })
            .catch(function (err) {
                console.log(err);
            });
    },[])
    return (
        <div className="form-container sign-up-container">
            <form action="post" className="form-login-register" id="form-register">
                <h1>Create Account</h1>
                <div className="social-container">
                    <a href="#" className="social-item"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" className="social-item"><i className="fab fa-google-plus-g"></i></a>
                    <a href="#" className="social-item"><i className="fab fa-linkedin-in"></i></a>
                </div>
                <span>or use your email for registration</span>
                <input name="name" className="form-input" type="text" placeholder="Name" required />
                <input name="email" className="form-input" type="email" placeholder="Email" required />
                <input name="pais" className="form-input" type="text" placeholder="País" required />
                <input name="edad" className="form-input" type="number" placeholder="Edad" required />
                <input className="form-input" type="password" placeholder="Password" required />
                <button className="form-button">Sign Up</button>
            </form>
        </div>
    )
}

export default Register