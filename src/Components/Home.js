import React from "react";
import "./Home.css";
import hero from "../Assets/hero.gif";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home2">
        <div className="text">
          <h1 className="home-heading">
            We’ll keep challenging until the whole society becomes a school.
          </h1>
          <p className="home-para">
            We idealize a society where everyone respects one another and where
            every interaction is a learning opportunity. By envisioning that
            each person is a unique and irreplaceable individual through AI that
            is closer to people than humans, we will build a society in which
            children may live their lives as they are. Every day, we push
            ourselves to convert COVID-19's grief into the joy for the next
            generation.
          </p>
          <h2 className="home-moto">We visualize you’re one and only.</h2>
        </div>

        <div className="hero">
          <img src={hero} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
