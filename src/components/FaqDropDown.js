import React, { useState } from "react";
import drop from "../assets/greyddrop.png";

const Drop = (props) => {
  const [hide, setHide] = useState(false);

  return (
    <div>
      <div
        onClick={() => setHide(!hide)}
        style={{
          width: "100%",
          padding: "10px 30px",
          display: "flex",
          color: "rgba(1, 120, 154, 1)",
          justifyContent: "space-between",
          background: "rgba(237, 246, 248, 1)",
        }}
      >
        <span
          style={{
            fontSize: "14px",
            fontWeight: "600",
          }}
        >
          {props.title}
        </span>
        <div style={{ width: "15px", height: "15px" }}>
          <img
            onClick={() => setHide(!hide)}
            style={{
              transform: hide === true ? "rotate(-90deg)" : "",
              width: "100%",
              transition: "0.1s ease-in-out",
              cursor: "pointer",
            }}
            src={drop}
          />
        </div>
      </div>
      {hide && (
        <div
          style={{ padding: "10px 20px", background: "rgba(237, 246, 248, 1)" }}
        >
          <p
            style={{
              color: "rgba(2, 62, 79, 1)",
              fontSize: "12px",
              padding: "0px 20px",
            }}
          >
            {props.description}
          </p>
        </div>
      )}
    </div>
  );
};

export default Drop;
