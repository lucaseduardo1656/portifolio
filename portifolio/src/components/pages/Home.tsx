import React from "react";
import BackgroundImage from "../BackgroundImage";
import { SlArrowDown } from "react-icons/sl";
import { Profile } from "./profile";

const HomePage = () => {
  return (
    <section id="home" className="hero-section relative h-screen">
      <BackgroundImage />
      <SlArrowDown className="fill-white absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce" />
      <div className="profile-container transition w-max p-8 bg-white dark:bg-black rounded-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center shadow-md">
        <Profile />
      </div>
    </section>
  );
};

export default HomePage;
