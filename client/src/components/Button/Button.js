import React from "react";

// variant={props.variant}
function Button(props) {
  return (
    <button type={props.type} onClick={props.onClick}>
      {props.showMessage}
    </button>
  );
}

export default Button;
