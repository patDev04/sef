import React, { useState } from "react";
import "./why.scss";

const Why = () => {
  const [toggle, setToggle] = useState(1);

  const handleToggle = (index) => {
    setToggle(index);
  };
  return (
    <div className="why">
      <main>
        <div className="whyContainer">
          <div className="col colone">
            <h3>WHY WE ARE THE RIGHT SOLUTION FOR YOU</h3>
            <h2>
              Go ahead and remodel your home with the plethora of building
              services available on our website!
            </h2>
            <br />
            <p>
              Want to build / refurbish a home and make your dream comes true
              but don't know the path from where to start? If you are looking
              for that, then no need to worry at all, from home refurbishment to
              decorating.
            </p>
            <br />
            <button className="service-btn">our service</button>
          </div>
          <div className="col ">
            <div className="tabContainer">
              <div className="blockTabs">
                <h4
                  className={toggle === 1 ? "tabs active-tabs" : " tabs"}
                  onClick={() => handleToggle(1)}
                >
                  sustanibale solution
                </h4>
                <h4
                  className={toggle === 2 ? "tabs active-tabs" : "tabs"}
                  onClick={() => handleToggle(2)}
                >
                  custom built homes
                </h4>
                <h4
                  className={toggle === 3 ? "tabs active-tabs" : "tabs"}
                  onClick={() => handleToggle(3)}
                >
                  interrgity
                </h4>
                <h4
                  className={toggle === 4 ? "tabs active-tabs" : "tabs"}
                  onClick={() => handleToggle(4)}
                >
                  planing
                </h4>
              </div>
            </div>

            <div className="contentTab">
              <p
                className={toggle === 1 ? "content  active-content" : "content"}
              >
                Do you know how we leave customers feeling extremely satisfied?
                We follow a strict code every time- Efficiency, Reliability,
                Honesty. This way, all our projects are quality oriented, and
                our work is punctual and safe.
              </p>
              <p
                className={toggle === 2 ? "content active-content" : "content"}
              >
                As we pride ourselves on your quality construction work,
                Moatbrook specializes in different sectors to fit your needs.
                These include home refurbishment, re-development or custom
                building.
              </p>
              <p
                className={toggle === 3 ? "content active-content" : "content"}
              >
                We are model of rectitude; we can link you with professional and
                legal services or provide you with advice that will exceed your
                quality expectations.
              </p>
              <p
                className={toggle === 4 ? "content active-content" : "content"}
              >
                We prioritize quality in every project we take up! Don’t fret,
                we ensure that customers are satisfied, and projects are managed
                properly.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Why;
