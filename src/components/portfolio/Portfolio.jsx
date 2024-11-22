import React from "react";
import project1 from "../../assets/MyBlogApp.png";
import project2 from "../../assets/portfolio.png";
import project3 from "../../assets/VibeConnect.png";
import project4 from "../../assets/stackoverflow.png";
import trip from "../../assets/trip.png";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <section className="portfolio section" id="portfolio">
      <h2
        className="section__title"
        data-aos="zoom-out"
        data-aos-duration="6000"
      >
        Portfolio
      </h2>
      <span
        className="section__subtitle"
        data-aos="zoom-out"
        data-aos-duration="6000"
      >
        Recent Works
      </span>

      <div className="portfolio__container container grid">
        <div className="projects grid">
          <div className="project_desc" style={{ textAlign: "right" }}>
            <h2
              className="project_desc_header"
              data-aos="zoom-in-right"
              data-aos-duration="6000"
            >
              TripWhiz
            </h2>
            <p
              className="project_desc_data"
              data-aos="zoom-in-right"
              data-aos-duration="6000"
            >
              TripWhiz is an AI-powered platform that helps users effortlessly
              plan personalized trips with tailored itineraries and real-time
              updates. It offers a seamless, intuitive experience with modern UI
              components powered by Tailwind CSS and Shadcn. The platform
              integrates secure Google login, utilizes Google Cloud APIs for
              data insights, and stores information in Firestore to provide
              users with dynamic, data-driven recommendations.
            </p>
            <div className="project_link">
              <a
                className="deployed-link"
                target="_blank"
                rel="noreferrer"
                href="https://ai-trip-planner-beryl.vercel.app/"
              >
                <i class="uil uil-link"></i>
              </a>
              <a
                href="https://github.com/Su1207/AITrip_Planner"
                className="project-icon"
                target="_blank"
                rel="noreferrer"
                data-aos="zoom-in-right"
                data-aos-duration="6000"
              >
                <i class="uil uil-github"></i>
              </a>
            </div>
          </div>
          <img
            src={trip}
            alt="Trip"
            className="project_img"
            data-aos="zoom-in-left"
            data-aos-duration="6000"
          />
        </div>
        <div className="projects grid">
          <img
            src={project1}
            alt="MyBlogApp"
            className="project_img"
            data-aos="zoom-in-right"
            data-aos-duration="6000"
          />
          <div className="project_desc">
            <h2
              className="project_desc_header"
              data-aos="zoom-in-left"
              data-aos-duration="6000"
            >
              MyBlogApp
            </h2>
            <p
              className="project_desc_data"
              data-aos="zoom-in-left"
              data-aos-duration="6000"
            >
              User-friendly and intuitive user interface that allows bloggers to
              effortlessly create, manage, and publish their content and readers
              to read others content. Secure user authentication and robust
              search functionality, allowing readers to discover relevant blogs
              based on categories.
            </p>
            <div className="project_link_left">
              <a
                className="deployed-link"
                target="_blank"
                rel="noreferrer"
                href="https://my-blog-app-alpha.vercel.app/"
              >
                <i class="uil uil-link"></i>
              </a>
              <a
                href="https://github.com/Su1207/MyBlogApp"
                className="project-icon"
                target="_blank"
                rel="noreferrer"
                data-aos="zoom-in-left"
                data-aos-duration="6000"
              >
                <i class="uil uil-github"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="projects grid">
          <div className="project_desc" style={{ textAlign: "right" }}>
            <h2
              className="project_desc_header"
              data-aos="zoom-in-right"
              data-aos-duration="6000"
            >
              MyPortfolio
            </h2>
            <p
              className="project_desc_data"
              data-aos="zoom-in-right"
              data-aos-duration="6000"
            >
              It's a refined exhibit of my journey in web development. Beyond
              coding, it signifies a commitment to crafting user-centric
              solutions. Each project reflects a fusion of technology,
              creativity, and functionality, illustrating a meticulous approach.
              MyPortfolio serves as an invitation to connect and explore
              collaborative opportunities in the digital realm.
            </p>
            <div className="project_link">
              <a
                href="https://github.com/Su1207/My_Portfolio"
                className="project-icon"
                target="_blank"
                rel="noreferrer"
                data-aos="zoom-in-right"
                data-aos-duration="6000"
              >
                <i class="uil uil-github"></i>
              </a>
            </div>
          </div>
          <img
            src={project2}
            alt="MyPortfolio"
            className="project_img"
            data-aos="zoom-in-left"
            data-aos-duration="6000"
          />
        </div>
        <div className="projects grid">
          <img
            src={project3}
            alt="VibeConnect"
            className="project_img"
            data-aos="zoom-in-right"
            data-aos-duration="6000"
          />
          <div className="project_desc">
            <h2
              className="project_desc_header"
              data-aos="zoom-in-left"
              data-aos-duration="6000"
            >
              VibeConnect
            </h2>
            <p
              className="project_desc_data"
              data-aos="zoom-in-left"
              data-aos-duration="6000"
            >
              Developed a MERN stack chat application that enables users to
              engage in seamless real-time communication and enhancing user
              engagement. The use of WebSocket technology ensures instant
              message delivery, providing a responsive and dynamic user
              experience.
            </p>
            <div className="project_link_left">
              <a
                href="https://github.com/Su1207/chat-app"
                className="project-icon"
                target="_blank"
                rel="noreferrer"
                data-aos="zoom-in-left"
                data-aos-duration="6000"
              >
                <i class="uil uil-github"></i>
              </a>
              <a
                className="deployed-link"
                target="_blank"
                rel="noreferrer"
                href="https://vibe-connect-gamma.vercel.app/"
              >
                <i class="uil uil-link"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="projects grid">
          <div className="project_desc" style={{ textAlign: "right" }}>
            <h2
              className="project_desc_header"
              data-aos="zoom-in-right"
              data-aos-duration="6000"
            >
              Stackoverflow-Clone
            </h2>
            <p
              className="project_desc_data"
              data-aos="zoom-in-right"
              data-aos-duration="6000"
            >
              Developed a StackOverflow-inspired web application using React,
              emphasizing an engaging user interface. The project showcases my
              proficiency in React and a commitment to seamlessly integrating
              functionality with user satisfaction.
            </p>
            <div className="project_link">
              <a
                href="https://github.com/Su1207/stackoverflow-clone"
                className="project-icon"
                target="_blank"
                rel="noreferrer"
                data-aos="zoom-in-right"
                data-aos-duration="6000"
              >
                <i class="uil uil-github"></i>
              </a>
            </div>
          </div>
          <img
            src={project4}
            alt="Stackoverflow"
            className="project_img"
            data-aos="zoom-in-left"
            data-aos-duration="6000"
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
