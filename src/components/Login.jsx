import React, { useState } from 'react';
import axios from 'axios';
import SocialMedia from './SocialMedia';

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
        props.history('/');
      })
      .catch(function (error) {
        console.log('Error on Authentication');
      });
  };
  return (
    <div className="form-container sign-in-container">
      <form action="#" className="form-login-register" onSubmit={handleSubmit}>
        <h1>Sign in</h1>
        <SocialMedia />
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
