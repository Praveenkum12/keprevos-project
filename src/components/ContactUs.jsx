import getInTouchImg from "../assets/getInTouchImg.png";

function ContactUs() {
  return (
    <section className="section contact-section container" id="contact">
      <div className="contact-inner">
        <div className="contact-container">
          <div className="contact-left">
            <h2 className="contact-heading">Get in touch</h2>
            <p className="contact-para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nemo
              adipisci ipsam quos sapiente molestiae porro.
            </p>
            <form className="form">
              <input
                type="text"
                className="user-name"
                placeholder="full name"
                required
              />
              <input
                type="email"
                className="email"
                placeholder="Your Email"
                required
              />

              <textarea
                name="request"
                cols="30"
                rows="5"
                placeholder="How can we help you?"
              ></textarea>

              <button className="send-btn">Send</button>
            </form>
          </div>

          <div className="contact-right">
            <img src={getInTouchImg} alt="contact" className="contact-img" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
