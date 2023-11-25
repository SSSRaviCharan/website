import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [url, setUrl] = useState();
  const [urlPositions, setUrlPositions] = useState([0, 816, 1588, 3257]);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    setUrl(window.location.hash);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (
      window.location.pathname === "/website" ||
      window.location.pathname === "/website/"
    ) {
      const about = document.getElementById("content-shadow");
      const projects = document.getElementById("projects");
      const contact = document.getElementById("contact");

      setUrlPositions([
        0,
        about.offsetTop,
        about.offsetTop + projects.offsetTop,
        contact.offsetTop + 20,
      ]);
      // alert(about.offsetTop + projects.offsetTop);
      if (scrollPosition < about.offsetTop - 130) setUrl("#home");
      else if (scrollPosition < about.offsetTop + projects.offsetTop - 100)
        setUrl("#about");
      else if (scrollPosition < contact.offsetTop) setUrl("#projects");
      else if (scrollPosition >= contact.offsetTop) setUrl("#contact");
    } else {
      setUrl("#home");
    }
    return () => {
      // alert(window.location.pathname);
      setUrl();
    };
  }, [scrollPosition]);

  function handleScroll() {
    const position = window.scrollY;
    setScrollPosition(position);
  }

  function scrollToId(position) {
    window.scrollTo({
      top: position,
      behavior: "smooth",
    });
  }

  return (
    <nav>
      <ul>
        <Link smooth="true" to="/website/#home">
          <li
            className={url === "#home" || url === "" ? "active" : null}
            onClick={() => scrollToId(urlPositions[0])}
          >
            Home
          </li>
        </Link>
        <Link smooth="true" to="/website/#about">
          <li
            className={url === "#about" ? "active" : null}
            onClick={() => scrollToId(urlPositions[1])}
          >
            About
          </li>
        </Link>
        <Link smooth="true" to="/website/#projects">
          <li
            className={url === "#projects" ? "active" : null}
            onClick={() => scrollToId(urlPositions[2])}
          >
            Projects
          </li>
        </Link>
        <Link smooth="true" to="/website/#contact">
          <li
            className={url === "#contact" ? "active" : null}
            onClick={() => scrollToId(urlPositions[3])}
          >
            Contact Me
          </li>
        </Link>
      </ul>
    </nav>
  );
}

export default Header;
