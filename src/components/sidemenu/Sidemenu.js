import React from "react";
import "./sidemenu.scss";
import { Link } from "react-router-dom";
import {
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialYoutube,
  SlSocialTwitter,
} from "react-icons/sl";
const Sidemenu = ({ toggle, closeSidemenu }) => {
  return (
    <aside className={toggle ? "sidebar active" : "sidebar inactive"}>
      <ul className="">
        <li className="sidelist">
          <Link to={"/"} className="Links" onClick={closeSidemenu}>
            home
          </Link>
        </li>
        <li className="sidelist">
          <Link to={"/contact"} className="Links" onClick={closeSidemenu}>
            contact
          </Link>
        </li>
        <li className="sidelist">
          <Link to={"/service"} className="Links" onClick={closeSidemenu}>
            service
          </Link>
        </li>
        <li className="sidelist">
          <Link to={"/about"} className="Links" onClick={closeSidemenu}>
            about
          </Link>
        </li>
        <li className="sidelist">
          <Link to={"/blog"} className="Links" onClick={closeSidemenu}>
            blog
          </Link>
        </li>
      </ul>
      <div className="socials">
        <div className="socialsIcon">
          <SlSocialFacebook />
        </div>
        <div className="socialsIcon">
          <SlSocialYoutube />
        </div>
        <div className="socialsIcon">
          <SlSocialTwitter />
        </div>
        <div className="socialsIcon">
          <SlSocialInstagram />
        </div>
      </div>
    </aside>
  );
};
export default Sidemenu;
