import React from "react";

const PrimaryBtn = (props) => {
  return (
    
    <button
      type="button"
      class="primary_btn"
    >
        <a target="_blank" href={props.href}></a>
      {props.btnText}
    </button>
  );
};

export default PrimaryBtn;
