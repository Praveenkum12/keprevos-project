import { NavLink } from "react-router-dom";

function NavBar({ myElementIsVisible }) {
  console.log("Navbar" + myElementIsVisible);
  return (
    <div className="nav-outer">
      <nav className={myElementIsVisible ? "nav" : "nav-sticky"}>
        <div className="logo">KEPREVOS</div>
        <div className="nav-list">
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/about">ABOUT</NavLink>
          <NavLink to="/gallery">GALLERY</NavLink>
          <NavLink to="/testimonial">TESTIMONIAL</NavLink>
          <NavLink to="/contact">CONTACT US</NavLink>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
