import React from 'react'
import "./about.scss"

const About = () => {
  return (
    <div className="about">
      <div className="about__container">
        <h1>About Us</h1>
        <p>
          Find your perfect home away from *home* near your second home—school. We are here to help students like you discover a comfortable and convenient place to live, close to where you learn and grow.
        </p>
        <p>
          Our mission is to make it easy for you to find a space that feels like home, providing the support and information you need to make an informed choice. We understand that the right living space can make all the difference in your school experience.
        </p>
        <div className="about__team">
          <h2>Meet Our Team</h2>
          <p>Our team is dedicated to helping you find a place that truly feels like your own.</p>
          {/* <div className="about__team-members">
            <div className="team-member">
              <img src="/team1.jpg" alt="Team Member 1" />
              <p>Ceasar</p>
            </div>
            <div className="team-member">
              <img src="/team2.jpg" alt="Team Member 2" />
              <p>Andrew</p>
            </div>
            <div className="team-member">
              <img src="/team3.jpg" alt="Team Member 3" />
              <p>dharel</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default About