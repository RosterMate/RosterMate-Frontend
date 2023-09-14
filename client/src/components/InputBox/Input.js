import React from "react";

function Input(props) {
  return (
    <div>
      <p> {props.hName} </p>
      <input
        type={props.type}
        placeholder={props.placeholder}
        id={props.id}
        onChange={props.onChange}
      ></input>
    </div>
  );
}

export default Input;
