import React from "react";
import "./carousel.scss";
import img1 from "../../images/uh.jpg";
import img2 from "../../images/ui.jpg";
import img3 from "../../images/uj.jpg";
import { Link } from "react-router-dom";
import { HiArrowNarrowRight } from "react-icons/hi";

const Carousel = () => {
  return (
    <div className="carousel">
      <div className="carouseContainer">
        <Link to={"/service/house-extensions"} className="imgWrapper ">
          <img src={img1} alt="" className="carouselImg" />
          <div className="heading">
            <h2>House Extensions</h2>
            <HiArrowNarrowRight className="arrow" />
          </div>
        </Link>
        <Link to={"/service/loft-conversions"} className="imgWrapper">
          <img src={img2} alt="" className="carouselImg" />
          <div className="heading">
            <h2>Loft Conversions</h2>
            <HiArrowNarrowRight className="arrow" />
          </div>
        </Link>
        <Link to={"/service/design-&-Build"} className="imgWrapper">
          <img src={img3} alt="" className="carouselImg" />
          <div className="heading">
            <h2>Design & Build</h2>
            <HiArrowNarrowRight className="arrow" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Carousel;
