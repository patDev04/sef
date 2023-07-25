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
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                dolore rem dolores iure neque ea repellat, doloribus assumenda
                maxime vero laborum aspernatur maiores nam minima facilis
                corrupti quidem ullam eum.
              </p>
            </div>
            <div className="col footer-col">
              <h3>MENU</h3>
              <br />
              <ul className="footerItems">
                <li>
                  <Link to={"/"} className="footerLink">
                    home
                  </Link>
                </li>
                <li>
                  <Link to={"/about"} className="footerLink">
                    about
                  </Link>
                </li>
                <li>
                  <Link to={"/blog"} className="footerLink">
                    blog
                  </Link>
                </li>
                <li>
                  <Link to={"/service"} className="footerLink">
                    service
                  </Link>
                </li>
                <li>
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
                <li className="footerLink">North & West London</li>
                <li className="footerLink">United Kingdom</li>
                <li className="footerLink ">077 3837 1960</li>
                <br />
                <li className="footerLink">Monday - Friday: 8:00 - 18:00</li>
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
          <p>all rights have been reserved</p>
        </main>
      </footer>
    </>
  );
};
export default Footer;
