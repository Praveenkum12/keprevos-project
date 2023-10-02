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
  return (
    <div className="cover-all">
      <NavBar myElementIsVisible={myElementIsVisible} />
      <Hero setMyElementIsVisible={setMyElementIsVisible} />
      <main className="container bg-white">
        <About />
        <Service />
        <FeaturedIn />
        <Testimonial />
        <Gallery />
      </main>
      <ContactUs />
      <Footer />
    </div>
  );
}

export default Home;
