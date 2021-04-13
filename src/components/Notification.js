import React from "react";

const Notification = ({ state, close }) => {
  return (
    <div className="notification_containers">
      <div
        style={state ? sucesStatus : failStatus}
        className="notification_status_container"
      >
        {state ? (
          <i className="far fa-check-circle"></i>
        ) : (
          <i className="far fa-times-circle"></i>
        )}
      </div>
      <div className="notificaton_right">
        <div className="notification_right_text">
          <h3 style={state ? sucessColor : failColor}>
            {state ? "Success" : "Failed"}
          </h3>
          <p>Your request is {state ? `sucessful` : `failed`}</p>
        </div>
        <span onClick={close}>CLOSE</span>
      </div>
    </div>
  );
};

const sucesStatus = {
  background: "#3CB371",
};

const sucessColor = {
  color: "#3CB371",
};

const failStatus = {
  background: "#FC6161",
};

const failColor = {
  color: "#FC6161",
};
export default Notification;
