import React from "react";

const Social = () => {
  //   const allLinks = document.querySelectorAll("a");
  //   allLinks.forEach((link) => {
  //     if (link.getAttribute("target") === "_blank") {
  //       link.setAttribute("rel", "noopener");
  //     }
  //   });

  return (
    <div
      className="home__social"
      data-aos="zoom-in-right"
      data-aos-duration="4000"
    >
      {/* target="_blank" means that the link will open the link in new tab  */}
      {/* The rel="noreferrer" attribute ensures that when the link is opened in a new tab or window, it will not have access to the window.opener property, which is a security measure to prevent potential malicious behavior. */}
      <a
        href="https://www.instagram.com/surajmaheshwari159/"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i class="uil uil-instagram"></i>
      </a>

      <a
        href="https://github.com/Su1207 "
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i class="uil uil-github"></i>
      </a>

      <a
        href="https://www.linkedin.com/in/suraj-maheshwari-909143235/"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i class="uil uil-linkedin"></i>
      </a>
    </div>
  );
};

export default Social;
