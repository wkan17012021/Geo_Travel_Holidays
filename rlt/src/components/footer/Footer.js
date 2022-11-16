import React from "react";
import fossil_emblem from "../../assets/fossil_emblem.jpeg";
import PrimaryBtn from "../buttons/PrimaryBtn";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center md:flex-row md:justify-around items-center w-full h-full md:h-64 my-6 mx-0 py-4 bg-slate-300">
      <div className="footer_contact max-h-full w-4/5 md:w-1/4">
        <h2 className="text-center">Reach Out to Us</h2>
        <ul>
          <li className="my-2 mx-0">
            <PrimaryBtn linkTxt="rlt@hotmail.com" />
          </li>
          <li className="my-2 mx-0">
            <PrimaryBtn linkTxt="01234 567 890" />
          </li>
          <li className="my-2 mx-auto flex justify-around w-1/2">
            <div>
              <img
                src="https://img.icons8.com/color/344/facebook-new.png"
                alt="facebook icon"
                className="social_media_icon w-10 h-auto inline"
                loading="lazy"
              />
            </div>
            <div>
              <img
                src="https://img.icons8.com/fluency/344/instagram-new.png"
                alt="instagram icon"
                className="social_media_icon w-10 h-auto inline"
                loading="lazy"
              />
            </div>
            <div>
              <img
                src="https://img.icons8.com/fluency/344/twitter.png"
                alt="twitter icon"
                className="social_media_icon w-10 h-auto inline"
                loading="lazy"
              />
            </div>
          </li>
        </ul>
      </div>
      <div className="sign_off_remark w-4/5 md:w-1/2 my-2 mx-0">
        <p className="my-0 mx-2 text-center">
          We really hope you enjoy your trip - from the time you arrive to the
          moment you return home!
        </p>
      </div>
      <div className="footer_brand_wrapper h-full w-4/5 md:w-1/3 flex flex-col justify-center items-center">
        <img
          src={fossil_emblem}
          alt="ammonite"
          className="nav_logo w-10 h-auto rounded-full"
          width="50"
          height="auto"
          loading="lazy"
        />
        <span className="footer_title block text-center text-xl my-5 mx-auto">
          The Road Less Travelled
        </span>
        <quote className="block text-center italic my-5 mx-auto">
          “Live Life With No Excuses, Travel With No Regret.” <br />– Oscar
          Wilde
        </quote>
      </div>
    </footer>
  );
}
