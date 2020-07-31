import React from 'react';
import { FaGooglePlusG, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

import { googleAuthProvider, facebookAuthProvider } from '../utils/firebase';

import { SignInSocialMedia } from '../services/AuthServices';

const SocialMedia = () => {
  //   const [state, setstate] = useState(initialState);
  const handleClickGoogle = () => {
    SignInSocialMedia(googleAuthProvider).then((response) => {
      console.log(response);
      // location.href = '/';
    });
  };

  const handleClickFacebook = () => {
    SignInSocialMedia(facebookAuthProvider).then((response) => {
      console.log(response);
      // location.href = '/';
    });
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
