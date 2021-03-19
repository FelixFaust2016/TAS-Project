import React, { useState } from "react";

import Card from "../components/Cards";
import Navigation from "../components/Navigation";

import Footer from "../components/Footer";

const Apps = (props) => {

  const [serv, setService] = useState([
    {
      icon: "fas fa-book",
      hd: "NIN-verification",
      slug: "tas",
      subtext:
        "Platform designed for the reliable verification and authentication of NIN numbers",
      dest: `${process.env.SITEURL}/#/ninverification`,
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
    {
      icon: "fas fa-folder-open",
      hd: "EDMS",
      slug: "edms",
      subtext:
        "Electronic document management system for digital authentication and verification of documents.",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
    {
      icon: "fas fa-graduation-cap",
      hd: "E-LEARNING",
      slug: "teacher_tool",
      subtext:
        "product of NeGst built to help facilitate electronic education of the nation using TAS platform",
      dest: 'http://lms.negst.com.ng/',
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
    {
      icon: "fas fa-oil-can",
      hd: "PETROHUB",
      slug: "petro_hub",
      subtext:
        "product of NeGst built to help facilitate electronic education of the nation using TAS platform",
      dest: '',
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
  ]);

  const selectThisCard = (url) => {

    // e.preventDefault();
    if (url) {
      window.location.assign(url);
    }

  }

  return (
    <div>
      {/* <Navigation /> */}
      <div className="container" style={{}}>
        <div className="row"
        >
          {serv.map((service, i) => (
            <Card
              key={i}
              selectCard={() => selectThisCard(service.dest)}
              icon={service.icon}
              hd={service.hd}
              text={service.subtext}
            />
          ))}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Apps;
