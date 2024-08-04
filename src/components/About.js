import React from "react";
import { Bio } from '../data/constants'

const About = () => {
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
        <p className="text-sm mt-10 sm:mt-20 sm:text-lg">
          {Bio.description}
        </p>
      </div>
    </div>
  );
};

export default About;