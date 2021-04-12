import React from "react";

import { Link } from "react-router-dom";

import logo from "../assets/logo.png";

const Logo = (props) => {
  return (
    <Link style={{ listStyle: "none", textDecoration: "none" }} to="/">
      <div className="logo-cont">
        <h2 style={{ color: props.color }}>NeGST</h2>
      </div>
    </Link>
  );
};

export default Logo;
