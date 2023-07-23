import React from "react";
import "./panel.scss";

const Panel = () => {
  return (
    <div className="panel">
      <main>
        <div className="panelContainer">
          <article className="panelCard">
            <p>HOME DEVELOPMENT</p>
            <br />
            <h4>COMPLETE SERVICES</h4>
            <br />
            <p>
              Want to build / refurbish a home and make your dream comes true
              but don't know the path from where to start? If you are looking
              for that, then no need to worry at all, from home refurbishment to
              decorating.
            </p>
            <br />
            <button className="service-btn">READ MORE</button>
          </article>

          <article className="panelCard">
            <h4>CUTTING-EDGE DESIGNS</h4>
            <br />
            <p>Functional, convenient cosmopolitan living</p>
          </article>
          <article className="panelCard">
            <h4>CLIENT CENTRIC FOCUS</h4>
            <br />

            <p>Quality, value, and customer satisfaction are our focus</p>
          </article>
          <article className="panelCard">
            <h4>CLIENT CENTRIC FOCUS</h4>
            <br />

            <p>Professional project management and supervision service</p>
          </article>
        </div>
      </main>
    </div>
  );
};

export default Panel;
