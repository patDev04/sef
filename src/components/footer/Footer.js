import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";
import {
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialYoutube,
  SlSocialTwitter,
} from "react-icons/sl";
import footerlogo from "../../images/Full-LogofinalAsset 11.svg";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <main>
          <div className="footerContainer">
            <div className="col footer-col">
              <img src={footerlogo} alt="footerlogo" className="footerlogo" />

              <p>
                Transforming Your Home, Creating Your Dreams. Experts in House
                Extensions, Loft Conversions, and Design & Build Solutions
              </p>
            </div>
            <br />
            <div className="col footer-col">
              <h3>MENU</h3>
              <br />
              <ul className="footerItems">
                <li className="fotlink">
                  <Link to={"/"} className="footerLink">
                    home
                  </Link>
                </li>
                <li className="fotlink">
                  <Link to={"/about"} className="footerLink">
                    about
                  </Link>
                </li>
                <li className="fotlink">
                  <Link to={"/blog"} className="footerLink">
                    blog
                  </Link>
                </li>
                <li className="fotlink">
                  <Link to={"/service"} className="footerLink">
                    service
                  </Link>
                </li>
                <li className="fotlink">
                  <Link to={"/contact"} className="footerLink">
                    contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col footer-col">
              <h3>CONTACT INFO</h3>
              <br />
              <ul>
                <li className="footercontant">North London</li>
                <li className="footercontant">United Kingdom</li>
                <li className="footercontant">N00 000</li>
                <li className="footercontant ">0000 000 0000</li>
                <br />
                <li className="footercontant">Monday - Friday: 8:00 - 18:00</li>
                <div className="footersocials">
                  <div>
                    <SlSocialFacebook className="footersocialsIcon" />
                  </div>
                  <div>
                    <SlSocialYoutube className="footersocialsIcon" />
                  </div>
                  <div>
                    <SlSocialTwitter className="footersocialsIcon" />
                  </div>
                  <div>
                    <SlSocialInstagram className="footersocialsIcon" />
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </main>
      </div>
      <footer className="copyright">
        <main>
          <p className="copy">
            {" "}
            all rights have been reserved &#169; epulent extension
          </p>
        </main>
      </footer>
    </>
  );
};
export default Footer;
