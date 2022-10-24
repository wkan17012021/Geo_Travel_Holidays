import React from "react";
import Img1 from "../../assets/france_tour_photos/pont_du_gard_684x912.jpg";
import Img2 from "../../assets/france_tour_photos/roussillon_crossbedded_hematite_geothite_sands_912x684.jpg";
import Img3 from "../../assets/france_tour_photos/roussillon_quarry_red route_912x684.jpg";

const SouthFranceTours = () => {
  return (
    <section>
      <h2>South France Tours</h2>
      <div className="france_grid_container">
        <div className="fr_img_1_wrapper">
          <img loading="lazy" src={Img1} alt="rousillon 1" />
        </div>
        <div className="fr_img_2_wrapper">
          <img loading="lazy" src={Img2} alt="rousillon 2" />
        </div>
        <div className="fr_img_3_wrapper">
          <img loading="lazy" src={Img3} alt="pont du gard" />
        </div>
        <div className="fr_txt_wrapper_1">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias vitae
            deleniti eum deserunt omnis, obcaecati aspernatur quo atque dolores
            iusto, libero suscipit sint esse recusandae accusamus, sapiente
            fugit dolore itaque ut iste. Minus doloribus harum aliquid illum
            numquam enim velit, quaerat quod, temporibus voluptates libero
            possimus.
          </p>
        </div>
        <div className="fr_txt_wrapper_2">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias vitae
            deleniti eum deserunt omnis, obcaecati aspernatur quo atque dolores
            iusto, libero suscipit sint esse recusandae accusamus, sapiente
            fugit dolore itaque ut iste. Minus doloribus harum aliquid illum
            numquam enim velit, quaerat quod, temporibus voluptates libero
            possimus.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SouthFranceTours;
