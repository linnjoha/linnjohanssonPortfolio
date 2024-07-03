import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { profile } from "../assets/index";
import { abouts } from "../constants";
import { Socials } from "../components/index";

import "../styles/about.css";
const AboutCard = ({ title, icon }) => {
  return (
    <Tilt className="tilt-card">
      <div className="tilt-card-content">
        <img src={icon} alt={title} className="about-card-img" />
      </div>
    </Tilt>
  );
};
const About = () => {
  return (
    <>
      <div>
        <div className="about-wrapper">
          <div className="about-header">
            <p className="hero-sub-text ">Introduction</p>
            <h2 className="hero-text">about.</h2>
            <motion.p className="about-text">
              I have a passion for creating and developing with a great eye for
              details and design. My expertise is in JavaScript, TypeScript,
              React, Node.js together with database and cloud development.{" "}
              <br />
              If you don't find me nerding by the computer you'll find me
              spending time with my family, gardening or chasing a good workout
              outside.
            </motion.p>
            <Socials />
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ease: "easeOut", duration: 1 }}
            className="profileImage-container"
          >
            <img src={profile} alt="profileImage" className="profile-img" />
          </motion.div>
        </div>
        {
          <div className="cards-container">
            {abouts.map((about, index) => (
              <AboutCard key={about.title} index={index} {...about} />
            ))}
          </div>
        }
      </div>
    </>
  );
};

export default About;
