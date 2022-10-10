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
                <figcaption>{record.alt}</figcaption>
              </a>
            </figure>
            <div key={record.id} className="item_wrapper">
              <span className="price">{record.price}</span>
              <span className="rating">{record.rating}</span>
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
                <span className="duration">{record.duration}</span>
                <img
                  alt="people icon representing number of persons for this trip"
                  src="https://img.icons8.com/fluency/48/000000/conference-call.png"
                />
                <span className="capacity">{record.capacity}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default JsonPopTours;
