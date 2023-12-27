import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import config from "../../config.json";
export function Footer() {
  return (
    <div className="text-white dark:text-black py-4 text-center transition">
      <p>&copy; 2023 {config.name}. Todos os direitos reservados.</p>
    </div>
  );
}
