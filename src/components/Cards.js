import React, { useEffect } from "react";
import Aos from "aos";

import "aos/dist/aos.css";

const Card = (props) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div data-aos="fade-down" className="card-cont">
      <div className="foward">
        <i id="icon" className={props.icon}></i>
        <h3 style={{ textAlign: "center" }}>{props.hd}</h3>
        <p style={{ textAlign: "center", fontSize: "12px", color: "grey" }}>
          {props.text}
        </p>
        <div
          className="ss"
          style={{ textAlign: "center", justifyContent: "center" }}
        >
          <span>see more</span>
          <i className="fas fa-arrow-right"></i>
        </div>
      </div>
      <div className="back"></div>
    </div>
  );
};

export default Card;
