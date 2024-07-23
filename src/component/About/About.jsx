import React from "react";
import "./about.css";
import about_image from "../../assets/about-me-img.svg";
import { ImPointRight } from "react-icons/im";
const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-left">
        <div className="about-heading">
          <h2>
            Know Who <span>I'M</span>
          </h2>
        </div>
        <div className="about-content">
          <div className="about-me">
            <p>
              Hi Everyone, I am <span>Nischint Dash</span> from{" "}
              <span>Bhubaneswar, India</span> . I am currently pursuing B.TECH
              from SIlicon University,currently in my final year.
            </p>
          </div>
          <p className="others">Apart from coding, some other activities that I love to do!</p>
          <div className="hobbies">
            <ul>
              <li className="about-activity">
                <ImPointRight /> Playing Chess
              </li>
              <li className="about-activity">
                <ImPointRight /> Reading Buisness Case Studies
              </li>
              <li className="about-activity">
                <ImPointRight /> Travelling
              </li>
            </ul>
          </div>
          <div className="quote">"I want to put a ding in the universe!" </div>
        </div>
      </div>
      <div className="about-right">
        <img src={about_image} alt="about-image" />
      </div>
    </div>
  );
};

export default About;
