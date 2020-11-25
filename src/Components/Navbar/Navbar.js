import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import NavLink from "./NavLink/NavLink";
import logo from "./../../assets/images/logo.png";

const Navbar = () => {
  let [isScrolled, setScrolled] = useState(false);

  let pageYOffset = window.pageYOffset;
  const onScroll = () => {
    pageYOffset = window.pageYOffset;
    if (pageYOffset < 10 && isScrolled !== false) {
      setScrolled(false);
    } else if (pageYOffset >= 10 && isScrolled !== true) {
      setScrolled(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });
  return (
    <nav
      className={[styles.Navbar, isScrolled ? styles.scrolled : null].join(" ")}
    >
      <ul>
        <img src={logo} alt="logo" onClick={() => window.scrollTo(0, 0)} />
        <NavLink link="#About">About</NavLink>
        <NavLink link="#Experience">Experience</NavLink>
        <NavLink link="#Apps">Apps</NavLink>
        <NavLink link="#Articles">Articles</NavLink>
        <NavLink link="#Contact">Contact</NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
