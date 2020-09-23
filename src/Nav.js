import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });

    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div>
      <div className={`nav ${show && "nav__black"}`}>
        <img
          className="nav__logo"
          src="https://i1.wp.com/freepngimages.com/wp-content/uploads/2016/10/netflix-logo.png?w=939"
          alt="Netflix Logo"
        />

        <img
          className="nav__avatar"
          src="https://i.pinimg.com/564x/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.jpg"
          alt="Netflix Logo"
        />
      </div>
    </div>
  );
}

export default Nav;
