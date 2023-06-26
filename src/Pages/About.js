import React from "react";
import AboutSub from "../Images/About/AboutSub Img.jpg";
import PlanYourtrip from "../Sections/PlanYourtrip";

const About = () => {
  return (
    <>
      <div className="about">
        <div className="about-about-page">
          <h1>About Us</h1>
        </div>
        <div className="container1">
          <div className="about-us-contents-main">
            <div className="about-us-contents">
              <div className="about-us-content-img">
                <img src={AboutSub} alt="About img" />
              </div>
              <div className="about-us-content-text">
                <h4>
                  About <span>Company</span>
                </h4>
                <h2>
                  You start the <span>engine</span> and your adventure begins
                </h2>
                <p>
                  Certain but she but shyness why cottage. Guy the put
                  instrument sir entreaties affronting. Pretended exquisite see
                  cordially the you. Weeks quiet do vexed or whose. Motionless
                  if no to affronting imprudence no precaution. My indulged as
                  disposal strongly attended.
                </p>
                <div className="about-us-count-main">
                  <div className="about-us-count">
                    <div className="about-us-count-type">
                      <h4>20+</h4>
                      <p>Car Types</p>
                    </div>
                    <div className="about-us-count-rental">
                      <h4>50+</h4>
                      <p>Rental Outlets</p>
                    </div>
                    <div className="about-us-count-shop">
                      <h4>45+</h4>
                      <p>Repair Shop</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <PlanYourtrip></PlanYourtrip>
        </div>
        <div className="touch-with">
          <div className="touch-with-sub">
            <h1>
              Book a car by getting in touch with us <span>+91 1234567890</span>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
