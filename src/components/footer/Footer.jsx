import "./Footer.css";
import { IconContext } from "react-icons";
import { FaArrowUp, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div id="footer-shadow-filter">
      <footer>
        <div id="footer-icons">
          <a href="https://github.com/SSSRaviCharan">
            <FaGithub />
          </a>
        </div>

        <p>© 2023 Ravi Charan</p>

        <IconContext.Provider value={{ size: "3rem" }}>
          <div
            className="scroll-up"
            onClick={() =>
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
            }
          >
            <FaArrowUp />
          </div>
        </IconContext.Provider>
      </footer>
    </div>
  );
}

export default Footer;
