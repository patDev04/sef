import React, { useState } from "react";
import "./navbar.scss";
import { NavLink } from "react-router-dom";
import Tab from "./Tab";
import Sidemenu from "../sidemenu/Sidemenu";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../../images/Full-LogofinalAsset 11.svg";
import { BiPhone } from "react-icons/bi";
import { TfiEmail } from "react-icons/tfi";
import { TbClockHour3 } from "react-icons/tb";

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
              <NavLink to={"/about"} className="navLinks">
                about
              </NavLink>
              <NavLink to={"/contact"} className="navLinks">
                contact
              </NavLink>
              <NavLink to={"/projects"} className="navLinks">
                projects
              </NavLink>
            </ul>
          </div>
          <div className="">
            <ul className="navContact">
              <li className="navContactItems">
                <h4 className="itemBox">
                  <BiPhone className="nav-Icon" />
                  CALL US
                </h4>
                <p className="contactDetails">0208 123 4567</p>
              </li>
              <li className="navContactItems">
                <h4 className="itemBox">
                  <TfiEmail className="nav-Icon" />
                  EMAIL
                </h4>
                <p className="contactDetails">abc@123.com</p>
              </li>
              <li className="navContactItems">
                <h4 className="itemBox">
                  <TbClockHour3 className="nav-Icon" />
                  WORKING HOURS
                </h4>
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
