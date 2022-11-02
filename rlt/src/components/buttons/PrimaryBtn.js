import React from "react";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

const PrimaryBtn = (props) => {
  return (
    <BrowserRouter>
    <Link class="primary_btn"
    smooth 
    to={props.href}>{props.linkTxt}</Link>
    </BrowserRouter>
  );
};

export default PrimaryBtn;
