import React from "react";

function Input(props) {
  return (
    <div>
      <p> {props.hName} </p>
      <input
        type={props.type}
        placeholder={props.placeholder}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}

export default Input;
