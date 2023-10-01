import { Link } from "react-router-dom";
import peopleImg from "../assets/people.png";

function About() {
  return (
    <section
      className="section about-section"
      data-aos="fade-up"
      data-aos-delay="200"
      data-aos-duration="1500"
      data-aos-once="true"
    >
      <div className="about">
        <div className="about-img-box">
          <img
            src={peopleImg}
            alt="people discussing in work station"
            className="about-img"
          />
        </div>

        <div className="about-right">
          <h3 className="sm-heading">Who we are</h3>
          <p className="about-para-1">
            At KEPREVOS, we are more than just a company. we are a passionate
            team of innovators driven by a shared vision
          </p>
          <p className="about-para-2">
            Our valued clients who believed in our capabilities and entrusted us
            to be their partner. Who we are in not what we do, it is about the
            relations we have nurtured, lessons we have learned, values we have
            imbibed, vision we have gained and the goal we are striving to
            achieve.
          </p>
          <Link className="read-btn">
            Read More <span className="arrow-right">{`>`}</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default About;
