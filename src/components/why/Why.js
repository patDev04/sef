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
            <h3 className="light">
              WHY OPULENT EXTENSION ARE THE RIGHT SOLUTION FOR YOU
            </h3>
            <br />
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
          </div>
          <div className="col ">
            <div className="tabContainer">
              <div className="blockTabs">
                <h4
                  className={toggle === 1 ? "tabs active-tabs" : " tabs"}
                  onClick={() => handleToggle(1)}
                >
                  Experience and Excellence
                </h4>
                <h4
                  className={toggle === 2 ? "tabs active-tabs" : "tabs"}
                  onClick={() => handleToggle(2)}
                >
                  Tailored to Your Needs
                </h4>
                <h4
                  className={toggle === 3 ? "tabs active-tabs" : "tabs"}
                  onClick={() => handleToggle(3)}
                >
                  Professionalism at every step
                </h4>
              </div>
            </div>

            <div className="contentTab">
              <p
                className={toggle === 1 ? "content  active-content" : "content"}
              >
                With years of experience in the industry, we have established
                ourselves as experts in house extensions, loft conversions, and
                design & build solutions. We take pride in delivering
                exceptional craftsmanship, personalized service, and outstanding
                results that exceed our clients' expectations.
              </p>
              <p
                className={toggle === 2 ? "content active-content" : "content"}
              >
                We understand that every home and every client is unique. That's
                why our team takes the time to listen to your ideas,
                requirements, and budget constraints, ensuring that our
                solutions are tailored to your specific needs. Your satisfaction
                is our top priority.
              </p>
              <p
                className={toggle === 3 ? "content active-content" : "content"}
              >
                From the initial consultation to the final touches, we maintain
                the highest level of professionalism and transparency. Our
                dedicated project managers ensure that your project runs
                smoothly, keeping you informed throughout the entire process.
                Sit back, relax, and let us handle the rest.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Why;
