import React from "react";
import { techs } from "../data/constants"

const Skills = () => {

    return (
        <div
            name="skills"
            className="w-full h-auto  text-white"

        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Skills
                    </p>

                </div>
                <p className="py-6 text-sm">These are the technologies I've worked with</p>
                <div className="flex items-center justify-center">
                    <div className=" grid grid-cols-3 sm:grid-cols-5 gap-8 text-center items-center py-8 px-12 mt-2 w-full sm:w-screen sm:px-0">
                        {techs.map(({ id, src, title, style }) => (
                            <div
                                key={id}
                                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                            >
                                <img src={src} alt="" className=" w-10 h-10 sm:w-20 sm:h-20 mx-auto" />
                                <p className="mt-1 text-xs sm:mt-4">{title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;