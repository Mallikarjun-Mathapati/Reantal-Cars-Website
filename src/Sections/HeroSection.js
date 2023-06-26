import React from "react";
import HeroBg from "../Images/hero img bg.png";
import HeroCar from "../Images/Hero Section Car.png";
import { Link } from "react-router-dom";


const HeroSection = () => {
  
  const bookBtn = () => {
    document
      .querySelector("")
      .scrollIntoView({ behavior: "smooth" });
  };

  

  return (
    <>
          <section id="home" className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-content__text">
              <h4>Plan your trip now</h4>
              <h1>
                Save <span>big</span> with our car rental
              </h1>
              <p>
                Rent the car of your dreams. Unbeatable prices, unlimited miles,
                flexible pick-up options and much more.
              </p>
              
              
              <div className="hero-content__text__btns">
                <Link
                  onClick={bookBtn}
                  className="hero-section-btn"
                  to="/"
                >
                  Book Ride 
                </Link>
                <Link className="hero-section-btn1" to="/">
                  Learn More
                </Link>
                <img className="bg-shape" src= {HeroBg} alt="bg-shape" />
              </div>
            </div>

            <img
              src={HeroCar}
              alt="car-img"
              className="hero-content__car-img"
            />
          </div>
        </div>
        </section>
    </>
  );
};
export default HeroSection;
