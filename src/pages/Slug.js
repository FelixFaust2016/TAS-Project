import React from "react";

import Navigation from "../components/Navigation";

const Slug = ({ location }) => {
  return (
    <div>
      <Navigation />
      <h1 style={{ textAlign: "center", color: "#FF8811" }}>
        {location.state.hd}
      </h1>
      <p style={{ width: "400px", margin: "0px auto" }}>
        {location.state.subtext}
      </p>
      <p
        style={{
          width: "400px",
          // textAlign: "center",
          margin: "0px auto",
          fontSize: "0.9rem",
          marginTop: "20px",
        }}
      >
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum",
      </p>
    </div>
  );
};

export default Slug;
