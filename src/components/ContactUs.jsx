// import getInTouchImg from "../assets/getInTouchImg.png";
import { useState } from "react";
import ThreeDWomen from "../assets/3DWomenTwo.png";

function ContactUs() {
  const [userName, setUserName] = useState("");
  const [mail, setMail] = useState("");
  const [msg, setMsg] = useState("");

  function handleFormSubmit(e) {
    e.preventDefault();
    if (!userName || !mail) return;
    if (userName.length <= 3) {
      setUserName("");
      setMail("");
      setMsg("");
      alert("Hey Little Jimmy, Enter a valid Name. I am not dumb as you...");
      return;
    }
    setUserName("");
    setMail("");
    setMsg("");
    alert(`Hello ${userName}, We will reach you soon. STAY STRONG MY BOY!!!😉`);
  }

  return (
    <section
      className="section contact-section container"
      id="contact"
      data-aos="fade-up"
      data-aos-delay="200"
      data-aos-duration="1500"
      data-aos-once="true"
    >
      <div className="contact-inner">
        <div className="contact-container">
          <div className="contact-left">
            <h2 className="contact-heading">Get in touch</h2>
            <p className="contact-para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nemo
              adipisci ipsam quos sapiente molestiae porro.
            </p>
            <form className="form" onSubmit={handleFormSubmit}>
              <input
                type="text"
                className="user-name"
                placeholder="full name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
              />
              <input
                type="email"
                className="email"
                placeholder="Your Email"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
                required
              />

              <textarea
                name="request"
                cols="30"
                rows="5"
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                placeholder="How can we help you?"
              ></textarea>

              <button className="send-btn">Send</button>
            </form>
          </div>

          <div className="contact-right">
            <img src={ThreeDWomen} alt="contact" className="contact-img" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
