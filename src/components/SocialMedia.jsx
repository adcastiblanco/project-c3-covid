import React, { useState } from 'react';
import { FaGooglePlusG, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

import { googleAuthProvider } from '../utils/firebase';

import { SignInSocialMedia, VerifyTokenId } from '../services/AuthServices';

const SocialMedia = (props) => {
  //   const [state, setstate] = useState(initialState);
  const handleClick = (socialMedia) => {
    if (socialMedia === 'google') {
      SignInSocialMedia(googleAuthProvider).then((response) => {
        console.log(response);
        props.history('/');
      });
    }
  };

  return (
    <div className="social-container">
      <a href="#" className="social-item">
        <FaFacebookF />
      </a>
      <a href="#" className="social-item" onClick={() => handleClick('google')}>
        <FaGooglePlusG />
      </a>
      <a href="#" className="social-item">
        <FaLinkedinIn />
      </a>
    </div>
  );
};

export default SocialMedia;
