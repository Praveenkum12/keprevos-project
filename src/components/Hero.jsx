import { useEffect, useRef } from "react";
import heroImg from "../assets/Exclude.png";
import { Link } from "react-scroll";

function Hero({ setMyElementIsVisible, handleLearnClick }) {
  const myRef = useRef();

  useEffect(
    function () {
      const observer = new IntersectionObserver(
        function (entries) {
          const [entry] = entries;
          setMyElementIsVisible(entry.isIntersecting);
        },
        { root: null, threshold: 0 }
      );
      observer.observe(myRef.current);
    },
    [setMyElementIsVisible]
  );

  return (
    <header className="header container" ref={myRef} id="hero">
      <div className="header__heading--box">
        <div className="header__heading--text">
          <span className="gen-span">
            Ne<span className="x-span">X</span>t-Gen
          </span>
          <br />
          <div className="enterprise-span">
            <div
              data-aos="fade-right"
              data-aos-delay="50"
              data-aos-duration="1000"
            >
              Enterprise
            </div>{" "}
            <br />
            <div
              data-aos="fade-left"
              data-aos-delay="50"
              data-aos-duration="1000"
            >
              Solutions
            </div>
          </div>
          <br /> <span className="by-span">by</span> <br />
        </div>
      </div>
      <div
        className="kp-box"
        data-aos="fade-right"
        data-aos-delay="50"
        data-aos-duration="1000"
      >
        <span className="kp-1">K</span>
        <span className="kp-2">EPREVOUS</span>
      </div>
      <br />
      <div className="future-span">The Future is Here</div>

      <div className="img-box">
        <img
          src={heroImg}
          alt="people working background"
          className="header__img"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        />
      </div>
      <div className="btn-box">
        <Link
          to="/"
          className="learn-btn header-btn"
          onClick={handleLearnClick}
        >
          Learn More
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-80}
          duration={2000}
          className="get-touch-btn header-btn"
        >
          Get in Touch
        </Link>
      </div>
    </header>
  );
}

export default Hero;
