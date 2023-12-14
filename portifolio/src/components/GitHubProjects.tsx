"use client";
import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { BsFillGrid1X2Fill } from "react-icons/bs";

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
          "https://api.github.com/users/lucaseduardo1656/repos"
        );
        const data: Project[] = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Erro ao obter os projetos do GitHub:", error);
      }
    };

    getGitHubProjects();
  }, []);

  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
      {projects.map((project) => (
        <div
          key={project.id}
          className="flex flex-col p-8 bg-white rounded-lg "
        >
          <div className="flex items-center justify-center">
            <div className="w-96 h-96 bg-black rounded-lg flex items-center justify-center">
              <BsFillGrid1X2Fill className="fill-white" size={48} />
            </div>
          </div>
          <h2 className="text-xl font-bold text-black py-4">{project.name}</h2>
          <p className="text-gray-600 mb-2">
            {project.description || "Sem descrição disponível."}
          </p>
          <p className="text-gray-600 mb-4">
            <strong>Linguagem:</strong> {project.language || "Não especificada"}
          </p>
          <div className="flex gap-2 items-center">
            <a
              href={project.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="p-2 mt-2 bg-black text-white rounded-full">
                <FaGithub />
              </button>
            </a>
            {project.homepage && (
              <a
                href={project.homepage}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="p-2 mt-2 bg-green-500 text-white rounded-full ml-2">
                  Preview
                </button>
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GitHubProjects;
