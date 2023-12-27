import React from "react";
import AboutMe from "../Aboutme";

const About = () => {
  return (
    <section
      id="about"
      className="about-section h-screen flex flex-col items-center pt-8"
    >
      <div className="container mx-auto p-4">
        <div className="about-header flex justify-between items-center md:px-2 pl-2 mx-auto">
          <h2 className="text-3xl text-black dark:text-white font-bold">
            - Sobre Mim
          </h2>
        </div>
      </div>
      <AboutMe />
    </section>
  );
};

export default About;
