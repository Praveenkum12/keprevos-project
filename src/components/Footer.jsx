import { Link } from "react-scroll";
import footerImg from "../assets/footerImg.png";
import iconOne from "../svg/iconOne.svg";
import iconTwo from "../svg/iconTwo.svg";
import fb from "../svg/fb.svg";
import insta from "../svg/insta.svg";
import twit from "../svg/twit.svg";
import indeed from "../svg/indeed.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <Link to="hero" spy={true} smooth={true} offset={-100} duration={500}>
            <img
              src={footerImg}
              alt="company footer logo"
              className="footer-img"
            />
          </Link>
          <p className="footer-para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eum
            fuga ratione sit rerum, non iure reprehenderit dicta necessitatibus
            voluptas.
          </p>
          <div>
            <button className="footer-btn">Read More &gt;</button>
          </div>
        </div>
        <div className="footer-middle">
          <div className="footer-out">
            <h3 className="footer-sub-heading">Contact Us</h3>
            <div>
              <div className="footer-seg">
                <span>
                  <img src={iconOne} alt="icon" className="addressIcon" />
                </span>
                <address className="address">
                  Plot no: 2 & 3, 2nd Floor 1st Cross street Nellithope, Anna
                  Nagar, <br /> Puducherry-605005, India.
                </address>
              </div>

              <div className="footer-seg">
                <span>
                  <img src={iconTwo} alt="icon" className="phoneIcon" />
                </span>
                <span className="phone-number">+91 635xxxx534</span>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-right">
          <h3 className="footer-heading-side">🗞️ For Daily Updates</h3>
          <form className="form-for-news">
            <input
              type="email"
              className="mail-input"
              placeholder="xyz@gmail.com"
              required
            />
            <button className="subscribe-btn">Subscribe</button>
          </form>

          <div className="social-box">
            <Link>
              <img src={indeed} alt="indeed" />
            </Link>

            <Link>
              <img src={insta} alt="instagram" />
            </Link>

            <Link>
              <img src={fb} alt="facebook" />
            </Link>

            <Link>
              <img src={twit} alt="twitter" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
