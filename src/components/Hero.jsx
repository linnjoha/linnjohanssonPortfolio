import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { EarthCanvas } from "./canvas/index";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="hero-header">
        <h1 className="hero-text">
          Hi! <br /> It's me <span className="hero-name-span">Linn</span>
        </h1>
        <p className="hero-sub-text">
          JavaScript developer from <br className="" />
          Falkenberg Sweden
        </p>
        <button className="hero-btn">
          <Link to={"/contact"}>Get in touch</Link>
        </button>
      </div>
      <motion.div
        initial={{ x: 500 }}
        animate={{ x: -40 }}
        transition={{ ease: "easeOut", duration: 3 }}
        className="motion-earth"
      >
        <EarthCanvas />
      </motion.div>
    </section>
  );
};

export default Hero;
