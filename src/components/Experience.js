import React from 'react'
import cognizant from "../assests/cognizant.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Tooltip } from 'primereact/tooltip';

import "primereact/resources/themes/lara-light-cyan/theme.css";
const Projects = React.lazy(() => import('./Projects'))

const Experience = () => {
    return (

        <div className="w-full h-auto">
        <div className="flex flex-col justify-center items-center" name='experience'>

            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8 text-white">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Experience
                    </p>

                </div>
                <div className="max-w-7xl mx-auto w-full grid grid-cols-9 px-2">
                    {/* <!-- Stack 1 --> */}
                    <div className="col-span-4 w-full h-full shadow-md hover:scale-105 duration-500  rounded-lg shadow-gray-300">
                        <div className="w-full text-white h-full bg-gray-700 rounded-md p-2 md:pl-4">
                            <h1 className="  font-medium py-2 text-xs sm:text-xl">Programmer Analyst Trainee</h1>
                            <div className='flex flex-row  '>
                                <p className="text-gray-100 sm:text-sm text-xs">Oct-2021</p>
                                <FaLongArrowAltRight className='mt-0.5 mx-2' />
                                <p className="text-gray-100 sm:text-sm text-xs">Oct-2022</p>
                            </div>
                        </div>
                    </div>
                    <div className=" relative col-span-1 w-full h-full flex justify-center items-center">
                        <div className="h-full w-1 bg-gray-400"></div>
                        <Tooltip target=".custom-target-icon" />

                        <div className="custom-target-icon absolute w-6 h-6 rounded-full bg-indigo-400 z-10 flex justify-center items-center"
                            data-pr-tooltip="Cognizant">
                            <img src={cognizant} alt="" className=" w-5 h-5 rounded-full" />

                        </div>
                    </div>
                    <div className="col-span-4 w-full h-full"></div>


                    {/* <!-- Stack 2 --> */}
                    <div className="col-span-4 w-full h-full"></div>
                    <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                        <div className="h-full w-1 bg-gray-400"></div>
                        <Tooltip target=".custom-target-icon" />

                        <div className=" custom-target-icon absolute w-6 h-6 rounded-full bg-indigo-400 z-10 flex justify-center items-center"
                            data-pr-tooltip="Cognizant">
                            <img src={cognizant} alt="" className=" w-5 h-5 rounded-full" />

                        </div>
                    </div>
                    <div className="col-span-4 w-full h-full  shadow-md hover:scale-105 duration-500  rounded-lg shadow-gray-300">
                        <div className="w-full h-full text-white  bg-gray-700 rounded-md p-2 md:pl-4">
                            <h1 className="text-white text-xs sm:text-xl font-medium py-2">Programmer Analyst</h1>
                            <div className='flex flex-row  '>
                                <p className="text-gray-100 sm:text-sm text-xs">Oct-2022</p>
                                <FaLongArrowAltRight className='mt-0.5 mx-2' />
                                <p className="text-gray-100 sm:text-sm text-xs">Noc-2023</p>
                            </div>                        </div>
                    </div>

                    {/* <!-- Stack 3 --> */}
                    <div className="col-span-4 w-full h-full  shadow-md hover:scale-105 duration-500  rounded-lg shadow-gray-300 ">
                        <div className="w-full h-full text-white   bg-gray-700 rounded-md p-2 md:pl-4">
                            <h1 className="text-white  font-medium py-2 text-xs sm:text-xl">Associate</h1>
                            <div className='flex flex-row  '>
                                <p className="text-gray-100 sm:text-sm text-xs">Nov-2023</p>
                                <FaLongArrowAltRight className='mt-0.5 mx-2' />
                                <p className="text-gray-100 sm:text-sm text-xs">Present</p>
                            </div>                        </div>
                    </div>
                    <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                        <Tooltip target=".custom-target-icon" />
                        <div className="h-full w-1 bg-gray-400"></div>
                        <div className="custom-target-icon absolute w-6 h-6 rounded-full bg-indigo-400 z-10 flex justify-center items-center"
                            data-pr-tooltip="Cognizant"
                        >
                            <img src={cognizant} alt="" className=" w-5 h-5 rounded-full" />

                        </div>
                    </div>
                    <div className="col-span-4 w-full h-full"></div>
                </div>
            </div>
            <Projects />

        </div>
        </div>
    )
}

export default Experience
