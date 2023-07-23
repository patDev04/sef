import React, { useState } from "react";
import "./navbar.scss";
import { NavLink } from "react-router-dom";
import Tab from "./Tab";
import Sidemenu from "../sidemenu/Sidemenu";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [toggleSideMenu, setToggleSideMenu] = useState(false);

  return (
    <>
      <nav className="navFirst">
        <div className="nav">
          <RxHamburgerMenu
            className="hamburger"
            onClick={() => setToggleSideMenu(!toggleSideMenu)}
          />
          <div className="navContainer">
            <h1 className="logo">
              <span>Construct</span> | Home Renovations
            </h1>
            <ul className="navItems">
              <NavLink to={"/"} className="navLinks">
                home
              </NavLink>
              <NavLink to={"/contact"} className="navLinks">
                contact
              </NavLink>
              <NavLink to={"/service"} className="navLinks">
                service
              </NavLink>
              <NavLink to={"/about"} className="navLinks">
                about
              </NavLink>
              <NavLink to={"/blog"} className="navLinks">
                blog
              </NavLink>
            </ul>
          </div>
          <div className="">
            <ul className="navContact">
              <li className="navContactItems">
                <h4>Call US</h4>
                <p className="contactDetails">0208 123 4567</p>
              </li>
              <li className="navContactItems">
                <h4>EMAIL</h4>
                <p className="contactDetails">abc@123.com</p>
              </li>
              <li className="navContactItems">
                <h4>WORKING HOURS</h4>
                <p className="contactDetails">Mon. - Fri. 8AM - 16PM</p>
              </li>
            </ul>
          </div>
        </div>
        <Sidemenu toggle={toggleSideMenu} />
        <Tab />
      </nav>
    </>
  );
};

export default Navbar;
