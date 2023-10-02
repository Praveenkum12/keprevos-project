import { Link } from "react-scroll";

function NavBar({ myElementIsVisible }) {
  return (
    <div className="nav-outer">
      <nav className={myElementIsVisible ? "nav" : "nav-sticky"}>
        <div className="logo">KEPREVOS</div>
        <div className="nav-list">
          <Link to="hero" spy={true} smooth={true} offset={-100} duration={500}>
            HOME
          </Link>
          <Link to="about" spy={true} smooth={true} offset={-35} duration={500}>
            ABOUT
          </Link>
          <Link
            to="services"
            spy={true}
            smooth={true}
            offset={-35}
            duration={500}
          >
            Services
          </Link>
          <Link
            to="testimonial"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            TESTIMONIAL
          </Link>
          <Link
            to="gallery"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            GALLERY
          </Link>

          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            CONTACT US
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
