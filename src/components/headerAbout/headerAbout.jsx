import React from "react";
import "./headerAbout.css";
import ME from "../../assets/about-me.jpg";

const HeaderAbout = () => {
  return (
    <section id="#" className="header-about">
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About me" />
          </div>
        </div>

        <div className="about__content">
          <h1>Arlindo Junior</h1>
          <p>
            a Junior Front-End Web Developer. I'm a begginer at HTML/CSS &
            JavaScript. Current learning React JS.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeaderAbout;
