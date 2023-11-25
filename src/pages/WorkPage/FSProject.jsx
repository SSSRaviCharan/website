import ImgSlider from "../../components/ImgSlider/ImgSlider";
import "./Workpage.css";
import photo1 from "../../img/fitsync_dash.png";
import photo2 from "../../img/fitsync_meal.png";
import photo3 from "../../img/fitsync_workout.png";
import photo4 from "../../img/fitsync_bmi.png";
import photo5 from "../../img/fitsync_bodyfat.png";
import photo6 from "../../img/fitsync_idealweight.png";

function FSP() {
  const photos = [photo1, photo2, photo3, photo4, photo5, photo6];

  return (
    <div className="site-description">
      <ImgSlider photos={photos} />
      <h1>Full Stack Project</h1>
      <div className="paragraph">
        <p className="para">
          The Fit-Sync application made using MERN Stack integrates features
          like a dynamic Dashboard offering insightful charts on calorie intake,
          expenditure, body fat, weight, and BMI. The inclusion of a leaderboard
          fosters a sense of community and healthy competition. The Meal and
          Workout Pages facilitate meticulous tracking of calorie consumption
          and expenditure, promoting mindful health choices. The Fitness
          Calculators offer personalized insights, while the Profile and Contact
          pages enhance user engagement and support. This application addresses
          the essential need for a user-friendly, all-encompassing fitness
          companion, fostering healthier lifestyles.
        </p>
        <p>
          <a href="" target="">
            Visit Github
          </a>
        </p>
        <p className="built-date">November 2023</p>
      </div>
    </div>
  );
}

export default FSP;
