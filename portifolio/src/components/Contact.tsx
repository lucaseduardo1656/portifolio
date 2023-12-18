import React from "react";
import { IoIosSend } from "react-icons/io";

export function Contact() {
  return (
    <div className="container p-4">
      <div className="flex flex-col p-8 bg-white text-center rounded-lg">
        <IoIosSend className="fill-black" />
        <h1 className="text-black text-xl pb-5">Me mande uma mensagem!</h1>
        <input
          type="text"
          placeholder="Seu Nome"
          className="mb-4 p-2 rounded-md border border-gray-300 focus:outline-none focus:border-black text-black"
        />
        <input
          type="email"
          placeholder="Seu Email"
          className="mb-4 p-2 rounded-md border border-gray-300 focus:outline-none focus:border-black text-black"
        />
        <textarea
          placeholder="Sua Mensagem"
          className="mb-4 p-2 rounded-md border border-gray-300 focus:outline-none focus:border-black caret-black text-black"
        ></textarea>
        <button className="p-2 flex-shrink-0 rounded-full bg-black text-white text-button">
          Enviar mensagem
        </button>
      </div>
    </div>
  );
}
