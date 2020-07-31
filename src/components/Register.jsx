import React, { useState } from 'react';
import swal from 'sweetalert'
import loader from '../assets/images/loader.gif'

const Register = () => {
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    country: '',
    city: '',
    years_old: '',
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    let inputElement = event.currentTarget
    if (event.currentTarget.reportValidity !== true) inputElement.reportValidity()
    switch (inputElement.name) {
      case 'first_name':
        inputElement.onvalid = e => e.target.setCustomValidity('El nombre debe tener minimo 3 letras');
        break;
      case 'last_name':
        inputElement.onvalid = e => e.target.setCustomValidity('El apellido debe tener minimo 3 letras');
        break;
      case 'country':
        inputElement.onvalid = e => e.target.setCustomValidity('El país debe tener minimo 3 letras');
        break;
      case 'city':
        inputElement.onvalid = e => e.target.setCustomValidity('La ciudad debe tener minimo 3 letras');
        break;
      case 'years_old':
        inputElement.onvalid = e => e.target.setCustomValidity('La edad debe ser un valor de entre 1-99');
        break;
      case 'password':
        inputElement.onvalid = e => e.target.setCustomValidity('La contraseña debe ser segura de minimo 8 caracteres');
        break
      default:

        break
    }

    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    swal({
      title: "Estamos validando tu registro",
      icon: loader,
      button: false
    });
    console.log(form);
    fetch('https://cohort3apicovid.herokuapp.com/api/auth/sign-up', {
      method: 'POST', // or 'PUT'
      mode: 'cors',
      body: JSON.stringify(form), // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => {
      if (res.status === 201) {
        localStorage.setItem('username', form.first_name)
        console.log(res)
        swal({
          title: "Good job!",
          text: "You clicked the button!",
          icon: "success",
          button: false,
        });
        // localStorage.setItem('username', )
        setTimeout(() => {
          location.href = "/"
        }, 2000)
      }
      else if (res.status === 400) {
        swal({
          title: "El email ya se encuentra registrado",
          text: "Por favor ingresa un email diferente",
          icon: "warning",
          button: "¡OK!",
        });
      }
    }).catch((err) => console.log(err))
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
          onChange={handleChange}
          className="form-input"
          type="text"
          placeholder="Nombres"
          minLength="3"
          maxLength="50"
          required
        />
        <input
          name="last_name"
          onChange={handleChange}
          className="form-input"
          type="text"
          minLength="3"
          maxLength="50"
          placeholder="Apellidos"
        />
        <input
          name="country"
          onChange={handleChange}
          className="form-input"
          type="text"
          minLength="3"
          maxLength="30"
          placeholder="País"
        />
        <input
          name="city"
          onChange={handleChange}
          className="form-input"
          type="text"
          minLength="3"
          maxLength="30"
          placeholder="Ciudad"
        />
        <input
          name="years_old"
          onChange={handleChange}
          className="form-input"
          type="number"
          placeholder="Edad"
          min="1"
          max="99"
        />
        <input
          name="email"
          onChange={handleChange}
          className="form-input"
          type="email"
          placeholder="Email"
          required
        />
        <input
          name="password"
          className="form-input"
          onChange={handleChange}
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
