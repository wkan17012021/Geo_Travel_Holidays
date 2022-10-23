import React from "react";
import Img1 from "../../assets/usa_canyon_photos/antelope_canyon_trail_612x816.jpg";
import Img2 from "../../assets/usa_canyon_photos/grand_canyon_10721x712.JPG";
import Img3 from "../../assets/usa_canyon_photos/antelope_canyon_trail_612x816(2).jpg";
import Img4 from "../../assets/usa_canyon_photos/antelope_canyon_2_500x332.JPG";
import Img5 from "../../assets/usa_canyon_photos/antelope_canyon_500x500.JPG";
import Img6 from "../../assets/usa_canyon_photos/grand_canyon_overcast_754x611.jpg";

const CanyonTours = () => {
  return (
    <section>
      <h2>Canyon Tours, USA</h2>
      <div className="usa_grid_container">
        <div className="img_1_wrapper">
          <img alt="text" loading="lazy" src={Img1} />
        </div>
        <div className="img_2_wrapper">
          <img alt="text" loading="lazy" src={Img2} />
        </div>
        <div className="img_3_wrapper">
          <img alt="text" loading="lazy" src={Img3} />
        </div>
        <div className="img_4_wrapper">
          <img alt="text" loading="lazy" src={Img4} />
        </div>
        <div className="img_5_wrapper">
          <img alt="text" loading="lazy" src={Img5} />
        </div>
        <div className="img_6_wrapper">
          <img alt="text" loading="lazy" src={Img6} />
        </div>
        <div className="txt_wrapper">
          <p>text</p>
        </div>
        <div className="txt_wrapper">
          <p>text</p>
        </div>
      </div>
    </section>
  );
};

export default CanyonTours;
