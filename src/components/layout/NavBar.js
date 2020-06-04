import React from "react";
import $ from "jquery";

const NavBar = () => {
  var counter = 0;

  const theme = () => {
    counter++;
    if (counter % 2 !== 0) {
      document.documentElement.setAttribute("theme", "dark");
      $(".dark").css("display", "none");
      $(".light").css("display", "block");
    } else {
      document.documentElement.setAttribute("theme", "light");
      $(".dark").css("display", "block");
      $(".light").css("display", "none");
    }
  };

  const close = () => {
    $(".options ul").css("animationName", "close");
  };
  return (
    <nav onClick={close}>
      <div className="container">
        <h2>Where in the world?</h2>

        <div onClick={theme} className="switcher">
          <div className="dark">
            <i className="far fa-moon"></i>
            <p>Dark Mode</p>
          </div>
          <div className="light">
            <i className="fas fa-sun"></i>
            <p>Light Mode</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
