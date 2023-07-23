import React from "react";
import "./sidemenu.scss";
import { Link } from "react-router-dom";
import {
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialYoutube,
  SlSocialTwitter,
} from "react-icons/sl";
const Sidemenu = ({ toggle }) => {
  return (
    <aside className={toggle ? "sidebar active" : "sidebar inactive"}>
      <ul className="">
        <li className="sidelist">
          <Link to={"/"} className="Links">
            home
          </Link>
        </li>
        <li className="sidelist">
          <Link to={"/contact"} className="Links">
            contact
          </Link>
        </li>
        <li className="sidelist">
          <Link to={"/service"} className="Links">
            service
          </Link>
        </li>
        <li className="sidelist">
          <Link to={"/about"} className="Links">
            about
          </Link>
        </li>
        <li className="sidelist">
          <Link to={"/blog"} className="Links">
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
