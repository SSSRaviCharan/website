import React, { useState, useEffect } from "react";
import WelcomeBox from "../../components/WelcomeBox/WelcomeBox";
import WorkContentPage from "../WorkContentPage/WorkContentPage";
import AboutPage from "../AboutPage/AboutPage";
import Background from "../../components/background/Background";
import ContactMe from "../../components/ContactMe/ContactMe";
import "./Homepage.css";

function Homepage() {
  const [resolution, setResolution] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    const updateResolution = () => {
      setResolution({ height: window.innerHeight, width: window.innerWidth });
    };
    window.addEventListener("resize", updateResolution);
  }, []);

  return (
    <div id="home">
      <Background />
      <WelcomeBox />
      <div id="content-shadow">
        <AboutPage />
        <WorkContentPage />
      </div>
      <ContactMe />
    </div>
  );
}

export default Homepage;
