import React from "react";
import Contact from '../Images/Plan you trip/Contact.png'
import Drive from '../Images/Plan you trip/Drive.png'
import Selectcar from '../Images/Plan you trip/Selectcar.png'



const PlanYourtrip = ()=> {
    return (
        <>
             <div className="plan-your-trip">
                <div className="container1">
                    <div className="plan-your-trip-sub">
                        <h4>
                        Plan your <span>trip</span> now
                        </h4>
                        <h1>
                        Quick & easy <span>car</span> rental
                        </h1>
                    </div>
                    <div className="plan-you-trip-main">
                        <div className="plan-your-trip-main-sub">
                            <div className="plan-your-trip-selectcar">
                                <img src={Selectcar} alt="" />
                                <h3>Select Car</h3>
                                <p>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs</p>
                            </div>
                            <div className="plan-your-trip-contact">
                            <img src={Contact} alt="" />
                            <h3>Contact Operator</h3>
                                <p>Our knowledgeable and friendly operators are always ready to help with any questions or concerns</p>
                            </div>
                            <div className="plan-your-trip-drive">
                            <img src={Drive} alt="" />
                            <h3>Let's Drive</h3>
                                <p>Whether you're hitting the open road, we've got you covered with our wide range of cars</p>
                            </div>
                        </div>
                    </div>
                </div>
             </div>

        </>
    );
}

export default PlanYourtrip;