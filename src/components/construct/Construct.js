import React from "react";
import "./construct.scss";
import img1 from "../../images/IMG_1900.jpeg";
import img2 from "../../images/IMG_1956.jpeg";

const Construct = () => {
  return (
    <div className="construct">
      <main>
        <div className="constructContainer">
          <div className="col">
            <h1>Ram Build Construction</h1>
            <h2>Full House Renovation London</h2>
            <h3>Home Renovation | House Refurbishment | House Remodeling</h3>
            <br />
            <p>
              When it comes to house renovation work in London, Ram Build
              Construction offers high quality work of all kinds. From full
              house renovation work in larger London homes, to a loft conversion
              or house remodelling in your London townhouse, we will help you
              turn your vision into the look that you really want. Our years of
              industry experience and portfolio of house renovation work across
              London incluse kitchen, bathroom, and full house remodelling. We
              pride ourselves on working closely with each client to finalise
              their house refurbishment and house finishing ideas, carefully
              crafting the exact design to work towards. Using high quality
              materials and trusted building methods, each of our house
              renovation and house refurbishment jobs across London show just
              why so many customers trust us, and why we are a house renovation
              company that has a reliable track record and reputation in London.
              Whatever your house renovation needs in London may be, from a full
              house refurbishment to a house fitting project, contact us today.
            </p>
          </div>
          <div className="col coltwo">
            <img className="cImage" src={img1} alt="" />
            <img className="cImage" src={img2} alt="" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Construct;
