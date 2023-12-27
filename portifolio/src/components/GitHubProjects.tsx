"use client";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaGithub } from "react-icons/fa";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import config from "../../config.json";

interface Project {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  html_url: string;
  homepage?: string;
}

const GitHubProjects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const getGitHubProjects = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${config.github}/repos`
        );
        const data: Project[] = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Erro ao obter os projetos do GitHub:", error);
      }
    };

    getGitHubProjects();
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const CustomDot = ({
    onClick,
    active,
  }: {
    onClick: any;
    active: boolean;
  }) => (
    <span
      style={{
        width: "10px",
        height: "2px",
        borderRadius: "4px",
        background: active ? "#000" : "#ccc",
        display: "inline-block",
        margin: "0 5px",
        cursor: "pointer",
      }}
      onClick={() => onClick()}
    />
  );

  return (
    <div>
      {projects.length > 0 && (
        <Carousel
          responsive={responsive}
          infinite={true}
          showDots={true}
          arrows={false}
          itemClass="px-3"
          autoPlay={true}
          autoPlaySpeed={9000}
          customDot={<CustomDot onClick={undefined} active={false} />}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col p-4 bg-white dark:bg-black rounded-lg h-full shadow-md"
            >
              <div className="flex items-center justify-center">
                <div className="w-2/4 h-56 bg-black dark:bg-white rounded-lg flex items-center justify-center">
                  <BsFillGrid1X2Fill
                    className="fill-white dark:fill-black"
                    size={24}
                  />
                </div>
              </div>
              <h2 className="dark:text-white text-lg font-bold text-black py-2">
                {project.name}
              </h2>
              <p className="dark:text-white text-gray-600 mb-2">
                {project.description || "Sem descrição disponível."}
              </p>
              <p className="dark:text-white text-gray-600 mb-2">
                <strong>Linguagem:</strong>{" "}
                {project.language || "Não especificada"}
              </p>
              <div className="flex gap-2 items-center mt-auto">
                <a
                  href={project.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="p-2 bg-black text-white rounded-lg">
                    <FaGithub />
                  </button>
                </a>
                {project.homepage && (
                  <a
                    href={project.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="p-2 bg-green text-white rounded-lg ml-2">
                      Preview
                    </button>
                  </a>
                )}
              </div>
            </div>
          ))}
        </Carousel>
      )}
    </div>
  );
};

export default GitHubProjects;
