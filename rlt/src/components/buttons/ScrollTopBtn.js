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
    <button
      onClick={scrollTop}
      type="button"
      class="scroll_btn p-0 w-9 right-5 bottom-1 fixed md:p-2 md:bottom-5 md:w-20"
    >
      {isVisible && (
        <img
          src="https://img.icons8.com/nolan/64/long-arrow-up--v1.png"
          className="border-2 border-brand-purple rounded-full bg-slate-300 opacity-75 hover:outline hover:outline-2 hover:outline-offset-4 hover:outline-brand-purple hover:transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
        />
      )}
    </button>
  );
};

export default ScrollTopBtn;
