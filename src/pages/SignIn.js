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
import axios from 'axios';
import { apiConfig } from '../config/axios';

import Button from "../components/Button";
import Input from "../components/Input";

import Logo from "../components/Logo";

import at from "../assets/at.png";
import unlock from "../assets/unlock.png";
import inp from "../assets/in-img.svg";

const SignIn = (props) => {
  const history = useHistory();

  const handleSignIn = (e) => {
    e.preventDefault();
    // history.push("/home");


    const details = {
      usernameOrEmail: e.target[0].value,
      password: e.target[1].value
    }
    console.log(details)
    axios.post('http://174.138.46.137:8083/api/negst/auth/signin',

      details

    ).then((response) => {
      console.log(response.data);
    }).catch(e => {
      console.log(e.response.data);
    })
  };

  return (
    <div className="form-container">
      <div className="form-div">
        {/* <div className="form-nav">
          <Logo color={"black"} />
          <Button name={"Sign up"} />
        </div> */}
        <div className="form-div-hd">
          <p>continue for free</p>
          <p>Sign in</p>
          <form onSubmit={handleSignIn}>
            <Input
              placeholder={"name@example.com"}
              type={"email"}
              name={"email"}
              img={at}
            />
            <Input
              placeholder={"at least 8 characters"}
              type={"password"}
              name={"password"}
              img={unlock}
            />
            <button className="input-btn">Sign in</button>
            <p className="input-p">
              Don't have an account? <Link to="/signup"><span>Sign up</span></Link>
            </p>
          </form>
        </div>
      </div>
      <div className="form-img">
        <div className=" al al-one">
          <p style={{ fontSize: "30px", color: "white" }}>Welcome Back!</p>
          <p style={{ fontSize: "12px", color: "white" }}>Enjoy your stay :)</p>
        </div>
        <img src={inp} />
      </div>
    </div>
  );
};

export default connect()(SignIn);
