import React, { useState } from 'react';
import SocialMedia from './SocialMedia';
import swal from 'sweetalert';
import loader from '../assets/images/loader.gif';

import { SingInEmailPassword, getTokenId } from '../services/AuthServices';

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
  const handleSubmit = async (event) => {
    event.preventDefault();
    swal({
      title: 'Estamos validando tus datos',
      icon: loader,
      button: false,
    });

    const singIn = await SingInEmailPassword(form.email, form.password);
    if (singIn.data !== null) {
      const response = await getTokenId(singIn.data);
      swal({
        title: 'Good job!',
        text: 'You clicked the button!',
        icon: 'success',
        button: false,
      });

      //**save username in local storage */
      localStorage.setItem('username', response.data.username);
      setTimeout(() => {
        location.href = '/';
      }, 2000);
    } else {
      swal({
        title: singIn.code,
        text: singIn.message,
        icon: 'warning',
        button: '¡OK!',
      });
    }
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
