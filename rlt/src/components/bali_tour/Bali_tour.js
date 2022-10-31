import React from "react";
import Img1 from "../../assets/bali_tour_photos/bali_beach_1040x780.jpg";
import Img2 from "../../assets/bali_tour_photos/morning_trek_batuur_1040x683.jpg";
import Img3 from "../../assets/bali_tour_photos/bali_fields_1040x780.jpg";

const baliInfo = [
  {
    id: 1,
    name: "Bali Beach",
    subject: "Relax with a refreshing beverage after surfing",
    imageUrl: Img1,
    imageAlt: "Seaside view in Bali, popular sufing spot",
  },
  {
    id: 2,
    name: "Bali Mount Batuur Volcano",
    subject: "Enjoy the sunrise atop Batuur",
    imageUrl: Img2,
    imageAlt:
      "Sunny hiking trail and grassy foreground with a collapsed caldera in the background",
  },
  {
    id: 3,
    name: "Ubud Rice Terraces",
    subject: "Take a stroll along picturesque rice terraces",
    imageUrl: Img3,
    imageAlt:
      "Lush green, tropical vegetation with clearly constructed terrace development",
  },
];

export default function BaliTour() {
  return (
    <div className="bali_main_container">
      <div className="bali_inner_wrapper">
        <div>
          <div className="intro_wrapper">
            <h2>Bali Tour</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, nulla nostrum ut dolorem, omnis, temporibus nisi beatae vitae voluptatem accusantium consequatur non accusamus adipisci repellendus? Nesciunt aperiam maxime consequatur fugit?
            </p>
          </div>
          <ul
            role="list"
            className="list_items"
          >
            {baliInfo.map((location) => (
              <li key={location.name}>
                <div>
                  <div>
                    <img
                      className="list_item_img"
                      src={location.imageUrl}
                      alt={location.imageAlt}
                    />
                  </div>
                  <div className="list_item_details">
                    <div>
                      <h3>{location.name}</h3>
                      <p>{location.subject}</p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
