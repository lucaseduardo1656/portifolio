"use client";
import React, { useState, useEffect } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);

  const links = [
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

  const handleScroll = () => {
    const homeSection = document.getElementById("home");

    if (homeSection) {
      const isHomeSectionVisible = homeSection.getBoundingClientRect().top > 0;
      setShowNavbar(!isHomeSectionVisible);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={
          "bg-white rounded-xl border-gray-200 z-50 shadow-lg md:px-8 px-1 fixed w-6/12 top-2 left-1/2 transform -translate-x-1/2"
        }
      >
        <div className="flex justify-between items-center py-2 md:py-4 md:px-2 pl-2 mx-auto">
          <div className="flex items-center cursor-pointer">
            <ScrollLink to="home" spy={true} smooth={true} duration={500}>
              <span className="text-xl font-medium text-decoration-none whitespace-nowrap text-black">
                {`<Lucas/>`}
              </span>
            </ScrollLink>
          </div>
          <div className="hidden justify-between items-center w-full md:flex md:w-auto ">
            <ul
              className={
                "flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium"
              }
            >
              {links.map((link, index) => (
                <li key={index} className="cursor-pointer">
                  <ScrollLink
                    to={link.to}
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    <span className="inline-block  border-b-2 text-gray-400 border-transparent rounded-t-lg hover:text-black hover:border-black dark:hover:text-black">
                      {link.name}
                    </span>
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
