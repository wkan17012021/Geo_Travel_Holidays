import React from "react";
import { useEffect, useState } from "react";

// https://www.youtube.com/watch?v=pKbNCWb6USQ

const ScrollTopBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 750) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <button onClick={scrollTop} type="button" class="scroll_btn">
      {isVisible && (
        <img src="https://img.icons8.com/nolan/64/long-arrow-up--v1.png" />
      )}
    </button>
  );
};

export default ScrollTopBtn;
