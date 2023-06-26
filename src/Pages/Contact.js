import React from "react";

const Contact = () => {
  return (
    <>
      <div className="contact-main">
        <div className="contact-main-bg">
          <h1>CONTACT</h1>
        </div>
        <div className="container">
          <div className="contact-contents-main">
            <div className="contact-contents">
              <div className="contact-contents-text">
                <h3>Need additional information?</h3>
                <p>
                  A multifaceted professional skilled in multiple fields of
                  research, development as well as a learning specialist. Over
                  15 years of experience.
                </p>
                <div className="contact-contact-links">
                  <ul>
                    <li>
                      <a href="/">
                        <i className="fa-solid fa-phone"></i>
                        &nbsp; &nbsp; +91 1234567890
                      </a>
                    </li>
                    <li>
                    <a
                      href="mailto: 
                                rentalcars@gmail.com" >
                      <i className="fa-solid fa-envelope"></i>
                      &nbsp; &nbsp; rentalcars@gmail.com
                    </a>
                    </li>
                    <li>
                    <a
                      href="/" >
                      <i class="fa-solid fa-location-dot"></i>
                      &nbsp; &nbsp; Bangalore,Karnataka
                    </a>
                    </li>

                  </ul>
                </div>
              </div>


              <div className="contact-contents-form">
                <form action="">
                    <div className="contact-form">
                        <div className="contact-form-name">
                            <label htmlFor="Name">Full Name <span>*</span></label>
                            <input type="text" placeholder="E.g : “Prasad j" />
                        </div>
                        <div className="contact-form-email">
                            <label htmlFor="Name">E-mail <span>*</span></label>
                            <input type="email" placeholder="E.g : “Prasadj.gmail.com" />
                        </div>
                        <div className="contact-form-texta">
                            <label htmlFor="Name"> If you like to write</label>
                            <textarea  placeholder="Write Here"></textarea>
                        </div>
                        <div className="contact-form-buttom">
                            <input type="submit" />
                        </div>
                    </div>
                </form>
              </div>
            </div>
          </div>
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
export default Contact;
