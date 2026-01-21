import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
import Loader from "./Components/Loader/Loader";
import "./whatsapp.css"; 

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set loading to false after 3 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Change duration here (3000ms = 3 seconds)

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Loader Animation */}
      <AnimatePresence>
        {loading && <Loader />}
      </AnimatePresence>

      {/* Main Portfolio Content */}
      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
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
        </motion.div>
      )}
    </>
  );
};

export default App;