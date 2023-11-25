import React, { useRef } from "react";
import "./AboutPage.css";
import {
  FaReact,
  FaJava,
  FaCss3,
  FaGit,
  FaGithub,
  FaJs,
  FaNpm,
  FaNode,
  FaPhp,
  FaPython,
  FaWordpressSimple,
  FaWindows,
  FaHtml5,
  FaNodeJs,
} from "react-icons/fa";

import { SiMongodb, SiExpress } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { IconContext } from "react-icons";

function About() {
  const ref = useRef();

  return (
    <div id="about-page" ref={ref}>
      <h1>About</h1>
      <div className="about-content">
        <div className="about-text">
          <p>
            My name is Ravi Charan, currently pursuing B.Tech in Computer
            Science and Engineering at VIT Chennai.
          </p>
          <br />
          <p>
            I like to resolve technical problems and develop websites. While my
            focus is on front-end technologies such as ReactJS, I also enjoy
            building back-end.
          </p>
          <br />
          <p>
            My hobbies are exercising daily, play outdoor games and listening to
            music. I always love to learn and experiment new skills and
            technologies.
          </p>
        </div>

        <div className="skill-icons">
          <IconContext.Provider
            value={{
              className: "skill-icon",
              size: "3.5rem",
              color: "var(--color5)",
            }}
          >
            <h2 id="skills-title">Skills</h2>
            <div id="skill-div">
              <div className="skill-icon-div">
                <FaJs />
                <p>JavaScript</p>
              </div>
              <div className="skill-icon-div">
                <FaReact />
                <p>React</p>
              </div>
              <div className="skill-icon-div">
                <FaHtml5 />
                <p>Html5</p>
              </div>
              <div className="skill-icon-div">
                <FaCss3 />
                <p>CSS3</p>
              </div>
              <div className="skill-icon-div">
                <FaNodeJs />
                <p>Node.js</p>
              </div>
              <div className="skill-icon-div">
                <SiExpress />
                <p>Express.js</p>
              </div>
              <div className="skill-icon-div">
                <SiMongodb />
                <p>MongoDB</p>
              </div>
              <div className="skill-icon-div">
                <TbBrandCpp />
                <p>Cpp</p>
              </div>
              <div className="skill-icon-div">
                <FaPython />
                <p>Python</p>
              </div>
              <div className="skill-icon-div">
                <FaJava />
                <p>Java</p>
              </div>
            </div>
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default About;
