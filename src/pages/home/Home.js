import React, { useEffect } from "react";
import "./home.scss";
import Panel from "./../../components/panel/Panel";
import Carousel from "../../components/carousel/Carousel";
import Construct from "../../components/construct/Construct";
import Why from "../../components/why/Why";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <div className="landing">
        <div className="overlay">
          <div className="landingImg">
            <div className="landheading">
              <h1 className="landingHeader">
                Transforming Your Home, Creating Your Dreams.
              </h1>
              <br />
              <br />

              <h2 className="subheading">
                Experts in House Extensions, Loft Conversions, and Design &
                Build Solutions
              </h2>
              <br />
              <br />
              <button className="service-btn">CONTACT US</button>
            </div>
          </div>
        </div>
      </div>

      <Panel />
      <main>
        <Carousel />
      </main>
      <Why />
    </>
  );
};

export default Home;
