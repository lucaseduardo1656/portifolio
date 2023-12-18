import React from "react";
import { FaInstagram, FaGithub } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import config from "../../config.json";

const About = () => {
  return (
    <section id="about" className="h-screen justify-center p-4">
      <div className="container mx-auto">
        <h2 className="text-3xl text-black font-bold mb-6">- Sobre Mim</h2>
      </div>
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center">
        <div className="bg-white p-8 rounded-lg w-full md:w-1/2 md:pr-8">
          <div className="text-center mb-4 md:text-left">
            <h2 className="text-3xl text-black font-bold mb-6">
              Lucas Eduardo
            </h2>
            <p className="text-lg text-black">
              Trabalhei em vários projetos ao longo dos anos e estou orgulhoso
              do progresso que fiz. Muitos desses projetos são de código aberto
              e estão disponíveis para outros explorarem e contribuírem. Se você
              estiver interessado em algum dos projetos em que trabalhei,
              sinta-se à vontade para verificar o código e sugerir quaisquer
              melhorias ou aprimoramentos que possa ter em mente. Colaborar com
              outras pessoas é uma ótima maneira de aprender e crescer, e estou
              sempre aberto a novas ideias e comentários.
            </p>
          </div>
          <div className="flex flex-col items-start">
            <a
              href={`https://github.com/${config.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center mb-2"
            >
              <FaGithub className="text-2xl text-gray-800 mr-2" />
              <p className="text-lg text-gray-600">Siga-me no GitHub</p>
            </a>
            <a
              href={config.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center mb-2"
            >
              <FaInstagram className="text-2xl text-gray-800  mr-2" />
              <p className="text-lg text-gray-600">Siga-me no Instagram</p>
            </a>
            <a
              href={config.email}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <MdOutlineMail className="text-2xl text-gray-800  mr-2" />
              <p className="text-lg text-gray-600">Contate-me via E-mail</p>
            </a>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-1/2 flex flex-col items-center mt-4 pt-4">
          <img
            src="/code.avif"
            className="w-72 h-72 rounded-lg object-cover mb-4"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
