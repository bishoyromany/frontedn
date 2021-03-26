import React, { useState, useEffect } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

import AppleTouch from "./assets/images/favicons/apple-touch-icon.png";
import Fevicon32 from "./assets/images/favicons/favicon-32x32.png";
import Fevicon16 from "./assets/images/favicons/favicon-16x16.png";

const Layout = (props) => {
  const [scrollTop, setScrollTop] = useState(false);

  const handleScrollTop = () => {
    if (window.scrollY > 70) {
      setScrollTop(true);
    } else if (window.scrollY < 70) {
      setScrollTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollTop);
    return () => {
      window.removeEventListener("scroll", handleScrollTop);
    };
  });
  return (
    <div>
      <div className="page-wrapper">{props.children}</div>

      {scrollTop === true ? (
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          className="scroll-to-top"
        >
          <i className="fa fa-angle-up"></i>
        </ScrollLink>
      ) : null}
    </div>
  );
};

export default Layout;
