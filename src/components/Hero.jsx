import { useEffect, useRef } from "react";
import heroImg from "../assets/Exclude.png";

function Hero({ setMyElementIsVisible }) {
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
        <p className="header__heading--text">
          <span className="gen-span">
            Ne<span className="x-span">X</span>t-Gen
          </span>
          <br />
          <span className="enterprise-span">
            Enterprise <br />
            Solutions
          </span>
          <br /> <span className="by-span">by</span> <br />
        </p>
      </div>
      <span className="kp-box">
        <span className="kp-1">K</span>
        <span className="kp-2">EPREVOUS</span>
      </span>
      <br />
      <span className="future-span">The Future is Here</span>

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
        <button className="learn-btn header-btn">Learn More</button>
        <button className="get-touch-btn header-btn">Get in Touch</button>
      </div>
    </header>
  );
}

export default Hero;
