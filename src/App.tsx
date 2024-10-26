import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Explore from "./components/Explore";
import Features from "./components/Features";
import Footer from "./components/Footer";
import TestimonialSection from "./components/Testimonial";
import WhatGPT3 from "./components/WhatGPT3";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Highlights />
      <Explore />
      <WhatGPT3 />
      <Features />
      {/* <TestimonialSection /> */}
      <Footer />
    </>
  );
}

export default App;
