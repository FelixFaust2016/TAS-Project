import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch, Link, NavLink, useHistory } from "react-router-dom";

import Logo from '../components/Logo';


const SignIn = (props) => {
    const history = useHistory();

    const handleSignIn = (e) => {
        e.preventDefault();
        history.push("/home");
    }

    return (
        <div className="login" >
        <div className="logo-side">
            <div className="logo">
                <Logo />
            </div>
            <div style={{ position: 'relative' }} className="tec">
                <div className="welcome-text">
                    <h1>HEY! WELCOME BACK</h1>
                </div>
                {/* <span
                    style={{
                        marginTop: '-30px',
                        position: 'absolute',
                        fontSize: '18px',
                        fontWeight: '400'
                    }}
                >
                    Lets make it work
                </span> */}
            </div>
        </div>
        <div className="form-side">
            <div class="centered-form">
                <div class="centered-form__box">
                    <h1 className="v">Sign in</h1>
                    <span>
                        <p className="v">Log in to your account</p>
                    </span>
                    <form onSubmit={handleSignIn}>
                        <input
                            className="na"
                            required
                            placeholder="Email Address"
                            type="email"
                            name="email"

                        />
                        <input
                            className="na"
                            required
                            placeholder="Password"
                            type="password"
                            name="password"

                        />
                        <div
                            className="inpu"
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                flexWrap: 'wrap',
                                width: '100%'
                            }}
                        >
                            <div style={{ flex: '1' }} />
                            {/* <Button className="bt-login" name="Sign In">

                            </Button> */}
                            <button className='bt'>Sign In</button>
                        </div>

                    </form>
                    <div className="foot">

                        <div id="have-account">Don't have an Account? <span><Link to="/signup" className="textDeco-none"> Sign Up</Link></span></div>
                    </div>
                </div>

            </div>
        </div>

    </div>
    )
}


export default connect()(SignIn);
// "react-router-dom": "^4.3.1",