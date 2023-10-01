import featureOne from "../assets/featureOne.png";
import featureTwo from "../assets/featureTwo.png";
import featureThree from "../assets/featureThree.png";
import featureFour from "../assets/featureFour.png";
import featureFive from "../assets/featureFive.png";

function FeaturedIn() {
  return (
    <section class="section-featured">
      <div class="container">
        <h2 class="heading-featured-in">Our Trusted Partners</h2>
        <div class="logos">
          <img src={featureOne} alt="1" />
          <img src={featureTwo} alt="2" />
          <img src={featureThree} alt="3" />
          <img src={featureFour} alt="4" />
          <img src={featureFive} alt="5" />
        </div>
      </div>
    </section>
  );
}

export default FeaturedIn;
