import React from 'react';
import OverlayLogin from '../Login/OverlayLogin.js'
import OverlayRegister from '../Register/OverlayRegister.js'

const Overlay = React.forwardRef((props, ref) => {
  return (
    <div className="overlay-container">
      <div className="overlay">
        <OverlayLogin ref={ref} />
        <OverlayRegister ref={ref} />
      </div>
    </div>
  );
})

export default Overlay;
