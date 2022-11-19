import React from "react";
import Video from "../../assets/mixkit-hiker-with-a-backpack-watching-the-winter-mountains-36986-medium.mp4";
import PlaceHolder from "../../assets/video_placeholder.png";

const VideoBanner = () => {
  return (
    <section class="showcase relative">
      <span class="banner_title text-base underline decoration-brand-purple md:text-2xl absolute top-1/2 right-5 bg-slate-200 opacity-80">Where will your journey take you?</span>
      <video
        class="showcase_video w-full"
        alt="man in snowy mountains"
        loop
        muted
        autoPlay
        controls
        playsInline
        loading="lazy"
        poster={PlaceHolder}
      >
        <source src={Video} type="video/mp4"></source>
      </video>
    </section>
  );
};

export default VideoBanner;
