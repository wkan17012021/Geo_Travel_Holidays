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
          carefully crafted for the seasoned traveller. We blend destinations
          that offer a visual wow factor, while emparting knowledge on
          the natural processes that have shaped and sculpted the site as you
          see it today.
        </div>
        <div label="Diverse Destinations">
          It really is our mission to offer discrete, "once-in-a-lifetime" tours
          and holidays that really leave a lasting memory. From snowy
          landscapes, to sub-baked treks, we cater to all customers with
          curiousity and a love for the outdoors. What makes RLT stand out from
          other travel agents, is that we curate bespoke itineraries which
          inform and intrigue the traveller of their destination's physical
          scenery from a geological and perspective.
        </div>
        <div label="Personal Guide">
          We want our customers to take home life-long memories of their trips
          not just with rich photos, but with impactful knowledge about their
          destination which makes it unique. Our guides are fountains of
          knowledge and display real enthusiasm- they can't wait to show you
          special locations less frequented by the tourist crowds. We feel this
          makes our sites and itineraries return meaningful value back to the
          customer.
        </div>
      </Tabs>
      <AdviceGen />
    </section>
  );
};

export default TwoColLayout;
