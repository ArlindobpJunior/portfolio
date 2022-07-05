import React from "react";
import "./experience.css";
import { AiFillCheckCircle } from "react-icons/ai";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <div className="experience__head">
            <h3>Front-End Web Developer</h3>
          </div>

          <div className="experience__content">
            <article className="experience__details">
              <AiFillCheckCircle className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>

            <article className="experience__details">
              <AiFillCheckCircle className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>

            <article className="experience__details">
              <AiFillCheckCircle className="experience__details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>

            <article className="experience__details">
              <AiFillCheckCircle className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>

            <article className="experience__details">
              <AiFillCheckCircle className="experience__details-icon" />
              <div>
                <h4>ReactJs</h4>
                <small className="text-light">Learning</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <div className="experience__head">
            <h3>Back-End Web Developer</h3>
          </div>

          <div className="experience__content">
            <article className="experience__details">
              <AiFillCheckCircle className="experience__details-icon" />
              <div>
                <h4>Node JS</h4>
                <small className="text-light">Learning</small>
              </div>
            </article>

            <article className="experience__details">
              <AiFillCheckCircle className="experience__details-icon" />
              <div>
                <h4>Express JS</h4>
                <small className="text-light">Learning</small>
              </div>
            </article>

            <article className="experience__details">
              <AiFillCheckCircle className="experience__details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Learning</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
