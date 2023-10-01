import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import clientOne from "../assets/clientOne.png";
import clientTwo from "../assets/clientTwo.png";
import clientThree from "../assets/clientThree.png";
import clientFour from "../assets/clientFour.png";

import { Pagination, Navigation, Autoplay } from "swiper/modules";

function Testimonial() {
  return (
    <section
      className="section section-testimonial"
      data-aos="fade-up"
      data-aos-delay="200"
      data-aos-duration="1500"
      data-aos-once="true"
    >
      <h1 className="testimonial-heading">Testimonial</h1>
      <Swiper
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slide-container">
            <div className="slide-left">
              <div className="blue-box">
                <div className="slide-img-box">
                  <img src={clientOne} alt="client" />
                </div>
              </div>
            </div>
            <div className="slide-right">
              <h2 className="slide-sub-heading">
                check out what our clients say about us
              </h2>
              <p className="slide-para">
                &ldquo; Lorem ipsum dolor sit amet consectetur. Bibendum congue
                est aliquam adipiscing sit rhoncus. Neque faucibus nulla aenean
                quis duis aenean orci. Lorem ipsum dolor sit amet consectetur.
                Bibendum congue est aliquam adipiscing sit rhoncus. Neque
                faucibus nulla aenean orci. &rdquo;
              </p>
              <div className="client-detail-box">
                <span className="client-name">Brian Dean</span>
                <span className="client-role">Co-Founder, abc company </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-container">
            <div className="slide-left">
              <div className="blue-box">
                <div className="slide-img-box">
                  <img src={clientTwo} alt="client" />
                </div>
              </div>
            </div>
            <div className="slide-right">
              <h2 className="slide-sub-heading">
                check out what our clients say about us
              </h2>
              <p className="slide-para">
                &ldquo; Lorem ipsum dolor sit amet consectetur. Bibendum congue
                est aliquam adipiscing sit rhoncus. Neque faucibus nulla aenean
                quis duis aenean orci. Lorem ipsum dolor sit amet consectetur.
                Bibendum congue est aliquam adipiscing sit rhoncus. Neque
                faucibus nulla aenean orci. &rdquo;
              </p>
              <div className="client-detail-box">
                <span className="client-name">Brian Dean</span>
                <span className="client-role">Co-Founder, abc company </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-container">
            <div className="slide-left">
              <div className="blue-box">
                <div className="slide-img-box">
                  <img src={clientThree} alt="client" />
                </div>
              </div>
            </div>
            <div className="slide-right">
              <h2 className="slide-sub-heading">
                check out what our clients say about us
              </h2>
              <p className="slide-para">
                &ldquo; Lorem ipsum dolor sit amet consectetur. Bibendum congue
                est aliquam adipiscing sit rhoncus. Neque faucibus nulla aenean
                quis duis aenean orci. Lorem ipsum dolor sit amet consectetur.
                Bibendum congue est aliquam adipiscing sit rhoncus. Neque
                faucibus nulla aenean orci. &rdquo;
              </p>
              <div className="client-detail-box">
                <span className="client-name">Brian Dean</span>
                <span className="client-role">Co-Founder, abc company </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-container">
            <div className="slide-left">
              <div className="blue-box">
                <div className="slide-img-box">
                  <img src={clientFour} alt="client" />
                </div>
              </div>
            </div>
            <div className="slide-right">
              <h2 className="slide-sub-heading">
                check out what our clients say about us
              </h2>
              <p className="slide-para">
                &ldquo; Lorem ipsum dolor sit amet consectetur. Bibendum congue
                est aliquam adipiscing sit rhoncus. Neque faucibus nulla aenean
                quis duis aenean orci. Lorem ipsum dolor sit amet consectetur.
                Bibendum congue est aliquam adipiscing sit rhoncus. Neque
                faucibus nulla aenean orci. &rdquo;
              </p>
              <div className="client-detail-box">
                <span className="client-name">Brian Dean</span>
                <span className="client-role">Co-Founder, abc company </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Testimonial;
