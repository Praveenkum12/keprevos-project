import { useState } from "react";
import About from "./About";
import Gallery from "./Gallery";
import Hero from "./Hero";
import NavBar from "./NavBar";
import Service from "./Service";
import Testimonial from "./Testimonial";
import FeaturedIn from "./FeaturedIn";
import ContactUs from "./ContactUs";
import Footer from "./Footer";

function Home() {
  const [myElementIsVisible, setMyElementIsVisible] = useState(true);

  function handleLearnClick() {
    alert("This feature will get integrate in the future. Peace out 😁✌️");
  }
  return (
    <>
      <div className="cover-all">
        <NavBar myElementIsVisible={myElementIsVisible} />
        <Hero
          setMyElementIsVisible={setMyElementIsVisible}
          handleLearnClick={handleLearnClick}
        />
        <main className="container bg-white">
          <About handleLearnClick={handleLearnClick} />
          <Service />
          <FeaturedIn />
          <Testimonial />
          <Gallery />
        </main>
        <ContactUs />
      </div>
      <Footer handleLearnClick={handleLearnClick} />
    </>
  );
}

export default Home;
