import React from "react";

function Alert(props) {
  return (
    <div
      role="alert"
      className={`alert alert-${props.type} fade in text-center`}
      style={{ width: "80%", margin: "0 auto", ...props.style }}
    >
      {props.children}
    </div>
  );
}

export default Alert;
