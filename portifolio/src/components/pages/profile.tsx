import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";

export function Profile() {
  return (
    <div className="flex flex-col items-center">
      <img src="/me.jpg" className="w-64 h-64 rounded-full ml-4 object-cover" />
      <div id="Items" className="p-5 text-center">
        <p className="text-black text-2xl font-bold">Lucas Eduardo</p>
        <p className="text-black">developer</p>
      </div>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
        <button className="p-2 flex-shrink-0 rounded-full bg-black text-white text-button mb-2 sm:mb-0 sm:mr-2">
          Contrate-me
        </button>
        <button className="p-2 flex-shrink-0 flex items-center rounded-full text-black text-button">
          Portfólio
          <MdOutlineFileDownload className="ml-2" />
        </button>
      </div>
    </div>
  );
}
