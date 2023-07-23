import React from "react";
import "./home.scss";
import Panel from "./../../components/panel/Panel";
import Carousel from "../../components/carousel/Carousel";
import Construct from "../../components/construct/Construct";
import Why from "../../components/why/Why";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div className="landing">
      <div className="landingImg">
        <h1 className="landingHeader">
          Make your <span className="text-color">dream</span> house
        </h1>
      </div>

      <Panel />
      <main>
        <Carousel />
      </main>
      <Construct />
      <Why />
    </div>
  );
};

export default Home;
