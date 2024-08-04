import React, { useEffect } from "react";
import { Bio } from '../data/constants'

const About = ({AOS}) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: false, // Whether animation should happen only once
    });
    AOS.refresh(); // Refresh animations on scroll
  }, [AOS]);
  return (
    <div
      name="about"
      className="w-full h-auto  text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-2 sm:pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-sm mt-10 sm:mt-20 sm:text-lg" data-aos='fade-up'>
          {Bio.description}
        </p>
      </div>
    </div>
  );
};

export default About;