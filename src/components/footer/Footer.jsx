import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer__socials">
        <a href="https://linkedin.com">
          <BsLinkedin />
        </a>
        <a href="https://github.com">
          <FaGithub />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Arlindo Junior</small>
      </div>
    </footer>
  );
};

export default Footer;
