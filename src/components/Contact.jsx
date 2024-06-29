import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Socials } from "../components/index";
import emailjs from "@emailjs/browser";
import "../styles/contact.css";
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_cfec0nj",
        "template_2479iyn",
        {
          from_name: form.name,
          to_name: "Linn",
          from_email: form.email,
          to_email: "johanssonlinn1993@gmail.com",
          message: form.message,
        },
        "We_5IKT1X1L1B8pAw"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("something went wrong");
        }
      );
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-container">
        <div className="contact-header">
          <p className="hero-sub-text">Get in touch</p>
          <h3 className="hero-text">Contact.</h3>
          <Socials />
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className=" contact-form">
          <label className="contact-label">
            <span className="label-name">Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="contact-input"
            />
          </label>
          <label className="contact-label">
            <span className="label-name">Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="contact-input"
            />
          </label>
          <label className="contact-label">
            <span className="label-name">Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="contact-input email-input"
            />
          </label>
          <button type="submit" className="contact-btn">
            {loading ? "Sending..." : "Send email"}
          </button>
        </form>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 100, duration: 1 }}
        className="circle"
      ></motion.div>
    </div>
  );
};

export default Contact;
