import React, { useEffect, useState } from "react";
// import Frontend from "./Frontend";
// import Backend from "./Backend";
// import html from "../../assets/html.png";
// import css from "../../assets/css.png";
// import javascript from "../../assets/javascript.png";

import "./skills.css";

const Skills = () => {
  const numSkills = 21; // Set this based on the number of skills you have
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      const skillPromises = Array.from({ length: numSkills }, (_, index) =>
        import(`../../assets/skills/skill${index + 1}.svg`).then(
          (module) => module.default
        )
      );

      const resolvedSkills = await Promise.all(skillPromises);
      setSkills(resolvedSkills);
    };

    fetchSkills();
  }, [numSkills]);
  // console.log(skills);

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

      <div
        className="skills__container container grid"
        data-aos="zoom-in"
        data-aos-duration="3000"
      >
        {/* <div> */}
        {skills.map((image, index) => (
          <img
            key={index}
            className="skill_img"
            src={image}
            alt={`Skill ${index + 1}`}
            style={{ width: "50", height: "50" }}
          />
        ))}
        {/* </div> */}

        {/* <Frontend />
        <Backend /> */}

        {/* <div className="skill" id="skill">
          <img src={html} alt="HTML" />
        </div>
        <div className="skill" id="skill">
          <img src={css} alt="HTML" />
        </div>
        <div className="skill" id="skill">
          <img src={javascript} alt="HTML" />
        </div> */}
      </div>
    </section>
  );
};

export default Skills;
