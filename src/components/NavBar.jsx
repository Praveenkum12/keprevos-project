import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav container">
      <div className="logo">KEPREVOS</div>
      <div className="nav-list">
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/about">ABOUT</NavLink>
        <NavLink to="/gallery">GALLERY</NavLink>
        <NavLink to="/testimonial">TESTIMONIAL</NavLink>
        <NavLink to="/contact">CONTACT US</NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
