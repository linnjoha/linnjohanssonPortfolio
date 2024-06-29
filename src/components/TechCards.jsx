import React from "react";
import { technologies } from "../constants/index";
import { Tilt } from "react-tilt";
import "../styles/tech.css";
const TechCard = ({ name, icon }) => {
  return (
    <Tilt className="tech-card">
      <div className="tech-card-content">
        <img src={icon} alt={name} className="tech-img" />
        <h3 className="">{name}</h3>
      </div>
    </Tilt>
  );
};
const TechCards = () => {
  return (
    <div className="tech-cards-container">
      {technologies.map((tech, index) => (
        <TechCard key={tech.name} index={index} {...tech} />
      ))}
    </div>
  );
};

export default TechCards;
