import React from "react";
import "./scrollup.css";

const ScrollUp = () => {
  const ScrollUp = window.addEventListener("scroll", function () {
    const scrollUp = document.querySelector(".scrollup");

    if (this.scrollY >= 560) scrollUp.classList.add("show-scrollup");
    else scrollUp.classList.remove("show-scrollup");
  });
  return (
    <a href="#" className="scrollup">
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  );
};

export default ScrollUp;
