import React from "react";

const Input = (props) => {
  return (
    <div className="input-cont">
      <input
        required
        placeholder={props.placeholder}
        type={props.type}
        name={props.email}
        onChange={(e) => props.onChange(e.target.value)}
      />
      <div className="input-img-cont">
        <img src={props.img} />
      </div>
    </div>
  );
};

export default Input;
