import React from 'react';
import "./SectionTwo.css"
const SectionTwo = () => {
  return <div>
      <section className="hero iphone-13">
        <div className="container">
          <div className="title title-white ">
            <h2 className="title-heading"> iPhone 13  </h2>
            <h3 className="title-sub-heading-pink">Your new superpower.</h3>
          </div>
          <div className="cta">
            <a href="#" className="cta-link cta-link-darker">
              {" "}
              Learn more{" "}
            </a>
            <a href="#" className="cta-link cta-link-darker">
              {" "}
              Buy{" "}
            </a>
          </div>
        </div>
      </section>
  </div>;
};

export default SectionTwo;
