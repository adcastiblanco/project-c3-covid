import React from 'react';
import { FaGooglePlusG, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

import { googleAuthProvider, facebookAuthProvider } from '../../utils/firebase';

import { SignInSocialMedia } from '../../services/AuthServices';

const SocialMedia = () => {
  const handleClickGoogle = async () => {
    const result = await SignInSocialMedia(googleAuthProvider);
    singIn(result);
  };

  const handleClickFacebook = async () => {
    const result = await SignInSocialMedia(facebookAuthProvider);
    singIn(result);
  };

  const singIn = (response) => {
    if (response.code === undefined) {
      swal({
        title: 'Sesión iniciada correctamente',
        button: false,
        icon: 'success',
      });
      localStorage.setItem('username', response.data.username);
      setTimeout(() => {
        location.href = '/';
      }, 1000);
    } else {
      swal({
        title: response.code,
        text: response.message,
        icon: 'warning',
        button: '¡OK!',
      });
    }
  };

  return (
    <div className="social-container">
      <a href="#" className="social-item" onClick={handleClickFacebook}>
        <FaFacebookF />
      </a>
      <a href="#" className="social-item" onClick={handleClickGoogle}>
        <FaGooglePlusG />
      </a>
      <a href="#" className="social-item">
        <FaLinkedinIn />
      </a>
    </div>
  );
};

export default SocialMedia;
