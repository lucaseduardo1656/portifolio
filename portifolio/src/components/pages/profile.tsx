"use client";
import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import config from "../../../config.json";

export function Profile() {
  return (
    <div className="flex flex-col items-center">
      <img
        src="/me.jpg"
        className="w-40 h-40 md:w-64 md:h-64 rounded-full ml-4 object-cover"
        alt="Profile"
      />
      <div id="Items" className="p-5 text-center">
        <p className="text-black dark:text-white text-2xl font-bold">
          {config.name}
        </p>
        <p className="text-black dark:text-white">{config.role}</p>
      </div>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
        <button className="p-2 flex-shrink-0 rounded-full bg-black dark:bg-white text-white dark:text-black text-button mb-2 sm:mb-0 sm:mr-2">
          Contrate-me
        </button>
        <button className="p-2 flex-shrink-0 flex items-center rounded-full text-black dark:text-white text-button">
          Portfólio
          <MdOutlineFileDownload className="ml-2" />
        </button>
      </div>
    </div>
  );
}
