import { motion } from "framer-motion";
import Gal1 from "../assets/gal1.png";
import Gal2 from "../assets/gal2.png";
import Gal3 from "../assets/gal3.png";
import Gal4 from "../assets/gal6.png";
import Gal5 from "../assets/gal5.png";
import { useState } from "react";

function Gallery() {
  const [positionIndex, setPositionIndex] = useState([0, 1, 2, 3, 4]);

  const handleNext = function () {
    setPositionIndex((prev) => {
      const updateIndex = prev.map((pr) => (pr + 1) % 5);
      return updateIndex;
    });
  };

  const images = [Gal1, Gal2, Gal3, Gal4, Gal5];

  const positions = ["center", "left1", "left", "right", "right1"];
  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left1: { x: "-50%", scale: 0.7, zIndex: 2 },
    left: { x: "-90%", scale: 0.5, zIndex: 1 },
    right: { x: "90%", scale: 0.5, zIndex: 1 },
    right1: { x: "50%", scale: 0.7, zIndex: 2 },
  };
  return (
    <section
      className="section gallery"
      data-aos="fade-up"
      data-aos-delay="50"
      data-aos-duration="1200"
      data-aos-once="true"
    >
      <div className="gallery-container">
        <h1 className="gallery-heading">Gallery</h1>
        {images.map((image, index) => {
          return (
            <motion.img
              key={index}
              src={image}
              alt={image}
              className="rounded-[12px]"
              initial="center"
              animate={positions[positionIndex[index]]}
              variants={imageVariants}
              transition={{ duration: 0.5 }}
              style={{
                width: "30%",
                position: "absolute",
              }}
            />
          );
        })}

        <button
          className="text-white mt-[400px] bg-indigo-400 next-btn"
          onClick={handleNext}
        >
          Next <span>&rarr;</span>
        </button>
      </div>
    </section>
  );
}

export default Gallery;
