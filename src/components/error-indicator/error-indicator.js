import React from "react";

import './error-indicator.css'
import errorIcon from '../../assets/img/error-indicator/death-star.png'

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <img src={errorIcon} alt='' />
      <span className="boom">Boom!!!</span>
      <span>
        something has gone terribly wrong
      </span>
      <span>
         (but we already sent droids to fix it)
      </span>
    </div>
  )
}

export default ErrorIndicator;