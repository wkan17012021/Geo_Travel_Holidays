import React from "react";
import { slide as Menu } from "react-burger-menu";
// https://www.digitalocean.com/community/tutorials/react-react-burger-menu-sidebar

export default () => {
  return (
    <Menu className="sidebar_menu">
      <a className="menu-item" href="#panels">
        Home
      </a>
      <a className="menu-item" href="#destinations">
        Destinations
      </a>
      <a className="menu-item" href="#about_site">
        About the Site
      </a>
      <img
        src="https://img.icons8.com/color/344/facebook-new.png"
        alt="facebook icon"
        className="social_media_icon"
        loading="lazy"
      />
      <img
        src="https://img.icons8.com/fluency/344/instagram-new.png"
        alt="instagram icon"
        className="social_media_icon"
        loading="lazy"
      />
      <img
        src="https://img.icons8.com/fluency/344/twitter.png"
        alt="twitter icon"
        className="social_media_icon"
        loading="lazy"
      />
    </Menu>
  );
};
