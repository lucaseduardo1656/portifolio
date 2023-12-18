// pages/index.js
import React from "react";
import BackgroundImage from "../components/BackgroundImage";
import Navbar from "@/components/Navbar";
import { MaquinaDeEscrever } from "@/components/Escrever";
import { SlArrowDown } from "react-icons/sl";
import About from "@/components/About";
import { Profile } from "@/components/pages/profile";
import { Footer } from "@/components/Footer";
import { Contact } from "@/components/Contact";
import GitHubProjects from "@/components/GitHubProjects";

const Home = () => {
  return (
    <div className="bg-zinc-100">
      <div>
        <Navbar />
      </div>
      <section id="home" className="relative">
        <BackgroundImage />
        <SlArrowDown className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce" />
        <div className="w-max p-8 bg-white rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center shadow-md">
          <Profile />
        </div>
      </section>
      <section className="h-screen justify-center">
        <About />
      </section>
      <section
        id="projects"
        className="h-screen flex flex-col justify-center items-center"
      >
        <div className="container mx-auto p-4">
          <div className="flex justify-between items-center py-2 md:py-4 md:px-2 pl-2 mx-auto">
            <h2 className="text-3xl text-black font-bold mb-6">- Projetos</h2>
            <a
              href="https://github.com/lucaseduardo1656?tab=repositories"
              className="text-black font-bold mb-6 cursor-pointer hover:text-black hover:border-black dark:hover:text-black"
            >
              Ver todos
            </a>
          </div>
          <p className="text-lg text-black">Alguns projetinhos legais.</p>
        </div>
        <GitHubProjects />
      </section>
      <section
        id="contact"
        className="h-screen flex justify-center items-center"
      >
        <Contact />
      </section>
      <div className="bg-black justify-center">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
