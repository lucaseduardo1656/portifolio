import React from "react";
import { FaInstagram, FaGithub } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import config from "../../config.json";

const About4 = () => {
  return (
    <div className="max-w-md mx-auto bg-white dark:bg-black rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:shrink-0">
          <img
            src="/code.avif"
            className="h-48 w-full object-cover md:h-full md:w-48"
            alt="Profile"
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide dark:text-white text-sm font-semibold">
            {config.name}
          </div>
          <p className="mt-2 dark:text-white text-slate-500">
            Trabalhei em vários projetos ao longo dos anos e estou orgulhoso do
            progresso que fiz. Muitos desses projetos são de código aberto e
            estão disponíveis para outros explorarem e contribuírem. Se você
            estiver interessado em algum dos projetos em que trabalhei, sinta-se
            à vontade para verificar o código e sugerir quaisquer melhorias ou
            aprimoramentos que possa ter em mente. Colaborar com outras pessoas
            é uma ótima maneira de aprender e crescer, e estou sempre aberto a
            novas ideias e comentários.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About4;
