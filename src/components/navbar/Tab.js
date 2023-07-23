import React, { useState } from "react";
import "./tab.scss";
import { NavLink } from "react-router-dom";
import { BsChevronDown } from "react-icons/bs";

const Tab = () => {
  const [showSupport, setShowSupport] = useState(false);

  return (
    <nav className="tab">
      <div className="tabNavi">
        <h4
          className="tabNaviSupport"
          onClick={() => setShowSupport(!showSupport)}
        >
          support
        </h4>
        <BsChevronDown
          className={showSupport ? "chevron active" : "chevron "}
        />
      </div>

      <div className="tabTab">
        <ul className={showSupport ? "tabTabItems active" : "tabTabItems"}>
          <NavLink to={"/"} className="tabnavLink">
            Loft conversion
          </NavLink>
          <NavLink to={"/contact"} className="tabnavLink">
            Extension
          </NavLink>
          <NavLink to={"/service"} className="tabnavLink">
            Full house refurbishment
          </NavLink>
          <NavLink to={"/about"} className="tabnavLink">
            Driveways
          </NavLink>
          <NavLink to={"/about"} className="tabnavLink">
            Summer houses 
          </NavLink>
          <NavLink to={"/about"} className="tabnavLink">
            Roofing
          </NavLink>
        </ul>
      </div>

      <div className="tabdesk">
        <h4 className="tabSupport">support</h4>
        <ul className="tabItems">
          <NavLink to={"/"} className="tabLinks">
            Loft conversion
          </NavLink>
          <NavLink to={"/contact"} className="tabLinks">
            Extension
          </NavLink>
          <NavLink to={"/service"} className="tabLinks">
            Full house refurbishment
          </NavLink>
          <NavLink to={"/about"} className="tabLinks">
            Driveways
          </NavLink>
          <NavLink to={"/about"} className="tabLinks">
            Summer houses 
          </NavLink>
          <NavLink to={"/about"} className="tabLinks">
            Roofing
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Tab;
