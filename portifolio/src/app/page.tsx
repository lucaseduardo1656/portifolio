import React from "react";
import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navbar";
import About from "@/components/pages/About";
import HomePage from "@/components/pages/Home";
import Projects from "@/components/pages/Projects";
import ContactPage from "@/components/pages/Contacts";

const Home = () => {
  return (
    <body className="bg-zinc dark:bg-stone  transition">
      <Navbar />
      <HomePage />
      <About />
      <Projects />
      <ContactPage />
      <div className="bg-black dark:bg-white transition justify-center">
        <Footer />
      </div>
    </body>
  );
};

export default Home;
