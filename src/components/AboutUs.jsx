import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-overlay">
        <h1 className="about-title">About Paradise Nursery</h1>

        <p className="about-intro">
          Paradise Nursery is dedicated to bringing nature closer to you.
          We provide premium indoor plants that enhance your lifestyle,
          purify air, and promote peace of mind.
        </p>

        <div className="about-cards">
          <div className="about-card">
            <h3>🌱 Our Mission</h3>
            <p>
              To deliver healthy, hand-picked plants that inspire greener
              living spaces and sustainable habits.
            </p>
          </div>

          <div className="about-card">
            <h3>🌿 Our Vision</h3>
            <p>
              To become the most trusted online plant nursery by combining
              quality, care, and customer satisfaction.
            </p>
          </div>

          <div className="about-card">
            <h3>🪴 Why Choose Us?</h3>
            <p>
              Expert growers, eco-friendly practices, affordable pricing,
              and fast doorstep delivery.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
