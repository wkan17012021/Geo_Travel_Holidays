import React from "react";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

const PrimaryBtn = (props) => {
  return (
    <BrowserRouter>
      <Link
        class="primary_btn inline-flex items-center border-0 rounded-lg p-2 bg-brand-purple drop-shadow-xl 
        focus:outline-none focus:ring-2 focus:ring-brand-purple focus:ring-offset-2 hover:outline-double hover:outline-brand-purple hover:outline-offset-2 hover:transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
        smooth
        to={props.href}
      >
        {props.linkTxt}
      </Link>
    </BrowserRouter>
  );
};

export default PrimaryBtn;
