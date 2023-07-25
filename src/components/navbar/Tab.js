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
        <h4 className="tabNaviSupport">service</h4>
        <BsChevronDown
          className={showSupport ? "chevron active" : "chevron "}
        />
      </div>

      <div className="tabTab">
        <ul className={showSupport ? "tabTabItems active" : "tabTabItems"}>
          <NavLink
            to={"/service/house-extensions"}
            className="tabnavLink"
            onClick={handleClose}
          >
            House Extensions
          </NavLink>
          <NavLink
            to={"/service/loft-conversions"}
            className="tabnavLink"
            onClick={handleClose}
          >
            Loft Conversions
          </NavLink>
          <NavLink
            to={"/service/design-&-build"}
            className="tabnavLink"
            onClick={handleClose}
          >
            Design & Build
          </NavLink>
        </ul>
      </div>

      <div className="tabdesk">
        <h4 className="tabSupport">service</h4>
        <ul className="tabItems">
          <NavLink to={"/service/house-extensions"} className="tabLinks">
            House Extensions
          </NavLink>
          <NavLink to={"/service/loft-conversions"} className="tabLinks">
            Loft Conversions
          </NavLink>
          <NavLink to={"/service/design-&-build"} className="tabLinks">
            Design & Build
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Tab;
