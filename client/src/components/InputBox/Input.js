import React from "react";

function Input(props) {
  return (
    <div>
      <p> {props.hName} </p>
      <input
        type={props.type}
        className={props.className}
        placeholder={props.placeholder}
        id={props.id}
        autoComplete={props.autoComplete}
        required
        value={props.value}
        onChange={props.onChange}
      ></input>
    </div>
  );
}

export default Input;
