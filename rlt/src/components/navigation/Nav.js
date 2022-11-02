import React from "react";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import fossil_emblem from "../../assets/fossil_emblem.jpeg";
import PrimaryBtn from "../buttons/PrimaryBtn";

const Nav = () => {
  return (
    <BrowserRouter>
      <nav className="main_nav">
        <div className="company_container">
          <div className="logo_wrapper">
            <img
              src={fossil_emblem}
              alt="ammonite"
              className="nav_logo"
              width="50"
              height="auto"
            />
          </div>
          <div className="company_title">
            <h1>The Road Less Travelled</h1>
          </div>
          <Link smooth to="#about_site">about</Link>
        </div>
        <ul className="nav_links">
          <li>
            <PrimaryBtn btnText="Home" href={"#"} />
          </li>
          <li>
            <PrimaryBtn btnText="Destinations" href={"#"}></PrimaryBtn>
          </li>
          <li>
            <PrimaryBtn btnText="About the Site" href={"#about_site"}>
              <Link to="#about_site">about</Link>
            </PrimaryBtn>
          </li>
          <li>
            <a>
              <img
                src="https://img.icons8.com/color/344/facebook-new.png"
                alt="facebook icon"
                className="social_media_icon"
              />
            </a>
          </li>
          <li>
            <a>
              <img
                src="https://img.icons8.com/fluency/344/instagram-new.png"
                alt="instagram icon"
                className="social_media_icon"
              />
            </a>
          </li>
          <li>
            <a>
              <img
                src="https://img.icons8.com/fluency/344/twitter.png"
                alt="twitter icon"
                className="social_media_icon"
              />
            </a>
          </li>
        </ul>
      </nav>
    </BrowserRouter>
  );
};
export default Nav;
