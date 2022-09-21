import React from "react";
import dice from "../../../assets/icon-dice.svg";
import desktopDiv from "../../../assets/pattern-divider-desktop.svg";
import mobileDiv from "../../../assets/pattern-divider-mobile.svg";

const AdviceGen = () => {
  // Info to reach API, DOM selectors
  const adviceSlipUrl = "https://api.adviceslip.com/advice";
  const adviceNumber = document.getElementById("advice-num");
  const randQuote = document.querySelector(".quote-wrapper");
  const quoteBtn = document.getElementById("quote-generator");
  // attach event listener to fire API fetch, onto dice button


  // set empty strings for the inner text properties to auto-populate when the data is obtained

  const getRandQuote = async () => {
    let regenId = "";
    let regenQuote = "";
    adviceNumber.innerText = regenId;
    randQuote.innerText = regenQuote;
    try {
      const response = await fetch(adviceSlipUrl, { cache: "no-cache" });
      if (response.ok) {
        const jsonResponse = await response.json();

        let quoteId = jsonResponse.slip.id;
        let quote = jsonResponse.slip.advice;
        adviceNumber.innerText += `${quoteId}`;
        randQuote.innerText += `${quote}`;
      }
    } catch (error) {
      alert(error);
    }
  };
  return (
    <section className="advice_container">
      <div className="advice-num-wrapper">
        <h2 className="title">
          Here are some of our traveller's favourite quotes!
        </h2>
        <h2>
          Quote #<span id="advice-num">117</span>
        </h2>
      </div>
      <blockquote className="quote-wrapper">
        "It is easy to sit up and take notice, what's difficult is getting up
        and taking action."
      </blockquote>
      <picture>
        <source media="(max-width:375px)" srcset={mobileDiv} />
        <source media="(min-width:376px)" srcset={desktopDiv} />
        <img src="./images/pattern-divider-mobile.svg" alt="pause icon" />
      </picture>
      <button onClick={getRandQuote} type="button" id="quote-generator" className="quote-generator">
        <img src={dice} alt="dice icon" className="dice-icon" />
      </button>
    </section>
  );
};

export default AdviceGen;
