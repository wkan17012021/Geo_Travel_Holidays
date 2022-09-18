import React from "react";
import fossil_emblem from "../../assets/fossil_emblem.jpeg"; 

const Nav = () => {
  console.log(fossil_emblem);
  return (
    <nav>
      <div className="company_container">
        <div className="logo_wrapper">
          <img src={fossil_emblem} alt="ammonite" className="nav_logo" width="50" height="auto"/>
        </div>
        <div className="company_title">
          <h1>The Road Less Travelled</h1>
        </div>
      </div>
      <ul className="nav_links">
          <li><a className="home" href="#">Home</a></li>
          <li><a href="#" target="blank">Destinations</a></li>
          <li><a href="#" target="blank">About the Site (the build history)</a></li>
          <li>
            <a>
              <i className="fab fa-facebook-square fa-2x"></i>
            </a>
          </li>
          <li>
            <a>
              <i className="fab fa-instagram fa-2x"></i>
            </a>
          </li>
          <li>
            <a>
              <i className="fab fa-twitter-square fa-2x"></i>
            </a>
          </li>
          <li>
            <a>
              <i className="fa fa-bars fa-2x" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
    </nav>
  );
};
export default Nav;
