import React from "react";
import "./service.scss";
import img from "../../images/service/design&build.jpg";
import { designBuildData } from "./serviceData";
import { PiTagChevronFill } from "react-icons/pi";

const Design = () => {
  return (
    <div>
      <div className="service-img-container">
        <div className="col-serv">
          <img src={img} alt="loft-img" className="service-background" />
        </div>
        <div className="col-serv">
          <div className="subheader">
            <h1 className="hhead">
              Design & Build Solutions:
              <span className="highlight green">Where Dreams Take Shape</span>
            </h1>
            <br />
            <p className="subServiceHeader">
              Unveil the magic of turning your dreams into reality.
            </p>
            <br />
            <br />
            <br />
            <p>
              At Opulent Extensions, we believe that every homeowner deserves a
              space that is truly their own, reflecting their unique personality
              and style. <br /> With our comprehensive Design & Build services,
              we offer you the opportunity to create a home that is tailor-made
              for you, from concept to completion.
            </p>
            <br />
            <p>
              Our design & build solutions offer a comprehensive approach to
              bringing your vision to life. Our team of expert architects and
              designers work closely with you to understand your requirements
              and create bespoke designs that reflect your unique style. From
              concept to completion, we handle every aspect of construction,
              providing the highest level of craftsmanship and attention to
              detail.
            </p>
          </div>
        </div>
      </div>

      <section className="section">
        <main>
          <h2>Our Design & Build Process</h2>
          <br />
          <br />
          <p>
            At Opulent Extensions, our Design & Build process is centered around
            you, ensuring a seamless and enjoyable journey towards your dream
            home:
          </p>
          <div className="approachCardContainer">
            {designBuildData.process?.map((item, idx) => {
              return (
                <dl key={idx} className="approach-card green">
                  <div className="headers">
                    <PiTagChevronFill className="a-icon" />
                    <h3>{item.heading}</h3>
                  </div>
                  <br />
                  <p className="a-descrip">{item.description}</p>
                </dl>
              );
            })}
          </div>
        </main>
      </section>

      <main>
        <div className="service-wrapper">
          <h3>Why Choose Design & Build Solutions?</h3>
          <br />
          <p>
            Design & Build is the ultimate way to bring your vision to life
            while ensuring a seamless and hassle-free construction process. Here
            are some compelling reasons why Design & Build may be the perfect
            fit for you:
          </p>
          <div className="serviceCardContainer">
            {designBuildData.why?.map((item, idx) => {
              return (
                <article key={idx} className="service-card">
                  <h4>{item.heading}</h4>
                  <br />
                  <p>{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </main>

      <main>
        <h2>Experience the Extraordinary</h2>
        <br />
        <br />
        <p>
          With our Design & Build Solutions, your home becomes a canvas for your
          imagination. Create a living space that is uniquely yours, a
          reflection of your personality, and a sanctuary of comfort and beauty.
        </p>
        <br />
        <p>
          Ready to embark on this extraordinary journey of Design & Build?
          Contact us today to schedule a consultation. Let us be your partner in
          crafting the home of your dreams. Embrace the possibilities, and
          together, we will create a space that will inspire and enchant for
          years to come.
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
      <br />
    </div>
  );
};

export default Design;
