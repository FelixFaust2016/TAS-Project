import React from "react";
import { connect } from "react-redux";
import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  NavLink,
  useHistory,
} from "react-router-dom";

import Input from "../components/Input";
import Button from "../components/Button";

import Logo from "../components/Logo";

import at from "../assets/at.png";
import unlock from "../assets/unlock.png";
import user from "../assets/user.png";
import phone from "../assets/phone.png";
import inp from "../assets/in-img.svg";

const SignUp = (props) => {
  const history = useHistory();

  const handleSignUp = (e) => {
    e.preventDefault();
    history.push("/home");
  };

  const handleChange = () => {};

  const handleSubmit = () => {};

  return (
    <div className="form-container">
      <div className="form-div">
        {/* <div className="form-nav">
          <Logo color={"black"} />
          <Button name={"Sign in"} />
        </div> */}
        <div className="form-div-hd">
          <p>start for free</p>
          <p>Create an account with NEA</p>
          <form>
            <Input
              placeholder={"Emeka, Jude, Arinze etc."}
              type={"text"}
              name={"text"}
              img={user}
            />
            <Input
              placeholder={"Ani, Okoye, Agu etc."}
              type={"text"}
              name={"text"}
              img={user}
            />
            <Input
              placeholder={"name@example.com"}
              type={"email"}
              name={"email"}
              img={at}
            />
            <Input
              placeholder={"eg. 09044567837"}
              type={"text"}
              name={"text"}
              img={phone}
            />
            <Input
              placeholder={"at least 8 characters"}
              type={"password"}
              name={"password"}
              img={unlock}
            />
            <button className="input-btn">Sign up</button>
            <p className="input-p">
              have an account?{" "}
              <Link to="/signin">
                <span>Sign in</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
      <div className="form-img">
        <div className=" al al-one">
          <p style={{ fontSize: "30px", color: "white" }}>Welcome!</p>
          <p style={{ fontSize: "12px", color: "white" }}>Enjoy your stay :)</p>
        </div>
        <img src={inp} />
      </div>
    </div>
  );
};

export default connect()(SignUp);
