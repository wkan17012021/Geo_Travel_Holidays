import React from "react";
import Tabs from "./intro/Tabs";
import AdviceGen from "./advice_gen/advice_gen";

const TwoColLayout = () => {
  return (
    <section className="two_col_container">
      <Tabs>
        <div label="Travel">
          The team at Road Less Travelled aims to provide a tailor-made
          experience for those yearning for an adventure holiday "off the beaten
          track". We aim to give our customers an exhilirating "forget-me-not"
          experience for the thrill-seekers, or perhaps an enlightening journey
          carefully curated for the seasoned traveller. We blend destinations
          that offer a visual wow factor, all the while emparting knowledge on
          the natural processes that have shaped and sculpted the site as you
          see it today.
        </div>
        <div label="Diverse Destinations">
          It really is our mission to offer discrete, "once-in-a-lifetime" tours
          and holidays that really leave a lasting memory. From X, to Y, we
          cater to a range of customers with curiousity and a love for the
          outdoors.
        </div>
        <div label="Personal Guide">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          aliquid expedita odio explicabo enim sed nisi ea provident assumenda
          ipsum iste rem obcaecati molestiae, quod soluta commodi at tempora
          blanditiis repellendus impedit? Molestiae atque impedit debitis
          numquam totam labore necessitatibus fuga libero, quo fugit aspernatur
          exercitationem ad deleniti soluta veritatis?
        </div>
      </Tabs>
      <AdviceGen />
    </section>
  );
};

export default TwoColLayout;
