import React from "react";
import "./index.css";
import Hero from "./hero";
import Marquee from "./marque";
import Existence from "./existence";
import Wrapper from "./wrapper";
import Arrow from "./arrow";
import OurVision from "./ourVision";
import AllServiceCards from "./allServiceCards";
import Carousel from "./carousel";
import Achievements from "./achievements";
import Review from "./review";
import TeamSection from "./teamSection";
import Accordion from "./accordian";
import Footer from "./footer";
import Nav from "./nav";

function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <Marquee />
      <Wrapper>
        <Existence />
        <AllServiceCards />
        <Arrow />
      </Wrapper>
      <OurVision />
      <Carousel />
      <Achievements />
      <Review />
      <Wrapper>
        <TeamSection />
      </Wrapper>
      <Accordion />
      <Footer />
    </div>
  );
}

export default App;
