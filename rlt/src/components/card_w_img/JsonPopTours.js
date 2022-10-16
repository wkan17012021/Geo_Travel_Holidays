import React from "react";
import Data from "../../data/pop-tours.json";

const JsonPopTours = () => {
  // console.log(Data); returns the JSON data but we need to map over the array which is tours array
  return (
    <div className="card_container">
      {Data.tours.map((record) => {
        // console.log(record);
        return (
          <div className="card_item_wrapper" key={record.id}>
            <figure className="img_wrapper">
              <a href={record.moreInfo} target="_blank" rel="noreferrer">
                <img src={record.imgPath} title={record.alt} alt={record.alt} />
                <figcaption className="hover-underline-animation">{record.alt}</figcaption>
              </a>
            </figure>
            <div key={record.id} className="item_wrapper">
              <span className="price">Price: £{record.price}</span>
              <span className="rating">Rating: {record.rating}</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                aliquid repellat obcaecati vel. Repellendus, facilis.
              </p>
              <hr />
              <div className="item_details_wrapper">
                <img
                  className="calendar_icon"
                  alt="calendar icon representing number of days for this trip"
                  title="trip duration in days"
                  src="https://img.icons8.com/fluency/48/000000/calendar.png"
                />
                <span className="duration" title="trip duration in days">
                  {record.duration}
                </span>
                <img
                  alt="people icon representing number of persons for this trip"
                  title="maximum number of people allowed for the trip"
                  src="https://img.icons8.com/fluency/48/000000/conference-call.png"
                />
                <span
                  className="capacity"
                  title="maximum number of people allowed for the trip"
                >
                  {record.capacity}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default JsonPopTours;
