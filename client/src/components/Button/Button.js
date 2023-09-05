import React from "react";

function Button(props) {
  return (
    <button
      className={props.className}
      type={props.type}
      fullWidth
      variant={props.variant}
      onClick={props.onClick}
    >
      {props.showMessage}
    </button>
  );
}

export default Button;
