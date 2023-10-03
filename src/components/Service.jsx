import designOne from "../assets/DeveloperImg.png";
import designTwo from "../assets/uiUxDesigner.png";
import designThree from "../assets/marketingImg.png";

import dirtOne from "../assets/dirtOne.png";
import dirtTwo from "../assets/dirtTwo.png";
import dirtThree from "../assets/dirtThree.png";
import dirtFour from "../assets/dirtFour.png";
import dirtFive from "../assets/dirtFive.png";

function Service() {
  return (
    <section
      className="section service-section"
      id="services"
      data-aos="fade-up"
      data-aos-delay="200"
      data-aos-duration="1500"
      data-aos-once="true"
    >
      <div className="service">
        <div className="service-top">
          <h3 className="sm-heading">What we do</h3>
          <p className="service-para">
            We are provides a wide range of services Supporting the all round
            growth of our customer’s businesses
          </p>
        </div>
        <div className="service-box">
          <div className="service-item">
            <div>
              <img src={designOne} alt="developer role" />
            </div>
            <p className="service-branches">
              Software <br /> Development
            </p>
          </div>

          <div className="service-item">
            <div>
              <img src={designTwo} alt="designer role" />
            </div>
            <p className="service-branches">
              Mobile and Web <br /> Design
            </p>
          </div>

          <div className="service-item">
            <div>
              <img src={designThree} alt="sales role" />
            </div>
            <p className="service-branches">
              Sales & <br /> Marketing
            </p>
          </div>
        </div>
      </div>

      <img
        src={dirtOne}
        alt="some additoinal stuffs to make webpage beauty"
        className="one dirt"
      />

      <img
        src={dirtTwo}
        alt="some additoinal stuffs to make webpage beauty"
        className="two dirt"
      />

      <img
        src={dirtThree}
        alt="some additoinal stuffs to make webpage beauty"
        className="three dirt"
      />

      <img
        src={dirtFour}
        alt="some additoinal stuffs to make webpage beauty"
        className="four dirt"
      />

      <img
        src={dirtFive}
        alt="some additoinal stuffs to make webpage beauty"
        className="five dirt"
      />
    </section>
  );
}

export default Service;
