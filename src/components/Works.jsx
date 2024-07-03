import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { experiences } from "../constants/index";
import { FaGithub } from "react-icons/fa";
import { TechCards } from "../components/index";
import "../styles/works.css";
import "react-vertical-timeline-component/style.min.css";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#ffff", color: "#000000" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={experience.title}
      iconStyle={{ background: experience.img }}
      icon={
        <div className="timeline-icon">
          <img src={experience.img} alt={experience.name} className="icon" />
        </div>
      }
    >
      <div>
        <h3 className="">
          {experience.name}
          {"  "}
          <a className="github-a" href={experience.link} style={{ margin: 0 }}>
            <FaGithub />
          </a>
        </h3>
      </div>
      <ul className="experience-list">
        {experience.desc.map((desc, index) => (
          <li key={`experience-point-${index}`}>{desc}</li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Works = () => {
  return (
    <div className="works-wrapper">
      <div className="works-header">
        <h2 className="hero-text">Some of my experiences.</h2>
        <p className="hero-sub-text">Things I've done so far</p>
      </div>
      <div className="timeline-container">
        <VerticalTimeline lineColor={"#000000"}>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
      <div className="tech-hero-container">
        <h2 className="hero-text tech-hero">tech skills.</h2>
      </div>

      <TechCards />
    </div>
  );
};

export default Works;
