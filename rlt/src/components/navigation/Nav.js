import React from "react";
import fossil_emblem from "../../assets/fossil_emblem.jpeg";
import PrimaryBtn from "../buttons/PrimaryBtn";

const Nav = () => {
  return (
    // <BrowserRouter>
    <nav className="main_nav md:flex py-5 px-0 bg-slate-300 w-screen fixed top-0 opacity-95 z-50">
      <div className="company-container my-0 mx-auto hidden md:block md:m-auto">
        <div className="logo-wrapper">
          <img
            src={fossil_emblem}
            alt="ammonite"
            className="nav-logo my-0 mx-auto h-auto w-11 rounded-full hover:scale-110"
          />
        </div>
        <div className="company-title hidden md:block">
          <h1>The Road Less Travelled</h1>
          <span>Geologically themed holidays and excursions</span>
        </div>
      </div>
      <ul className="nav_links md:m-auto md:flex md:items-center hidden">
        <li className="inline m-4 justify-self-end">
          <PrimaryBtn linkTxt="Home" href={"#"} />
        </li>
        <li className="inline m-4 justify-self-end">
          <PrimaryBtn
            href={"#destinations"}
            linkTxt="Destinations"
          ></PrimaryBtn>
        </li>
        <li className="inline m-4 justify-self-end">
          <PrimaryBtn
            href={"#about_site"}
            linkTxt="About the Site"
          ></PrimaryBtn>
        </li>
        <li className="inline m-4 justify-self-end">
          <a className="cursor-pointer">
            <img
              src="https://img.icons8.com/color/344/facebook-new.png"
              alt="facebook icon"
              className="social_media_icon inline w-7 h-auto"
            />
          </a>
        </li>
        <li className="inline m-4 justify-self-end">
          <a className="cursor-pointer">
            <img
              src="https://img.icons8.com/fluency/344/instagram-new.png"
              alt="instagram icon"
              className="social_media_icon inline w-7 h-auto"
            />
          </a>
        </li>
        <li className="inline m-4 justify-self-end">
          <a className="cursor-pointer">
            <img
              src="https://img.icons8.com/fluency/344/twitter.png"
              alt="twitter icon"
              className="social_media_icon inline w-7 h-auto"
            />
          </a>
        </li>
      </ul>
    </nav>
    // </BrowserRouter>
  );
};
export default Nav;
