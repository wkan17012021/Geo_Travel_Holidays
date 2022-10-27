import React from "react";
import Img1 from "../../assets/france_tour_photos/pont_du_gard_684x912.jpg";
import Img2 from "../../assets/france_tour_photos/roussillon_crossbedded_hematite_geothite_sands_912x684.jpg";
import Img3 from "../../assets/france_tour_photos/roussillon_quarry_red route_912x684.jpg";

const locationData = [
  {
    id: 1,
    placeName: "Roussillon, pigment quarry trail",
    address: "sentier des ocres, 84220 Roussillon, France",
    imageUrl: Img3,
    imageAlt: "tourists navigating the Roussillon ochre pigment quarry trail",
    descriptionText:
      "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
    customStyles: "",
  },
  {
    id: 2,
    placeName: "Roussillon, pigment quarry trail",
    address: "sentier des ocres, 84220 Roussillon, France",
    imageUrl: Img2,
    imageAlt: "crossbedded hematite and geothite sands, ochre coloured walls",
    descriptionText:
      "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
    customStyles: "",
  },
  {
    id: 3,
    placeName: "Pont du Gard",
    address: "400 Rte du Pont du Gard, 30210 Vers-Pont-du-Gard, France",
    imageUrl: Img1,
    imageAlt: "casual swimmers in the river overlooking Pont du Gard bridge",
    descriptionText:
      "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
    customStyles: "portrait-adj",
  },
];

const SouthFranceTours = () => {
  return (
    <section className="fr_main_container">
      <div className="fr_inner_wrapper">
        <div className="fr_inner_grid_wrapper">
          <div className="intro_section">
            <h2>South of France Tours</h2>
            <p>
              Nulla quam felis, enim faucibus proin velit, ornare id pretium.
              Augue ultrices sed arcu condimentum vestibulum suspendisse.
              Volutpat eu faucibus vivamus eget bibendum cras.
            </p>
          </div>
          <div className="bio_section lg:col-span-2">
            <ul role="list" className="sm:-mt-8 sm:space-y-0">
              {locationData.map((location) => (
                <li key={location.id} className="location_list_item">
                  <div
                    className="location_list_item_grid_wrapper"
                  >
                    <div>
                      <img src={location.imageUrl} alt={location.imageAlt} className={
                      location.customStyles}/>
                    </div>
                    <div className="location_details_wrapper">
                      <div>
                        <div>
                          <h3>{location.placeName}</h3>
                          <p>{location.address}</p>
                        </div>
                        <div>
                          <p>{location.descriptionText}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

// const SouthFranceTours = () => {
//   return (
//     <section>
//       <h2>South France Tours</h2>
//       <div className="france_grid_container">
//         <div className="fr_img_1_wrapper">
//           <img loading="lazy" src={Img1} alt="rousillon 1" />
//         </div>
//         <div className="fr_img_2_wrapper">
//           <img loading="lazy" src={Img2} alt="rousillon 2" />
//         </div>
//         <div className="fr_img_3_wrapper">
//           <img loading="lazy" src={Img3} alt="pont du gard" />
//         </div>
//         <div className="fr_txt_wrapper_1">
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias vitae
//             deleniti eum deserunt omnis, obcaecati aspernatur quo atque dolores
//             iusto, libero suscipit sint esse recusandae accusamus, sapiente
//             fugit dolore itaque ut iste. Minus doloribus harum aliquid illum
//             numquam enim velit, quaerat quod, temporibus voluptates libero
//             possimus.
//           </p>
//         </div>
//         <div className="fr_txt_wrapper_2">
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias vitae
//             deleniti eum deserunt omnis, obcaecati aspernatur quo atque dolores
//             iusto, libero suscipit sint esse recusandae accusamus, sapiente
//             fugit dolore itaque ut iste. Minus doloribus harum aliquid illum
//             numquam enim velit, quaerat quod, temporibus voluptates libero
//             possimus.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

export default SouthFranceTours;
