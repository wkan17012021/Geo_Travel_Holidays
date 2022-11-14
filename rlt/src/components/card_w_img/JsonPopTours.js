import React from "react";
import Data from "../../data/pop-tours.json";

const JsonPopTours = () => {
  return (
    <div className="card_container max-w-7xl my-12 mx-auto flex flex-col gap-2 md:flex-row md:flex-wrap">
      {Data.tours.map((record) => {
        // console.log(record);
        return (
          <div
            className="card_item_wrapper max-w-sm border border-black rounded-2xl my-0 mx-auto shadow-xl hover:transition ease-in-out hover:-translate-y-1 hover:scale-100 duration-200 hover:outline-brand-purple hover:outline-offset-2 focus:outline-none focus:ring-2 focus:ring-brand-purple focus:ring-offset-2 hover:outline "
            key={record.id}
          >
            <figure className="img_wrapper text-center">
              <a href={record.moreInfo} target="_blank" rel="noreferrer">
                <img
                  src={record.imgPath}
                  title={record.alt}
                  alt={record.alt}
                  className="rounded-t-2xl aspect-[1/0.8]"
                />
                <figcaption className="hover-underline-animation my-4 mx-auto text-black text-xl inline-block relative after:content-[''] after:absolute after:w-full  after:scale-x-0 after:h-1 after:bottom-0 after:left-0 after:bg-brand-purple after:origin-bottom-right after:transition after:transform after:duration-500 after:ease-out hover:after:delay-150 hover:after:scale-x-100 hover:after:origin-bottom-left">
                  {record.alt}
                </figcaption>
              </a>
            </figure>
            <div key={record.id} className="item_wrapper py-0 px-4 my-4 mx-0">
              <span className="price my-0 mx-2">Price: £{record.price}</span>
              <span className="rating my-0 mx-2">Rating: {record.rating}</span>
              <p className="my-4 mx-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                aliquid repellat obcaecati vel. Repellendus, facilis.
              </p>
              <hr />
              <div className="item_details_wrapper my-4 mx-0 flex items-center justify-start">
                <img
                  className="calendar_icon inline-block w-7 h-auto"
                  alt="calendar icon representing number of days for this trip"
                  title="trip duration in days"
                  src="https://img.icons8.com/fluency/48/000000/calendar.png"
                />
                <span
                  className="duration my-0 mx-2"
                  title="trip duration in days"
                >
                  {record.duration}
                </span>
                <img
                  className="inline-block w-7 h-auto"
                  alt="people icon representing number of persons for this trip"
                  title="maximum number of people allowed for the trip"
                  src="https://img.icons8.com/fluency/48/000000/conference-call.png"
                />
                <span
                  className="capacity my-0 mx-2"
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
