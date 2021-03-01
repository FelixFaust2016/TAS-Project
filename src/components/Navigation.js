import React, { useState } from "react";

import { Link } from "react-router-dom";

import Logo from "../components/Logo";
import Button from "./Button";

import Apper from "../components/Apps";

const Navigation = (props) => {
  const [nav, setNav] = useState([
    { name: "Home", link: "/" },
    { name: "Verify-NIN", link: "/ninverification" },
    { name: "Register-NIN", link: "" },
    { name: "About us", link: "/about" },
    { name: "FAQS", link: "/faq" },
  ]);

  const [hamm, setHam] = useState(false);

  return (
    <nav className="nav-cont">
      <Logo color={"white"} />
      <div style={{ flex: "1" }}></div>
      <div className="nav-list" style={{ top: hamm && "0px" }}>
        {nav.map((nav, i) => (
          <Link
            style={{ color: "white", textDecoration: "none" }}
            to={nav.link}
          >
            <li key={i}>{nav.name}</li>
          </Link>
        ))}
        <Apper />
      </div>

      <Link to="signin">
        <Button name={"login"} />
      </Link>
      <div style={{ width: "20px" }}></div>
      <Link to="signup">
        <Button name={"sign-up"} />
      </Link>
      <div
        onClick={() => setHam(!hamm)}
        className={hamm === false ? "ham-cont" : "ham-cont open"}
      >
        <div className="ham"></div>
      </div>
    </nav>
  );
};
export default Navigation;
