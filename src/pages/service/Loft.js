import React from "react";
import "./service.scss";
import img from "../../images/service/loft.jpg";
import { loftCoversionData } from "./serviceData";
import { PiTagChevronFill } from "react-icons/pi";

const Loft = () => {
  return (
    <div>
      <div className="service-img-container">
        <div className="col-serv">
          <img src={img} alt="loft-img" className="service-background" />
        </div>

        <div className="col-serv">
          <div className="subheader">
            <h1>
              Loft Conversions:
              <span className="highlight blue">Elevate Your Living Space</span>
            </h1>
            <br />
            <p className="subServiceHeader">
              Unveil the limitless possibilities of transforming your
              underutilized loft into a captivating living space.
            </p>
            <br />
            <br />
            <br />

            <p>
              At Opulent Extensions, we understand the potential that lies
              within your home's loft, and we are here to help you unlock it
              with our expert loft conversion services. Elevate your living
              space, add value to your property, and create a unique sanctuary
              that complements your lifestyle and aspirations.
              <br />
              <br />
            </p>
            <p>
              Unlock the hidden potential of your loft space with our innovative
              loft conversion services. Whether you're in need of an extra
              bedroom, a serene sanctuary, or a functional home office, our
              skilled team will transform your attic into a space that perfectly
              suits your needs. Maximize space and add value to your home.
            </p>
          </div>
        </div>
      </div>
      <section className="section">
        <main>
          <h2>Our Approach to Loft Extensions</h2>
          <br />
          <p>
            At Opulent Extensions, we take a collaborative approach to loft
            extensions, ensuring that the end result exceeds your expectations.
            Here's how we work with you to create your dream loft space:
          </p>
          <br />
          <div className="approachCardContainer">
            {loftCoversionData.approach?.map((item, idx) => {
              return (
                <>
                  <dl key={idx} className="approach-card blue">
                    <div className="headers">
                      <PiTagChevronFill className="a-icon" />
                      <h3>{item.heading}</h3>
                    </div>
                    <br />
                    <p className="a-descrip">{item.description}</p>
                  </dl>
                </>
              );
            })}
          </div>
        </main>
      </section>
      <main>
        <div className="service-wrapper">
          <h3>Why Choose Loft Extensions?</h3>
          <br />
          <p>
            Loft extensions have become a popular choice for homeowners seeking
            to maximize their living areas without expanding their property's
            footprint. Here are some compelling reasons why you should consider
            a loft extension:
          </p>
          <div className="serviceCardContainer">
            {loftCoversionData.why?.map((item, idx) => {
              return (
                <article key={idx} className="service-card ">
                  <h4>{item.heading}</h4>
                  <br />
                  <p>{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </main>
      <br />
      <br /> <br />
      <br />
      <main>
        <h2>Our Approach to Loft Extensions</h2>
        <br />
        <br />
        <p>
          At Opulent Extensions, we take a collaborative approach to loft
          extensions, ensuring that the end result exceeds your expectations.
          Here's how we work with you to create your dream loft space:
        </p>
        <br />
        <br />
        <h2>Experience the Transformation</h2>
        <br />
        <br />
        <p>
          At Opulent Extensions, we take immense pride in our portfolio of
          successful loft extensions and the joy we bring to homeowners with
          each completed project. Witness the transformation of your loft into a
          captivating and functional area that complements your lifestyle and
          enriches your home.
        </p>
        <br />
        <p>
          Are you ready to elevate your living space with a loft extension?
          Contact us today to schedule a consultation and embark on this
          exciting journey with our dedicated team. Unlock the potential of your
          home and experience the joy of living in a space designed just for
          you.
        </p>
      </main>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Loft;
