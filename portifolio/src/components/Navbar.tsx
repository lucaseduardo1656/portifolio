"use client";
import React, { useState, useEffect } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { IoSunnySharp } from "react-icons/io5";
import { IoIosMoon } from "react-icons/io";
import config from "../../config.json";

const Navbar = () => {
  const links = [
    {
      name: "Home",
      to: "home",
    },
    {
      name: "About",
      to: "about",
    },
    {
      name: "Projects",
      to: "projects",
    },
    {
      name: "Contact",
      to: "contact",
    },
  ];

  const scrollTo = (to: number) => {
    scroll.scrollTo(to);
  };

  const element = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
  );

  function onWindowMatch() {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery?.matches)
    ) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }
  onWindowMatch();

  useEffect(() => {
    switch (theme) {
      case "dark":
        {
          element.classList.add("dark");
          localStorage.setItem("theme", "dark");
          console.log("dark theme");
        }
        break;
      case "light":
        {
          element.classList.remove("dark");
          localStorage.setItem("theme", "light");
          console.log("light theme");
        }
        break;
      default: {
        localStorage.removeItem("theme");
        onWindowMatch();
        console.log("system theme");
      }
    }
  }, [theme]);

  darkQuery.addEventListener("change", onWindowMatch);

  const handleThemeChange = (
    selectedTheme: React.SetStateAction<string | null>
  ) => {
    if (selectedTheme === "dark" || selectedTheme === "light") {
      setTheme(selectedTheme);
    }
  };

  return (
    <header className="z-[999] relative">
      <nav className="fixed transition transform -translate-x-1/2 top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-black dark:border-stone dark:bg-opacity-75">
        <div className=" flex fixed left-1/2 h-12 -translate-x-1/2 py-2  sm:h-[initial] sm:py-0">
          <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
            {links.map((link, index) => (
              <li
                key={index}
                className="cursor-pointer h-3/4 flex items-center justify-center relative"
              >
                <ScrollLink
                  to={link.to}
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <span className="flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-white dark:hover:text-white">
                    {link.name}
                  </span>
                </ScrollLink>
              </li>
            ))}
            <button
              className="dark:hidden"
              onClick={() => handleThemeChange("dark")}
            >
              <IoIosMoon class="fill-gray-400 hover:fill-black" />
            </button>
            <button
              className="hidden dark:block"
              onClick={() => handleThemeChange("light")}
            >
              <IoSunnySharp class="fill-white hover:fill-white" />
            </button>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
