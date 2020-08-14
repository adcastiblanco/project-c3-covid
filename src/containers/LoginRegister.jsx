import React from 'react';

import Login from '../components/Auth/Login';
import Register from '../components/Auth/Register';
import Overlay from '../components/Auth/Overlay';

import '../components/Auth/index.scss';

const LoginRegister = () => {
  const container = React.createRef();
  return (
    <div className="login-register-container" ref={container}>
      <div className="login-register-form">
        <Login ref={container} />
        <Register ref={container} />
        <Overlay ref={container} />
      </div>
    </div>
  );
};

export default LoginRegister;
