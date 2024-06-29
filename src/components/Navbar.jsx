import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { logo, menu, close } from "../assets/index";
import { navLinks } from "../constants";
import "../styles/navbar.css";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80 }} // Initial position above the viewport
      animate={{ y: 0 }} // Animate to y: 0 (slide in from top)
      transition={{ duration: 0.7, ease: "easeInOut" }} // Animation settings
      className="navbar-wrapper"
    >
      <div className="navigation">
        <Link
          to="/"
          className="logo"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="logo-img" />
          <p className="logo-name">
            LinnJohansson{" "}
            <span className="hidden block">| JavaScriptDeveloper</span>
          </p>
        </Link>
        <ul className="navbar-list-links hidden flex  ">
          {navLinks.map((link) => (
            <Link
              onClick={() => {
                setActive("");
                window.scrollTo(0, 0);
              }}
              key={`#${link.id}`}
              to={`/${link.title}`}
            >
              <li
                className={`${active === link.title ? "link-active" : "link"}`}
                onClick={() => {
                  setActive(link.title);
                  setToggle(!toggle);
                }}
              >
                <a
                  className={`${
                    active === link.title ? "link-active" : "link"
                  }`}
                >
                  {link.title}
                </a>
              </li>
            </Link>
          ))}
        </ul>
        <div className="drop-nav-menu-container">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="drop-nav-menu"
            onClick={() => setToggle(!toggle)}
          />
        </div>
        <div className={`${!toggle ? "hidden" : "drop-nav"} `}>
          <ul className="">
            {navLinks.map((link) => (
              <Link key={`#${link.id}`} to={`/${link.title}`}>
                <li
                  className={`${
                    active === link.title ? "link-active" : "link"
                  }`}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(!toggle);
                  }}
                >
                  <a>{link.title}</a>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
