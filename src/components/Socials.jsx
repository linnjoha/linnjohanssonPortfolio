import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="socials">
      <a href="https://github.com/linnjoha">
        <FaGithub className="socials-icon" />
      </a>
      <a href="https://www.linkedin.com/in/linn-johansson-795a74293">
        <FaLinkedin className="socials-icon" />
      </a>
      <a href="https://www.instagram.com/frulinnjohansson/">
        <FaInstagram className="socials-icon" />
      </a>
    </div>
  );
};

export default Socials;
