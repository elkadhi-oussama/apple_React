import React from "react";
import "./SectionOne.css"

const SectionOne = () => {
  return (
    <div>
      <section className="hero iphone-13-pro">
        <div className="container">
          <div className="title">
            <h2 className="title-heading"> iPhone 13 Pro </h2>
            <h3 className="title-sub-heading">Oh. So. Pro.</h3>
          </div>
          <div className="cta">
            <a href="#" className="cta-link">
              {" "}
              Learn more{" "}
            </a>
            <a href="#" className="cta-link">
              {" "}
              Buy{" "}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionOne;
