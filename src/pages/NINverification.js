import React, { useState } from "react";
import { connect } from "react-redux";
import Modal from "react-modal";
import {
  usePaystackPayment,
  PaystackButton,
  PaystackConsumer,
} from "react-paystack";
import Nav from "../components/Navigation";
import Btn from "../components/Button";

import Input from "../components/Input";

import search from "../assets/search.png";
import Navigation from "../components/Navigation";

const NINverification = (props) => {
  const [count, setCount] = useState(false);
  const [nin, setNin] = useState(111111111111);
  const [email, setEmail] = useState("");
  const [modal, setModal] = useState(false);

  const [postId, setPostId] = useState("");

  const handleModal = (e) => {
    e.preventDefault();

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "React Hooks" }),
    };

    fetch(
      "http://174.138.46.137:8083/api/negst/nin-verification/verify",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => setPostId(data.id));

    setModal(!modal);
  };

  const config = {
    reference: new Date().getTime(),
    email: email,
    amount: 100000,
    publicKey: "pk_test_992fef72533ef47a3b00c4d1aa8e403e50c434c4",
  };

  const customStyles = {
    content: {
      top: "30%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      width: "20%",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  Modal.setAppElement("#app");

  const navigateToLogin = (e, page) => {
    e.preventDefault();
    props.history.push(page);
  };

  const handlePaystackSuccessAction = (reference) => {
    console.log(reference);
    setCount(1);
    console.log(count);
  };

  const handlePaystackCloseAction = () => {
    console.log(count);
  };

  const handleInput = (e) => {
    e.preventDefault();
    let nin = e.target.elements.nin.value.trim();
    setNin(nin);
    if (!count) {
      setModal(true);
    }
  };

  const handleEmail = (e) => {
    e.preventDefault();
    let mail = e.target.elements.email.value.trim();
    setEmail(mail);
    setModal(false);
  };

  function closeModal() {
    setModal(false);
    setIsOpen(false);
  }

  const componentProps = {
    ...config,
    text: "Continue",
    onSuccess: (reference) => handlePaystackSuccessAction(reference),
    onClose: handlePaystackCloseAction,
  };

  return (
    <div>
      {" "}
      <Navigation />
      <div className="ninverification-container">
        <div className="nin-cont">
          <h1>SEARCH FOR NIN</h1>
          <div className="nin-search">
            <form>
              <h3
                style={{
                  fontSize: "13px",
                  margin: "0px",
                  padding: "0px",
                  textAlign: "center",
                }}
              >
                Input correct NIN
              </h3>
              <Input
                name={"nin"}
                placeholder={"eg.788789******* "}
                type={"text"}
                img={search}
              />
              <div id="checkbox-container">
                <div>
                  <input
                    type="checkbox"
                    name="robot"
                    style={{
                      backgroundColor: "white",
                      width: "50px",
                      marginTop: "0px",
                    }}
                  />
                </div>
                <div>
                  <span>are you a robot?</span>
                </div>
              </div>
              <button onClick={handleModal} className="input-btn">
                Search
              </button>
            </form>
          </div>
        </div>
        {/* <Nav navigate={navigateToLogin} style={{ position: 'relative', backgroundColor: '#1C2331' }} /> */}

        {/* <div className="page-holder">
        <div className="contain" style={{ marginTop: "100px" }}>
          <div className="form-holder">
            <div id="form-header">
              <h2>NIN Search</h2>
            </div>
            <div className="form-container">
              <form onSubmit={handleInput}>
                <input
                  required
                  className="na"
                  name="nin"
                  placeholder="788789*******"
                ></input>
                <div id="checkbox-container">
                  <input
                    type="checkbox"
                    name="robot"
                    style={{
                      backgroundColor: "white",
                      width: "50px",
                      marginTop: "0px",
                    }}
                  />
                  <label>
                    <span>are you a robot?</span>
                  </label>
                </div>
                {
                  // // count
                  //     ?
                  <Btn name={"Search"} onSubmit={handleInput} />
                  // :
                  // <Btn name={"Search"} onSubmit={handleInput} />
                }
              </form>
            </div>
          </div>
        </div> */}

        {/* <Modal
          isOpen={modal}
          // onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="form-container">
            <form onSubmit={handleEmail}>
              <label>Please enter your email</label>
              <input
                required
                className="na"
                name="email"
                placeholder="johnbull@abc.com"
                onChange={(e) => setEmail(e.target.value)}
              ></input>

              <PaystackButton {...componentProps} className="button" />
            </form>
          </div>
        </Modal> */}

        {/* {count && ( */}
        {modal && (
          <div className="result-container">
            <i onClick={handleModal} className="fas fa-times close"></i>
            <div className="ver-outer">
              <h2>Your Details</h2>
              <div className="lower-part">
                <div>
                  <p>
                    <span>NIN:</span> {nin}
                  </p>
                  <p>
                    <span>State of origin:</span> Imo State
                  </p>
                  <p>
                    <span>Local government:</span> Sango Ota
                  </p>
                  <p>
                    <span>DOB:</span> 11 march 1985
                  </p>
                </div>
                <div>
                  <p>
                    <span>Sex:</span> male
                  </p>
                  <p>
                    <span>Occupation:</span> medical doctor
                  </p>
                  <p>
                    <span>Local government:</span> Sango Ota
                  </p>
                  <p>
                    <span>DOB:</span> 11 march 1985
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default connect()(NINverification);
