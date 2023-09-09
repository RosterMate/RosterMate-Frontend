import React from "react";

function Button(props) {
  return (
    <button type={props.type} variant={props.variant} onClick={props.onClick}>
      {props.showMessage}
    </button>
  );
}

export default Button;
