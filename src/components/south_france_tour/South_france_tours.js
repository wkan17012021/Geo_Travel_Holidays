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
    <section className="fr_main_container max-w-7xl mx-auto md:px-6">
      <div className="fr_inner_wrapper md:my-0 md:mx-auto md:py-4 md-px-0 lg:p-12">
        <div className="fr_inner_grid_wrapper mt-12 lg:grid lg:grid-cols-3 lg:gap-2 lg:my-0 lg:mx-auto">
          <div className="intro_section px-4 lg:mt-16">
            <h2>South of France Tours</h2>
            <p>
              Nulla quam felis, enim faucibus proin velit, ornare id pretium.
              Augue ultrices sed arcu condimentum vestibulum suspendisse.
              Volutpat eu faucibus vivamus eget bibendum cras.
            </p>
          </div>
          <div className="bio_section lg:col-span-2">
            <ul
              className="mt-8 border-t border-gray-400 lg:grid lg:grid-cols-2 lg:gap-y-4 lg:mt-0"
            >
              {locationData.map((location) => (
                <li
                  key={location.id}
                  className="location-list-item py-4 px-0 my-0 mx-auto lg:max-w-full lg:m-0"
                >
                  <div className="location_list_item_grid_wrapper px-4 t-8 md:grid md:grid-cols-2 md:gap-4 lg:grid lg:grid-cols-3 lg:place-items-start lg:gap-4 ">
                    <div className="md:col-start-1 lg:col-start-1 lg:col-end-4">
                      <img
                        src={location.imageUrl}
                        alt={location.imageAlt}
                        className={
                          "md:aspect-[3/2] rounded-lg object-cover shadow-xl" +
                          location.customStyles
                        }
                      />
                    </div>
                    <div className="location_details_wrapper text-left md:col-start-2 md:col-end-4 lg:col-start-1 lg:col-end-4">
                      <div className="mt-8 pr-4 md:my-0 md:p-0">
                        <div className="mt-4">
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
