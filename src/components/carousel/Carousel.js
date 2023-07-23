import React from "react";
import "./carousel.scss";
import img1 from "../../images/uh.jpg";
import img2 from "../../images/ui.jpg";
import img3 from "../../images/uj.jpg";
import img4 from "../../images/uo.jpg";
import img5 from "../../images/up.jpg";
import img6 from "../../images/um.jpg";

const Carousel = () => {
  return (
    <div className="carousel">
      <div className="carouseContainer">
        <div className="imgWrapper .gradient">
          <img src={img1} alt="" className="carouselImg" />
          <div className="heading">
            <h2>general</h2>
          </div>
        </div>
        <div className="imgWrapper">
          <img src={img2} alt="" className="carouselImg" />
          <div className="heading">
            <h2>electrical installation</h2>
          </div>
        </div>
        <div className="imgWrapper">
          <img src={img3} alt="" className="carouselImg" />
          <div className="heading">
            <h2>painting & decorating</h2>
          </div>
        </div>
        <div className="imgWrapper">
          <img src={img4} alt="" className="carouselImg" />
          <div className="heading">
            <h2>kitchen & bathroom</h2>
          </div>
        </div>
        <div className="imgWrapper">
          <img src={img5} alt="" className="carouselImg" />
          <div className="heading">
            <h2>flooring</h2>
          </div>
        </div>
        <div className="imgWrapper">
          <img src={img6} alt="" className="carouselImg" />
          <div className="heading">
            <h2>roofing</h2>
          </div>
        </div>
      </div>
      <button className="service-btn btn">all our service</button>
    </div>
  );
};

export default Carousel;
