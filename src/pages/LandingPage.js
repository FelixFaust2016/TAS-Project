import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import Aos from "aos";

import "aos/dist/aos.css";

import Navigation from "../components/Navigation";
import Card from "../components/Cards";

import landing from "../assets/banner.svg";
import Button from "../components/Button";

import community from "../assets/community.svg";
import business from "../assets/business.svg";
import citizens from "../assets/citizens.svg";

const LandingPage = (props) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const [serv, setService] = useState([
    {
      icon: "fas fa-book",
      hd: "Open Government",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      icon: "fas fa-passport",
      hd: "Nigerian E-Passport",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      icon: "fas fa-plane",
      hd: "E-VISA",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      icon: "fas fa-clipboard-list",
      hd: "Diaspora NIN Enrollment",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      icon: "fas fa-user-check",
      hd: "NIN Verification",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      icon: "fas fa-tv",
      hd: "Digital Content Integration",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      icon: "fas fa-money-bill-alt",
      hd: "Payment System",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      icon: "fas fa-graduation-cap",
      hd: "Certificate Verification",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      icon: "fas fa-sort-numeric-up",
      hd: "Agency Ranking",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
  ]);

  return (
    <div className="landing">
      <Navigation />
      <div className="banner">
        <div className="banner-text">
          <h1>can the government be accountable</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries
            <br />
            <br />
            <br />
            <Button name={"Contact us"} />
          </p>
        </div>
        <div className="banner-img">
          <img src={landing} />
        </div>
      </div>
      <div className="aspect">
        <h1 style={{ textAlign: "center", fontSize: "40px" }}>OUR AREAS</h1>
        <p style={{ fontSize: "12px", color: "grey", textAlign: "center" }}>
          {" "}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry
        </p>
        <div className="aspect-cont">
          <div data-aos="fade-down" className="aspect-text">
            <h1>GOVERNMENT</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
          <div data-aos="fade-up" className="aspect-img">
            <img src={community} />
          </div>
        </div>

        <div className="aspect-cont">
          <div data-aos="fade-down" className="aspect-img">
            <img src={business} />
          </div>
          <div data-aos="fade-up" className="aspect-text">
            <h1>BUSSINESS</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
        </div>

        <div className="aspect-cont">
          <div data-aos="fade-down" className="aspect-text">
            <h1>CITIZENS</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
          <div data-aos="fade-up" className="aspect-img">
            <img src={citizens} />
          </div>
        </div>
      </div>

      <div className="services">
        <h1 style={{ textAlign: "center", fontSize: "40px" }}>
          QUICK SERVICES
        </h1>
        <p style={{ fontSize: "12px", color: "grey", textAlign: "center" }}>
          {" "}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry
        </p>
        <div className="service-cont">
          {serv.map((service, i) => (
            <Card
              key={i}
              icon={service.icon}
              hd={service.hd}
              text={service.text}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default connect()(LandingPage);
