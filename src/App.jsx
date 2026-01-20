import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import NewAbout from "./Components/NewAbout/NewAbout";
import MyProjects from "./Components/MyProjects/MyProjects";
import Resume from "./Components/Resume/resume";
import { FaWhatsapp } from "react-icons/fa";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import mywork_data from "./assets/mywork_data";
import AboutMy from "./Components/AboutMy/AboutMy";
import MovingBar from "./Components/MovingBar/MovingBar";
import "./whatsapp.css"; 

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMy />
      <About />
      <MovingBar />
      <NewAbout />
      <MyProjects data={mywork_data} />
      <Resume />
      <Contact />
      <Footer />

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/923299190021"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
      >
        <FaWhatsapp className="whatsapp-icon" />
        <span className="whatsapp-badge"></span>
      </a>
    </>
  );
};

export default App;
