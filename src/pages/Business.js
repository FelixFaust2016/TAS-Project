import React, { } from 'react';
import { useHistory, history } from "react-router-dom";

import Nav from '../components/Navigation';
import Footer from "../components/Footer";
import Button from "../components/Button";


const BusinessCards = (props) => {
    return (
        <div className="business-cards">
            <div className="aspect-img">
                <img src={props.image} />
            </div>
            <div className="aspect-text">
                <h1>{props.title}</h1>
                <p>
                    {props.text}
                </p>
                <Button click={() => { props.click(props.location)}}>Go to {props.title}</Button>
            </div>
        </div>
    )
}

const Business = (props) => {

    const selectThisCard = (url) => {

        // e.preventDefault();
        if (url) {
            window.location.assign(url);
        }

    }

    // const navigate = (dest) => {
    //     console.log(dest);
    //     history.push({
    //         pathname: "ninverification"
    //     })
    // }


    return (
        <div className="business">

            <Nav />
            <div className="about-banner" onClick={props.click}>
                <div className="about-banner-text">
                    <h1>Business</h1>
                    <span>
                        TAS comes with alot of tools and platforms to help make your
                        business more efficient and most of all a success.
                        We still plan to release more tools to ensure continous growth of your business.
                    </span>
                </div>
                <div className="about-ill">
                    <img src={"assets/business.png"} />
                </div>
            </div>

            <div className="container" style={{ background: "none" }}>
                <BusinessCards
                    // click={ }
                    title={"EDMS"}
                    image={"assets/document.png"}
                    text={"Electronic document management system for authentication and validation and authentication."}
                />

                <BusinessCards
                    click={ selectThisCard }
                    title={"E-LEARNING"}
                    image={"assets/e-learning.png"}
                    text={"product of NeGst built to help facilitate electronic education of the nation using TAS platform"}
                    location={"http://lms.negst.com.ng/"}
                />

                <BusinessCards
                    click={ selectThisCard}
                    title={"NIN VERIFICATION"}
                    image={"assets/certify.png"}
                    text={"Platform designed for the reliable verification and authentication of NIN numbers"}
                    location={`${process.env.SITEURL}/#/ninverification`}
                />
            </div>
            <Footer />
        </div>
    )
}

export default Business