import React, { useState } from "react";
import "./tab.scss";
import { NavLink } from "react-router-dom";
import { BsChevronDown } from "react-icons/bs";

const Tab = () => {
  const [showSupport, setShowSupport] = useState(false);

  const handleClose = () => {
    setShowSupport(false);
    console.log("clicked");
  };

  return (
    <nav className="tab">
      <div className="tabNavi" onClick={() => setShowSupport(!showSupport)}>
        <h4 className="tabNaviSupport">support</h4>
        <BsChevronDown
          className={showSupport ? "chevron active" : "chevron "}
        />
      </div>

      <div className="tabTab">
        <ul className={showSupport ? "tabTabItems active" : "tabTabItems"}>
          <NavLink
            to={"/service/loftconversion"}
            className="tabnavLink"
            onClick={handleClose}
          >
            Loft conversion
          </NavLink>
          <NavLink
            to={"/service/loftconversion"}
            className="tabnavLink"
            onClick={handleClose}
          >
            Extension
          </NavLink>
          <NavLink
            to={"/service/loftconversion"}
            className="tabnavLink"
            onClick={handleClose}
          >
            Full house refurbishment
          </NavLink>
          <NavLink
            to={"/service/loftconversion"}
            className="tabnavLink"
            onClick={handleClose}
          >
            Driveways
          </NavLink>
          <NavLink
            to={"/service/loftconversion"}
            className="tabnavLink"
            onClick={handleClose}
          >
            Summer houses 
          </NavLink>
          <NavLink
            to={"/service/loftconversion"}
            className="tabnavLink"
            onClick={handleClose}
          >
            Roofing
          </NavLink>
        </ul>
      </div>

      <div className="tabdesk">
        <h4 className="tabSupport">support</h4>
        <ul className="tabItems">
          <NavLink to={"/service/loftconversion"} className="tabLinks">
            Loft conversion
          </NavLink>
          <NavLink to={"/service/loftconversion"} className="tabLinks">
            Extension
          </NavLink>
          <NavLink to={"/service/loftconversion"} className="tabLinks">
            Full house refurbishment
          </NavLink>
          <NavLink to={"/service/loftconversion"} className="tabLinks">
            Driveways
          </NavLink>
          <NavLink to={"/service/loftconversion"} className="tabLinks">
            Summer houses 
          </NavLink>
          <NavLink to={"/service/loftconversion"} className="tabLinks">
            Roofing
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Tab;
