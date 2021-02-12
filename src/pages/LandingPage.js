import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import Aos from "aos";

import "aos/dist/aos.css";

import Navigation from "../components/Navigation";
import Card from "../components/Cards";
import Footer from "../components/Footer";

import landing from "../assets/banner.svg";
import Button from "../components/Button";

import community from "../assets/community.svg";
import business from "../assets/business.svg";
import citizens from "../assets/citizens.svg";

const LandingPage = (props) => {
  const history = useHistory();
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const [serv, setService] = useState([
    {
      icon: "fas fa-book",
      hd: "Open Government",
      slug: "open_government",
      subtext:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
    {
      icon: "fas fa-passport",
      hd: "Nigerian E-Passport",
      slug: "nigerian_e_passport",
      subtext:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
    {
      icon: "fas fa-plane",
      hd: "E-VISA",
      slug: "e_visa",
      subtext:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
    {
      icon: "fas fa-clipboard-list",
      hd: "Diaspora NIN Enrollment",
      slug: "diaspora_nin_enrollment",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
    {
      icon: "fas fa-user-check",
      hd: "NIN Verification",
      slug: "nin_verification",
      subtext:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
    {
      icon: "fas fa-tv",
      hd: "Digital Content Integration",
      slug: "digital_content_integration",
      subtext:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
    {
      icon: "fas fa-money-bill-alt",
      hd: "Payment System",
      slug: "payment_system",
      subtext:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
    {
      icon: "fas fa-graduation-cap",
      hd: "Certificate Verification",
      slug: "certificate_verification",
      subtext:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
    {
      icon: "fas fa-sort-numeric-up",
      hd: "Agency Ranking",
      slug: "agency_ranking",
      subtext:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
  ]);

  const selectThisCard = (service) => {
    history.push({
      pathname: `/slug/${service.slug || service.text}`,
      state: service,
    });
  };

  return (
    <div className="landing">
      <Navigation />
      <div className="banner">
        <div className=" row">
          <div className="col-md-6 banner-text">
            <h1>can the government be accountable</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries
              <br />
              <br />
              <br />
              <Button name={"Contact us"} />
            </p>
          </div>
          <div className="banner-img col-md-6">
            <img src={landing} />
          </div>
        </div>
      </div>
      <div className="aspect">
        <h1 style={{ textAlign: "center", fontSize: "2.5rem" }}>OUR AREAS</h1>
        <p style={{ fontSize: "0.95rem", color: "grey", textAlign: "center" }}>
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
        <h1 style={{ textAlign: "center", fontSize: "2.5rem" }}>
          QUICK SERVICES
        </h1>
        <p style={{ fontSize: "0.9rem", color: "grey", textAlign: "center" }}>
          {" "}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry
        </p>
        <div className="container">
          <div className="row">
            {serv.map((service, i) => (
              <Card
                key={i}
                selectCard={() => selectThisCard(service)}
                icon={service.icon}
                hd={service.hd}
                text={service.subtext}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default connect()(LandingPage);
