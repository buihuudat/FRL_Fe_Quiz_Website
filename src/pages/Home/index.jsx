import "./styles.css";

import homeBannerImage from "../../resources/images/home_banner.png";
import homeBanner2Image from "../../resources/images/home_banner2.png";
import homeBanner3Image from "../../resources/images/home_banner3.png";

const Home = () => {
  return (
    <main className="home">
      <section className="home_banner first">
        <div className="left_content">
          <div className="home_header">SOLVE</div>
          <h1 className="home_banner_title">
            <span className="lead">QUIZES</span>
            <span>NOW</span>
          </h1>
          <p className="home_description">
            The versatile platform for Students to Warm up there Studies with
            Joy During Exams!
          </p>
          <a className="banner_button" href="/quiz">
            Lets Do it!
          </a>
        </div>
        <div className="right_content">
          <img
            src={homeBannerImage}
            alt="home_banner"
            className="home_banner_image"
          />
        </div>
      </section>

      <div className="home_title">Who We Are ?</div>
      <section className="home_banner second">
        <div className="left_content">
          <img
            src={homeBanner2Image}
            alt="home_banner"
            className="home_banner_image"
          />
        </div>
        <div className="right_content">
          <h2 className="second_desc">
            <span>We are</span>Quizera.{" "}
            <span>
              Helping Students to Warm up at different subjects by playing our
              Quizes.{" "}
            </span>
          </h2>

          <ul className="home_list">
            <li>
              <i className="fa-solid fa-check"></i>
              <span>Play with Any Subjects</span>
            </li>
            <li>
              <i className="fa-solid fa-check"></i>
              <span>Get Instant Score</span>
            </li>
            <li>
              <i className="fa-solid fa-check"></i>
              <span>Joyfull Interface</span>
            </li>
          </ul>
        </div>
      </section>

      <div className="home_title">Why We ?</div>
      <section className="home_banner third">
        <div className="left_content">
          <span>
            We at Quizera helps students to develope a well better warmup during
            crucial exam hours! Reason at that time students wont Prefer books
            with there current mindstage. Thus Students can play quiz with an
            subject thats brings a good interaction to the Subject and helps to
            Score better with no Stress or Tensions
          </span>
        </div>
        <div className="right_content">
          <img
            src={homeBanner3Image}
            alt="home_banner"
            className="home_banner_image"
          />
        </div>
      </section>
    </main>
  );
};

export default Home;
