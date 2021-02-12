import React, { useState } from "react";

import Card from "../components/Cards";
import Navigation from "../components/Navigation";

import Footer from "../components/Footer";

const Apps = () => {
  const [serv, setService] = useState([
    {
      icon: "fas fa-book",
      hd: "TAS",
      slug: "tas",
      subtext:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
    {
      icon: "fas fa-passport",
      hd: "EDMS",
      slug: "edms",
      subtext:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
    {
      icon: "fas fa-plane",
      hd: "TEACHERS TOOLS",
      slug: "teacher_tool",
      subtext:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
   ]);
  return (
    <div>
      <Navigation />
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
      <Footer />
    </div>
  );
};

export default Apps;
