import React from "react";

const PopularDestinations = (props) => {
  return (
    <h2 id={props.redirectLink} className="scroll-mt-40">
      {props.title}
    </h2>
  );
};

export default PopularDestinations;
