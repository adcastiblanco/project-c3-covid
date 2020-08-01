import React from 'react';

const OverlayLogin = React.forwardRef((props,ref) => {
  let removePanel = (event) => {
    event.preventDefault()
    ref.current.classList.remove("right-panel-active");
  };

  return (
    <div className="overlay-panel overlay-left">
      <h1>Welcome Back!</h1>
      <p>To keep connected with us please login with your personal info</p>
      <button className="form-button ghost" id="signIn" onClick={removePanel}>Sign In</button>
    </div>
  );
})

export default OverlayLogin;
