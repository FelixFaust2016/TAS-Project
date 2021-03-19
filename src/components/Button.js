import React, { Component } from "react";

const Button = (props) => {
  return (
    <button
      className="login-btn"
      style={{...props.style}}
      onClick={props.click}
    >
      {props.name || props.children}
    </button>
  )
}

export default Button;
