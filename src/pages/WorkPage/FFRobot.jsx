import ImgSlider from "../../components/ImgSlider/ImgSlider";
import "./Workpage.css";
import photo1 from "../../img/ffrobot1.jpg";
import photo2 from "../../img/ffrobot.jpg";

function FFR() {
  const photos = [photo1, photo2];

  return (
    <div className="site-description">
      <ImgSlider photos={photos} />
      <h1>Fire Fighting Robot</h1>
      <div className="paragraph">
        <p className="para">
          The fire-fighting robot is an IoT project powered by Arduino, designed
          to reduce human intervention in fire emergencies. It autonomously
          detects and extinguishes fires, enhancing safety by leveraging IoT
          technology to respond to and combat fires, minimizing human risk and
          damage.
        </p>
        <p>
          <a
            href="https://github.com/SSSRaviCharan/IOT-Project"
            target="_blank"
          >
            Visit Github
          </a>
        </p>
        <p className="built-date">July 2023</p>
      </div>
    </div>
  );
}

export default FFR;
