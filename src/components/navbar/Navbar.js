import React, { useState } from "react";
import "./navbar.scss";
import { NavLink } from "react-router-dom";
import Tab from "./Tab";
import Sidemenu from "../sidemenu/Sidemenu";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../../images/logo.svg";

const Navbar = () => {
  const [toggleSideMenu, setToggleSideMenu] = useState(false);

  const handleClose = () => {
    setToggleSideMenu(false);
  };

  return (
    <>
      <nav className="navFirst">
        <div className="nav">
          <RxHamburgerMenu
            className="hamburger"
            onClick={() => setToggleSideMenu(!toggleSideMenu)}
          />
          <div className="navContainer">
            <img src={logo} alt="logo" className="logo" />

            <ul className="navItems">
              <NavLink to={"/"} className="navLinks">
                home
              </NavLink>
              <NavLink to={"/service"} className="navLinks">
                service
              </NavLink>
              {/*<NavLink to={"/blog"} className="navLinks">
                blog
  </NavLink>*/}
              <NavLink to={"/about"} className="navLinks">
                about
              </NavLink>
              <NavLink to={"/contact"} className="navLinks">
                contact
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
        <Sidemenu toggle={toggleSideMenu} closeSidemenu={handleClose} />
        <Tab />
      </nav>
    </>
  );
};

export default Navbar;
