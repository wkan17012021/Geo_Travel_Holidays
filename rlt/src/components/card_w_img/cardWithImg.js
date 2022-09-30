import React from "react";


const TourList = (props) => {
  return (
    <div className="card_container">
      {props.tour.map((place) => (
        <div className="card_item_wrapper">
          <figure className="img_wrapper">
            <a href={place.moreInfo} target="_blank" rel="noreferrer">
              <img src={place.imgPath} title={place.alt} alt={place.alt} />
              <figcaption>{place.alt}</figcaption>
            </a>
          </figure>
          <div key={place.id} className="item_wrapper">
            <span className="price">{place.price}</span>
            <span className="rating">{place.rating}</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              aliquid repellat obcaecati vel. Repellendus, facilis.
            </p>
            <hr />
            <div className="item_details_wrapper">
              <img
                className="calendar_icon"
                alt="calendar icon representing number of days for this trip"
                src="https://img.icons8.com/fluency/48/000000/calendar.png"
              />
              <span className="duration">{place.duration}</span>
              <img
                alt="people icon representing number of persons for this trip"
                src="https://img.icons8.com/fluency/48/000000/conference-call.png"
              />
              <span className="capacity">{place.capacity}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const ImgCard = () => {
  const tour = [
    {
      id: 1,
      duration: "4 days",
      capacity: "6 persons",
      price: "$500",
      rating: "10 / 10",
      imgPath:
        "https://images.unsplash.com/photo-1611862301382-fdf70949ab6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1206&q=80",
      alt: "Antelope Canyon, Arizona, USA",
      moreInfo: "https://www.ourbreathingplanet.com/antelope-canyon/",
    },
    {
      id: 2,
      duration: "8 days",
      capacity: "10 persons",
      price: "$800",
      rating: "8 / 10",
      imgPath:
        "https://images.unsplash.com/photo-1592960972125-630ee220aa08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
      alt: "Snæfellsnesvegur, Grundarfjörður, Iceland, Iceland",
      moreInfo: "https://www.facebook.com/geotoursice",
    },
  ];

  return <TourList tour={tour} />;
};

export default ImgCard;
