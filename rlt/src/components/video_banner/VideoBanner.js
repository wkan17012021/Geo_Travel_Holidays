import React from "react";
import Video from "../../assets/mixkit-hiker-with-a-backpack-watching-the-winter-mountains-36986-medium.mp4";
import PlaceHolder from "../../assets/video_placeholder.png";

const VideoBanner = () => {
  return (
    <section class="showcase">
      <h2 class="banner_title">Where will your journey take you?</h2>
      <video
        class="showcase_video"
        poster={PlaceHolder}
        alt="man in snowy mountains"
        muted
        loop
        playsInline
        controls
        preload="none"
      >
        <source src={Video} type="video/mp4"></source>
      </video>
    </section>
  );
};

export default VideoBanner;
