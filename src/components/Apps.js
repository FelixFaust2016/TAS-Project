import React, { useState, useEffect } from "react";

const Apper = () => {
  const [app, setApp] = useState(false);

  useEffect(() => {
    const handleDropdonClose = () => {
      if (app) {
        setApp(false);
      }
    };
    window.addEventListener("click", handleDropdonClose);
    return () => window.removeEventListener("click", handleDropdonClose);
  }, [app]);

  return (
    <div style={{ position: "relative" }}>
      <li onClick={() => setApp(true)}>Apps</li>
      {app && (
        <div
          style={{
            position: "absolute",
            width: "300px",
            display: "flex",
            justifyContent: "space-between",
            background: "white",
            borderRadius: "10px",
            padding: "20px 40px",
            margin: "0px auto",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.05)",
            right: "5px",
            marginTop: "10px",
          }}
        >
          <div
            className="hover"
            style={{ textAlign: "center", cursor: "pointer" }}
          >
            <div>
              <i style={{ fontSize: "2.5rem" }} className="fas fa-book"></i>
            </div>
            <div
              className="hover-text"
              style={{
                fontSize: "0.9rem",
                marginTop: "10px",
              }}
            >
              tas
            </div>
          </div>
          <div
            className="hover"
            style={{ textAlign: "center", cursor: "pointer" }}
          >
            <div>
              <i style={{ fontSize: "2.5rem" }} className="fas fa-book"></i>
            </div>
            <div
              className="hover-text"
              style={{
                fontSize: "0.9rem",
                marginTop: "10px",
              }}
            >
              tas
            </div>
          </div>
          <div
            className="hover"
            style={{ textAlign: "center", cursor: "pointer" }}
          >
            <div>
              <i style={{ fontSize: "2.5rem" }} className="fas fa-book"></i>
            </div>
            <div
              className="hover-text"
              style={{
                fontSize: "0.9rem",
                marginTop: "10px",
              }}
            >
              tas
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Apper;
