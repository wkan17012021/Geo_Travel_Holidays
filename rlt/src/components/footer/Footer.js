import React from "react";
import fossil_emblem from "../../assets/fossil_emblem.jpeg"; 

export default function Footer() {
    return (
        <footer>
            <div className="footer_contact">
                <h3>Reach Out to Us</h3>
                <ul>
                    <li>rlt@hotmail.com</li>
                    <li>01234 567 890</li>
                    <li>
            <a>
              <img src="https://img.icons8.com/color/344/facebook-new.png" alt="facebook icon" className="social_media_icon" />
            </a>
          </li>
          <li>
            <a>
            <img src="https://img.icons8.com/fluency/344/instagram-new.png" alt="instagram icon" className="social_media_icon" />
            </a>
          </li>
          <li>
            <a>
            <img src="https://img.icons8.com/fluency/344/twitter.png" alt="twitter icon" className="social_media_icon" />
            </a>
          </li>
                </ul>
                
            </div>
            <div className="sign_off_remark">
                <p>We really hope you enjoy your trip - from the time you
                arrive to the moment you return home!</p>
            </div>
            <div className="footer_brand_wrapper">
            <img src={fossil_emblem} alt="ammonite" className="nav_logo" width="50" height="auto"/>
            <span className="footer_title">The Road Less Travelled</span>
            <quote>“Live Life With No Excuses, Travel With No Regret.” <br/>– Oscar
            Wilde</quote>
            </div>
        </footer>
    )
};
