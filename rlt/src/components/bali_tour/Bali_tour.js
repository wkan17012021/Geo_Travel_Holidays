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
    <div className="bali-main-container">
      <div className="bali-inner-wrapper my-0 mx-auto py-4 px-8">
        <div>
          <div className="intro-wrapper my-6 mx-auto lg:max-w-fit lg:my-6">
            <h2>Bali Tour</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, nulla nostrum ut dolorem, omnis, temporibus nisi beatae vitae voluptatem accusantium consequatur non accusamus adipisci repellendus? Nesciunt aperiam maxime consequatur fugit?
            </p>
          </div>
          <ul
            role="list"
            className="list-items my-4 mx-8 grid md:grid-cols-2 gap-y-4 md:gap-x-8 lg:grid-cols-3 lg:gap-x-12"
          >
            {baliInfo.map((location) => (
              <li key={location.name}>
                <div>
                  <div>
                    <img
                      className="list_item_img rounded-lg object-cover shadow-xl"
                      src={location.imageUrl}
                      alt={location.imageAlt}
                    />
                  </div>
                  <div className="list_item_detail mt-4">
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
