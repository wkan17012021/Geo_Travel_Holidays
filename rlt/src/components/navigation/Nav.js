import React from "react";
import fossil_emblem from "../../assets/fossil_emblem.jpeg"; 

const Nav = () => {
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
              <img src="https://img.icons8.com/color/344/facebook-new.png" alt="facebook icon" />
            </a>
          </li>
          <li>
            <a>
            <img src="https://img.icons8.com/fluency/344/instagram-new.png" alt="instagram icon" />
            </a>
          </li>
          <li>
            <a>
            <img src="https://img.icons8.com/fluency/344/twitter.png" alt="twitter icon" />
            </a>
          </li>
          <li>
            <a>
              <img src="https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/344/external-bars-development-royyan-wijaya-detailed-outline-royyan-wijaya-2.png" alt="hamburger icon"  color="white"/>
            </a>
          </li>
        </ul>
    </nav>
  );
};
export default Nav;
