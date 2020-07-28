import React, { useState } from 'react';

const Register = () => {
  const [form, setValues] = useState({
    first_name: '',
    last_name: '',
    country: '',
    city: '',
    years_old: '',
    email: '',
    password: '',
  });
  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
    fetch('https://cohort3apicovid.herokuapp.com/api/auth/sign-up', {
      method: 'POST', // or 'PUT'
      mode: 'cors',
      body: JSON.stringify(form), // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => {
      console.log(res);
      if (res.status === 201) {
        alert('Registro exitoso');
        location.href = '/';
      }
    });
  };
  return (
    <div className="form-container sign-up-container">
      <form
        action="post"
        className="form-login-register"
        id="form-register"
        onSubmit={handleSubmit}
      >
        <h1>Create Account</h1>
        <div className="social-container">
          <a href="#" className="social-item">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="social-item">
            <i className="fab fa-google-plus-g"></i>
          </a>
          <a href="#" className="social-item">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
        <span>or use your email for registration</span>
        <input
          name="first_name"
          onChange={handleInput}
          className="form-input"
          type="text"
          placeholder="Nombres"
          maxLength="50"
          required
        />
        <input
          name="last_name"
          onChange={handleInput}
          className="form-input"
          type="text"
          maxLength="50"
          placeholder="Apellidos"
        />
        <input
          name="country"
          onChange={handleInput}
          className="form-input"
          type="text"
          maxLength="30"
          placeholder="País"
        />
        <input
          name="city"
          onChange={handleInput}
          className="form-input"
          type="text"
          maxLength="30"
          placeholder="Ciudad"
        />
        <input
          name="years_old"
          onChange={handleInput}
          className="form-input"
          type="number"
          placeholder="Edad"
          min="1"
          max="99"
        />
        <input
          name="email"
          onChange={handleInput}
          className="form-input"
          type="email"
          placeholder="Email"
          required
        />
        <input
          name="password"
          className="form-input"
          onChange={handleInput}
          type="password"
          placeholder="Contraseña"
          minLength="8"
          required
        />
        <button className="form-button">Sign Up</button>
      </form>
    </div>
  );
};

export default Register;
