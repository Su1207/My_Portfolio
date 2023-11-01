import React from "react";
import Frontend from "./Frontend";
import Backend from "./Backend";
import "./skills.css";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h3
        className="section__title"
        data-aos="zoom-out"
        data-aos-duration="6000"
      >
        My Skills
      </h3>
      <span
        className="section__subtitle"
        data-aos="zoom-out"
        data-aos-duration="6000"
      >
        My Technical Level
      </span>

      <div className="skills__container container grid">
        <Frontend />
        <Backend />
      </div>
    </section>
  );
};

export default Skills;
