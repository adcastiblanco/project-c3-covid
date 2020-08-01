import React from 'react';

const OverlayRegister = React.forwardRef((props,ref) => {
  let addPanel = (event) => {
    event.preventDefault()
    ref.current.classList.add("right-panel-active");
  }

  return (
    <div className="overlay-panel overlay-right">
      <h1>Hello, Friend!</h1>
      <p>Enter your personal details and start journey with us</p>
      <button className="form-button ghost" id="signUp" onClick={addPanel}>Sign Up</button>
    </div>
  );
})

export default OverlayRegister;
