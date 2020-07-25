import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [form, setValues] = useState({
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
    axios
      .post(
        'https://cohort3apicovid.herokuapp.com/api/auth/sign-in',
        {
          withCredentials: true,
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        },
        {
          auth: {
            username: form.email,
            password: form.password,
          },
        }
      )
      .then(function (response) {
        console.log(response);
        if(response.status === 200) {
            location.href ="/";
        }
      })
      .catch(function (error) {
        console.log('Error on Authentication');
      });
  };
  return (
    <div className="form-container sign-in-container">
      <form action="#" className="form-login-register" onSubmit={handleSubmit}>
        <h1>Sign in</h1>
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
        <span>or use your account</span>
        <input
          required
          name="email"
          className="form-input"
          type="email"
          placeholder="Email"
          onChange={handleInput}
        />
        <input
          required
          name="password"
          className="form-input"
          type="password"
          placeholder="Password"
          onChange={handleInput}
        />
        <a href="#">Forgot your password?</a>
        <button className="form-button" type="submit">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
