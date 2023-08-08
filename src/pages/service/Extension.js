import React from "react";
import "./service.scss";
import img from "../../images/service/homeextension.jpeg";
import { homeExtensionData } from "./serviceData";
import { PiTagChevronFill } from "react-icons/pi";

const Extension = () => {
  console.log(homeExtensionData.why);
  return (
    <div>
      <div className="service-img-container">
        <div className="col-serv">
          <img src={img} alt="loft-img" className="service-background" />
        </div>

        <div className="col-serv">
          <div className="subheader">
            <h1>
              House Extensions:
              <span className="highlight ">
                Expanding Horizons, Enriching Homes
              </span>
            </h1>
            <br />
            <p className="subServiceHeader">
              Embark on a journey of expanding your living space and enriching
              your home.
            </p>
            <br />
            <br />
            <br />

            <p>
              Here At Opulent Extensions, we understand the desire for more
              room, and we are passionate about creating seamless house
              extensions that blend harmoniously with your existing property.
              With our expert craftsmanship and personalized approach, we can
              transform your house into the dream home you've always envisioned.
            </p>
            <br />
            <br />
            <p>
              Transform your home with our expert house extension services. Our
              experienced team will seamlessly blend the new space with your
              existing structure, ensuring a stunning result that perfectly
              complements your lifestyle. Increase your property's value and
              create the home you've always dreamed of.
            </p>
          </div>
        </div>
      </div>

      <section className="section">
        <main>
          <h2>Our Approach to House Extensions</h2>
          <br />
          <p>
            At Opulent Extensions, we take a collaborative approach to loft
            extensions, ensuring that the end result exceeds your expectations.
            Here's how we work with you to create your dream loft space:
          </p>
          <br />
          <div className="approachCardContainer">
            {homeExtensionData.approach?.map((item, idx) => {
              return (
                <>
                  <dl key={idx} className="approach-card orange">
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
          <h3>Why Choose House Extensions?</h3>
          <br />
          <p>
            House extensions offer a host of benefits for homeowners seeking to
            enhance their living experience. Here are some compelling reasons
            why a house extension may be the perfect solution for you:
          </p>
          <div className="serviceCardContainer">
            {homeExtensionData.why?.map((item, idx) => {
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
        <br />
        <br />
        <br />
        <h2>Experience the Transformation</h2>
        <br />
        <br />
        <p>
          At Opulent Extensions, we take immense pride in the transformational
          impact of our house extensions. Witness the seamless integration of
          your new living spaces with your existing home and experience the joy
          of enhanced living that perfectly complements your lifestyle.
        </p>
        <br />
        <p>
          Ready to embark on this exciting journey of expansion? Contact us
          today to schedule a consultation and let our expert team craft the
          house extension of your dreams. Discover the potential of your home
          and create a haven of comfort and luxury for you and your family.
        </p>
      </main>
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

export default Extension;
