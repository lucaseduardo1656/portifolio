import React from "react";
import GitHubProjects from "../GitHubProjects";

const projects = () => {
  return (
    <section
      id="projects"
      className="projects-section h-screen flex flex-col justify-center items-center pt-8"
    >
      <div className="container mx-auto p-4">
        <div className="projects-header flex justify-between py-2 md:py-4 md:px-2 pl-2 mx-auto">
          <h2 className="text-3xl text-black dark:text-white font-bold mb-6">
            - Projetos
          </h2>
          <a
            href="https://github.com/lucaseduardo1656?tab=repositories"
            className="text-black dark:text-white font-bold mb-6 cursor-pointer hover:text-black hover:border-black dark:hover:text-silver"
          >
            Ver todos
          </a>
        </div>
        <p className="text-lg text-black dark:text-white mb-8">
          Alguns projetinhos legais.
        </p>
        <GitHubProjects />
      </div>
    </section>
  );
};

export default projects;
