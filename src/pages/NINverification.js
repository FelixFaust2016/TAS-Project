import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Modal from "react-modal";

import { verifyNIN } from "../actions/ninVerificationAction";
import { loadingBar, ninVerificationModalStyles } from "../config/helperFunctions";

import x from "../assets/redx.png";
import dumper from "../assets/dummyperson.png";
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
import { red } from "@material-ui/core/colors";


const NINverification = (props) => {

  const { containerProps, indicatorEl } = loadingBar();
  const { customStylesRes, customStylesPay } = ninVerificationModalStyles();

  const [data, setData] = useState({});
  const [count, setCount] = useState(false);
  const [nin, setNin] = useState('');
  const [modal, setModal] = useState(false);
  const [rmodal, setRmodal] = useState(true);
  const [error, setError] = useState();

  const [paid, setPaid] = useState(false);
  const [payModal, setPayModal] = useState();
  const [email, setEmail] = useState("");


  const config = {
    reference: new Date().getTime(),
    email: email,
    amount: 100000,
    publicKey: process.env.PAYSTACK_KEY,
  };


  Modal.setAppElement('#app');

  const handleModal = (e) => {
    e.preventDefault();

    setData({});
    setError("");
    // setModal(!modal);


    if (!paid) {
      setPayModal(true);
    } else {
      setModal(!modal);
      props.verifyNIN(nin).then((res) => {

        if (data.constructor !== Object) {
          setRmodal(true);
        }
        setData(res);
        console.log(res);
      }).catch((err) => {
        setModal(false);
        setError("There was a server/network error please try again");
        console.log("idauda", err)
      })

    }

  };

  const handlePaystackSuccessAction = (reference) => {
    // console.log(reference);
    // setCount(1);
    // console.log(count);
    setModal(!modal);
    setPayModal(false);
    setPaid(true);
    props.verifyNIN(nin).then((res) => {

      if (data.constructor !== Object) {
        setRmodal(true);
      }
      setData(res);
      console.log(res);
    }).catch((err) => {
      setModal(false);
      setError("There was a server/network error please try again");
      console.log("idauda", err)
    })
  };

  const handlePaystackCloseAction = () => {
    console.log(count);
  };

  const handleEmail = (e) => {
    e.preventDefault();
    let mail = e.target.elements.email.value.trim();
    // console.log('bfiuweioinoefn')
    setEmail(mail);
    setModal(false);
  };

  function closeModal() {
    setRmodal(false);
    setIsOpen(false);
    setPayModal(false);
  }

  const componentProps = {
    ...config,
    text: "Continue",
    onSuccess: (reference) => handlePaystackSuccessAction(reference),
    onClose: handlePaystackCloseAction,
  };

  return (
    <div className="ninverification">
      {" "}
      <Navigation />
      <div className="ninverification-container" >
        <div className="nin-cont">
          <h1>VERIFY YOUR NIN</h1>
          <div className="nin-search">
            <form >
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
              <input
                name={"nin"}
                placeholder={"eg.788789******* "}
                type={"text"}
                img={search}
                onChange={(value) => { setNin(value) }}
              />
              {
                error
                &&
                <div className="error">
                  <p>{error && error}</p>
                </div>
              }
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

        <div className="modal-holder">
          <Modal
            isOpen={payModal}
            // onAfterOpen={afterOpenModal}
            shouldCloseOnOverlayClick={true}
            onRequestClose={closeModal}
            style={customStylesPay}
            contentLabel="Example Modal"  >
            <i onClick={() => setPayModal(false)} className="fas fa-times close" style={{ alignSelf: "flex-end" }}></i>

            <div className="emailform-container" >
              <form onSubmit={handleEmail}>
                <label>Please enter your email</label>
                <input
                  required={true}
                  className="na"
                  name='email'
                  placeholder="johnbull@abc.com"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                ></input>

                <PaystackButton {...componentProps} className="button" />

              </form>
            </div>
          </Modal>
        </div>

        {modal && (

          <div className="result-container" {...containerProps}>

            {(() => {
              if (Object.entries(data).length === 0) {

                return indicatorEl
              } else if (data.constructor === Object) {
                return (

                  <div className="ver-outer">
                    <div className="result-header">
                      <h2>Your Details</h2>
                      <i onClick={handleModal} className="fas fa-times close"></i>
                    </div>
                    <div className="img-div">
                      <img alt={"no image"} src={data.photo.length <= 10 ? dumper : `data:image/jpeg;base64,${data.photo ? data.photo : image}`} style={{ width: '40%' }} />

                    </div>
                    <div className="lower-part">

                      <div>
                        <p>
                          <span>Name:</span> {data !== {} && `${data.firstname} ${data.middlename} ${data.surname}`}
                        </p>
                        <p>
                          <span>Phone:</span> {data !== {} && data.telephoneno}
                        </p>
                        <p>
                          <span>CentralId:</span> {data !== {} && data.centralID}
                        </p>
                        <p>
                          <span>State of origin:</span> {data !== {} && data.nokState}
                        </p>
                        <p>
                          <span>Local government:</span> {data !== {} && data.birthlga}
                        </p>
                        <p>
                          <span>NIN:</span> {data !== {} && data.nin}
                        </p>
                      </div>
                      <div>
                        <p>
                          <span>Tracking ID:</span> {data !== {} && data.trackingId}
                        </p>
                        <p>
                          <span>Email:</span> {data && data.email}
                        </p>
                        <p>
                          <span>Sex:</span> {data.gender && data.gender}
                        </p>
                        <p>
                          <span>Religion:</span> {data && data.religion}
                        </p>
                        <p>
                          <span>DOB:</span> {data !== {} && data.birthdate}
                        </p>
                        <p>
                          <span>occupation:</span> {data && data.profession}
                        </p>
                      </div>
                    </div>
                  </div>

                )
              }

            })()}

          </div>
        )}


        {
          (data.constructor !== Object)
          &&
          <div>

            < Modal
              isOpen={rmodal}
              onAfterOpen={() => { setModal(false) }}
              onRequestClose={closeModal}
              style={customStylesRes}
              contentLabel="Example Modal"
            >
              <i onClick={() => setRmodal(false)} className="fas fa-times close" style={{ alignSelf: "flex-end" }}></i>

              <div className="modal-container" >
                <img src={x} />
                <p>{data}</p>
              </div>
            </Modal>
          </div>
        }

      </div>
    </div>
  );
};

const mapStatesToProps = (state, props) => {
  return {

  }
}

export default connect(mapStatesToProps, { verifyNIN })(NINverification);
