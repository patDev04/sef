import React from "react";
import "./service.scss";
import { Link } from "react-router-dom";
import { service } from "../service/serviceData.js";

const Service = () => {
  return (
    <div>
      <div className="service">
        <div className="serviceImg">
          <h1 className="serviceHeader">Our Services</h1>
        </div>
      </div>
      <main>
        <div className="serviceCardContainer">
          {service?.map((item, idx) => (
            <article key={idx} className="serviceCard">
              <img src={item.img} alt="" className="cardImg" />
              <h3>{item.header}</h3>
              <Link to="/" className="cardBtn">
                explore
              </Link>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Service;
