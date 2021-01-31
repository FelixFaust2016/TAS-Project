import React, { useState } from "react";
import { connect } from "react-redux";
import Modal from 'react-modal';
import { usePaystackPayment, PaystackButton, PaystackConsumer } from 'react-paystack';
import Nav from "../components/Navigation";
import Btn from "../components/Button";


const NINverification = (props) => {

    const [count, setCount] = useState(false);
    const [nin, setNin] = useState(111111111111);
    const [email, setEmail] = useState("");
    const [modal, setModal] = useState(false);

    const config = {
        reference: (new Date()).getTime(),
        email: email,
        amount: 100000,
        publicKey: 'pk_test_992fef72533ef47a3b00c4d1aa8e403e50c434c4',
    };

    const customStyles = {
        content: {
            top: '30%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            width: '20%',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
        }
    };
    Modal.setAppElement('#app');

    const navigateToLogin = (e, page) => {
        e.preventDefault()
        props.history.push(page)
    };

    const handlePaystackSuccessAction = (reference) => {
        console.log(reference);
        setCount(1)
        console.log(count)

    };

    const handlePaystackCloseAction = () => {
        console.log(count)
    }

    const handleInput = (e) => {
        e.preventDefault();
        let nin = e.target.elements.nin.value.trim();
        setNin(nin);
        if (!count) {

            setModal(true);
        }
    }

    const handleEmail = (e) => {
        e.preventDefault();
        let mail = e.target.elements.email.value.trim();
        setEmail(mail);
        setModal(false);
    }

    function closeModal() {
        setModal(false);
        setIsOpen(false);
    }

    const componentProps = {
        ...config,
        text: 'Continue',
        onSuccess: (reference) => handlePaystackSuccessAction(reference),
        onClose: handlePaystackCloseAction,
    };

    return (

        <div className="ninverification">
            <Nav navigate={navigateToLogin} style={{ position: 'relative', backgroundColor: '#1C2331' }} />

            <div className='page-holder'>
                <div className="contain" style={{ marginTop: '100px' }} >
                    <div className='form-holder'>
                        <div id='form-header' >
                            <h2 >NIN Search</h2>
                        </div>
                        <div className="form-container">
                            <form onSubmit={handleInput}>
                                <input required className="na" name='nin' placeholder="788789*******"></input>
                                <div id="checkbox-container">
                                    <input type="checkbox" name="robot" style={{ backgroundColor: 'white', width: '50px', marginTop: '0px' }} />
                                    <label><span>are you a robot?</span></label>
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
                </div>

                <Modal
                    isOpen={modal}
                    // onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"  >

                    <div className="form-container">
                        <form onSubmit={handleEmail}>
                            <label>Please enter your email</label>
                            <input required className="na" name='email' placeholder="johnbull@abc.com" onChange={(e) => setEmail(e.target.value)}></input>


                            <PaystackButton {...componentProps} className="button" />


                        </form>
                    </div>
                </Modal>

                <div className="result-container">
                    {
                        count &&
                        <div className="lower-part" style={{ marginTop: '60px' }} >
                            <div id='form-header' >
                                <h2 ><b>Mr. Nzeogu Ibrahim Ayomide</b></h2>
                            </div>
                                    <div id='icon'></div>
                            <div className="form-container">
                                <div>
                                    <p>NIN: {nin}</p>
                                    <p>State of origin: Imo State</p>
                                    <p>Local government: Sango Ota</p>
                                    <p>DOB: 11 march 1985</p>
                                </div>
                                <div>
                                    <p>Sex: male</p>
                                    <p>Occupation: medical doctor</p>
                                    <p>Local government: Sango Ota</p>
                                    <p>DOB: 11 march 1985</p>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}


export default connect()(NINverification);