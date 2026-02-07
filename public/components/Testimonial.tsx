import Image from "next/image";
import React from "react";

const Testimonial = () => {
  return (
    <div>
      <div className="container testimonials-section">
        <h2>Testimonials</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-content">
              <Image
                className="testimonial-avatar"
                src="/user1.jpg"
                width={80}
                height={80}
                alt="dp"
              />
              <h2 className="testimonial-name">Ishu Farwin</h2>
              <p>CEO & FOUNDER</p>
              <Image
                className="testimonial-quotes"
                src="/quetos3.jpg"
                width={30}
                height={30}
                alt="quotes"
              />
              <p className="testimonial-text">
                {" "}
                Amazing quality products! The customer service is exceptional
                and delivery was super fast.
              </p>
            </div>
          </div>

          <div className="banner-section">
            <div className="banner-content">
              <button className="banner-discount-btn">25% DISCOUNT</button>
              <h2 className="banner-title">Summer Collection</h2>
              <p className="banner-price">
                Starting @ $20 <b>Shop Now</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
