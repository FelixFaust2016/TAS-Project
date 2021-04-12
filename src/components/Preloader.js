import React from "react";

import preloader from "../assets/preloader.svg";

const Preloader = () => {
  return (
    <div className="preloader-container">
      <img src={preloader} />
    </div>
  );
};

export default Preloader;
