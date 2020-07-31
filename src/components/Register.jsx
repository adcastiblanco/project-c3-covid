import React, { useState } from 'react';
import SocialMedia from './SocialMedia';
import swal from 'sweetalert';
import loader from '../assets/images/loader.gif';

import { CreateUser, RegisterUser, getTokenId } from '../services/AuthServices';

const Register = () => {
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    country: '',
    city: '',
    years_old: 0,
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    let inputElement = event.currentTarget;
    if (event.currentTarget.reportValidity !== true)
      inputElement.reportValidity();
    switch (inputElement.name) {
      case 'first_name':
        inputElement.onvalid = (e) =>
          e.target.setCustomValidity('El nombre debe tener minimo 3 letras');
        break;
      case 'last_name':
        inputElement.onvalid = (e) =>
          e.target.setCustomValidity('El apellido debe tener minimo 3 letras');
        break;
      case 'country':
        inputElement.onvalid = (e) =>
          e.target.setCustomValidity('El país debe tener minimo 3 letras');
        break;
      case 'city':
        inputElement.onvalid = (e) =>
          e.target.setCustomValidity('La ciudad debe tener minimo 3 letras');
        break;
      case 'years_old':
        inputElement.onvalid = (e) =>
          e.target.setCustomValidity('La edad debe ser un valor de entre 1-99');
        break;
      case 'password':
        inputElement.onvalid = (e) =>
          e.target.setCustomValidity(
            'La contraseña debe ser segura de minimo 8 caracteres'
          );
        break;
      default:
        break;
    }

    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    swal({
      title: 'Estamos validando tu registro',
      icon: loader,
      button: false,
    });

    const createUser = await CreateUser(
      form.email,
      form.password,
      `${form.first_name} ${form.last_name}`
    );

    if (createUser.data !== null) {
      /**User email does not exist, it is register in db*/
      const registerUser = await RegisterUser({
        _uid: createUser.data.uid,
        first_name: form.first_name,
        last_name: form.last_name,
        years_old: form.years_old,
        country: form.country,
        city: form.city,
      });

      if (registerUser.status === 201) {
        /**Get token and singin in the app */
        const data = {
          username: `${registerUser.data.first_name} ${registerUser.data.last_name}`,
          _id: registerUser.data._id,
        };

        const singIn = await getTokenId(data);
        swal({
          title: 'Good job!',
          text: 'You clicked the button!',
          icon: 'success',
          button: false,
        });
        //**save username in local storage */
        localStorage.setItem('username', singIn.data.username);
        setTimeout(() => {
          location.href = '/';
        }, 2000);
      } else {
        console.log(registerUser);
      }
    } else {
      swal({
        title: createUser.code,
        text: createUser.message,
        icon: 'warning',
        button: '¡OK!',
      });
    }
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
        <SocialMedia />
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
