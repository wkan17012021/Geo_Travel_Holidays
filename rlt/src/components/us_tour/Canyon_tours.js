import React from "react";
import Img1 from "../../assets/usa_canyon_photos/antelope_canyon_trail_612x816.jpg";
import Img2 from "../../assets/usa_canyon_photos/grand_canyon_754x611.JPG";
import Img3 from "../../assets/usa_canyon_photos/antelope_canyon_trail_612x816(2).jpg";
import Img4 from "../../assets/usa_canyon_photos/antelope_canyon_2_500x332.JPG";
import Img5 from "../../assets/usa_canyon_photos/antelope_canyon_612x816(3).JPG";
import Img6 from "../../assets/usa_canyon_photos/grand_canyon_overcast_754x611.jpg";

const CanyonTours = () => {
  return (
    <section>
      <h2>Canyon Tours, USA</h2>
      <div className="usa_grid_container">
        <div className="img_1_wrapper">
          <img loading="lazy" src={Img1} alt="narrow pass through pink orange sandstone walls"/>
        </div>
        <div className="img_2_wrapper">
          <img loading="lazy" src={Img2} alt="grand canyon with visitors sitting on cliff edge"/>
        </div>
        <div className="img_3_wrapper">
          <img loading="lazy" src={Img3} alt="ornate pink orange sandstone walls"/>
        </div>
        <div className="img_4_wrapper">
          <img loading="lazy" src={Img4} alt="pink orange sandstone with wavy undulating faces"/>
        </div>
        <div className="img_5_wrapper">
          <img loading="lazy" src={Img5} alt="pink orange sandstone narrow pass with sunlight streaming above"/>
        </div>
        <div className="img_6_wrapper">
          <img loading="lazy" src={Img6} alt="grand canyon on overcast day"/>
        </div>
        <div className="txt_wrapper">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias vitae deleniti eum deserunt omnis, obcaecati aspernatur quo atque dolores iusto, libero suscipit sint esse recusandae accusamus, sapiente fugit dolore itaque ut iste. Minus doloribus harum aliquid illum numquam enim velit, quaerat quod, temporibus voluptates libero possimus.</p>
        </div>
        <div className="txt_wrapper">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint enim necessitatibus voluptatibus maxime qui aliquid quam doloribus eaque beatae blanditiis impedit earum reprehenderit nam eligendi aut odit, veritatis nisi suscipit quisquam ex! Perferendis fugiat porro accusantium aliquid? </p>
        </div>
        <div className="txt_wrapper_span">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At corporis cumque voluptates ipsam molestias consequatur accusantium neque totam animi enim delectus accusamus laboriosam aspernatur recusandae libero fugit corrupti error possimus est aliquid minus, culpa voluptate nemo!</p>
        </div>
      </div>
    </section>
  );
};

export default CanyonTours;
