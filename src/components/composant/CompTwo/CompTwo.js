import React from "react";
import "./CompTwo.css";
const CompTwo = () => {
  return (
    <div className="section4__item">
      <div
        className="background"
        style={{
          backgroundImage:
            "url(https://www.apple.com/v/home/aj/images/promos/shot-on-iphone/tile_soip__f0c6lef982em_small.jpg)",
        }}
      />
      <div className="top__title">
        <div className="homePod">
          <h1>MacBook Pro</h1>
          <h3>Supercharged for pros.</h3>
          <div className="top__title--links">
            <a href className="dark-blue">
              Learn more{" "}
            </a>
            <a href className="dark-blue-2">
              Buy{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompTwo;
