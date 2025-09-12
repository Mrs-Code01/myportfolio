import React, { useState, useEffect, useRef } from "react";
import hamburger from "/images/hamburger.png";
import styles from "../css/Nav.module.css";

const Nav = () => {
  const [showNav, setShowNav] = useState(false);
  const navRef = useRef(null);
  const handleNav = () => {
    setShowNav(prev => !prev);
  };

  useEffect(() => {
    const handleClickOutside = e => {
      if (showNav && navRef.current && !navRef.current.contains(e.target)) {
        setShowNav(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [showNav]);

  return (
    <>
      <nav className={styles.nav} ref={navRef}>
        <h1>Mercy I.</h1>
        <ul
          className={`${styles.nav_container} ${
            showNav ? styles.nav_open : ""
          }`}
        >
          <li onClick={handleNav}>
            <a href="#">Home</a>
          </li>
          <li onClick={handleNav}>
            <a href="#about">About</a>
          </li>
          <li onClick={handleNav}>
            <a href="#skills">Skills</a>
          </li>
          <li onClick={handleNav}>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li onClick={handleNav}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <img
          src={hamburger}
          alt=""
          className={styles.hamburger}
          onClick={handleNav}
        />
      </nav>
    </>
  );
};

export default Nav;
