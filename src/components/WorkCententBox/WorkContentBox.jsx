import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function WorkContentPage({ image, path, alt, description }) {
  const [hover, setHover] = useState(false);
  const [imgStyle, setImgStyle] = useState({ opacity: 1 });

  useEffect(() => {
    if (hover) {
      setImgStyle({ opacity: 0.4 });
    } else setImgStyle({ opacity: 1 });
  }, [hover]);

  return (
    <div
      className="work-box"
      onMouseEnter={() => setHover(!hover)}
      onMouseLeave={() => setHover(!hover)}
    >
      <img src={image} style={imgStyle} alt={alt} />
      <div className="work-img-text">
        <h4>{description}</h4>
        {/* <Link to={path}>
          <button className="learn-more-btn">Learn More</button>
        </Link> */}
        <a href={path} target="_self">
          <button className="learn-more-btn">Learn More</button>
        </a>
      </div>

      <div className="work-desc">{description}</div>
    </div>
  );
}

export default WorkContentPage;
