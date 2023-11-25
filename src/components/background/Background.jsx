import { IconContext } from "react-icons";
import "./Background.css";
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

function Background() {
  const iconsRow = (
    <>
      <FaReact />
      <FaJava />
      <FaCss3 />
      <FaGithub />
      <FaGit />
      <FaJs />
      <FaNpm />
      <FaNode />
      <FaPhp />
      <FaPython />
      <FaWindows />
      <FaHtml5 />
      <FaNodeJs />
      <SiMongodb />
      <SiExpress />
      <TbBrandCpp />
    </>
  );
  const icons = [];
  for (let i = 0; i < 15; i++) {
    icons.push(
      <div className="icon-row" key={`icon-row-${i}`}>
        <div>
          {iconsRow}
          {iconsRow}
          {iconsRow}
          {iconsRow}
          {iconsRow}
        </div>
        <div>
          {iconsRow}
          {iconsRow}
          {iconsRow}
          {iconsRow}
          {iconsRow}
        </div>
      </div>
    );
  }

  return (
    <IconContext.Provider value={{ className: "icon", size: "3rem" }}>
      <div id="background">{icons}</div>
    </IconContext.Provider>
  );
}

export default Background;
