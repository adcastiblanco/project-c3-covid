import React, { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert'
import loader from '../assets/images/loader.gif'

const Login = React.forwardRef((props, ref) => {
  const [form, setValues] = useState({
    email: '',
    password: '',
  });

  let addPanel = (event) => {
    event.preventDefault()
    ref.current.classList.add("right-panel-active");
  }
  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    swal({
      title: "Estamos validando tus datos",
      icon: loader,
      button: false
    });
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
        if (response.status === 200) {
          swal({
            title: 'Sesión iniciada correctamente',
            button: false,
            icon: 'success'
          })
          localStorage.setItem('username', response.data.user.email);
          setTimeout(() => {
            location.href = '/';
          }, 1000)
        }
      })
      .catch(error => {
        if (error.message === "Request failed with status code 401") {
          swal({
            title: 'Email o contraseña incorrectos, intentalo nuevamente',
            button: 'Entendido',
            icon: 'error'
          })
        }
      });
  };
  return (
    <div className="form-container sign-in-container">
      <div className="register-panel">
        <h3>¿Aún no tienes una cuenta?</h3>
        <button className="form-button overlay-button ghost" id="signIn" onClick={addPanel}>Sign Up</button>
      </div>
      <form action="#" className="form-login-register" onSubmit={handleSubmit}>
        <h1>Sign in</h1>
        <div className="social-container">
          <a href="#" className="social-item">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="social-item">
            <i className="fab fa-google-plus-g"></i>
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
});

export default Login;
