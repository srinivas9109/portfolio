import React, { useEffect, useState } from "react";
import { projects } from "../data/constants";
import { MdExpand } from "react-icons/md";


import { Dialog } from 'primereact/dialog';
import ProjectDetails from "./ProjectDetails";

const Projects = ({AOS}) => {
  const [modelData, setModelData] = useState([]);
  const [showModel, setShowModel] = useState(false);
  useEffect(() => {
    AOS.init({
        duration: 1000, // Animation duration
        once: false, // Whether animation should happen only once
    });
    AOS.refresh(); // Refresh animations on scroll
}, [AOS]);

  const rowSelectHandler = (project) => {
    setModelData(project);
    setShowModel(true)
  }
  return (
    <div className="w-full h-auto">
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 px-6  sm:px-0">
          {projects.map((project) => (
            <div key={project.id} className="shadow-md flex text-xs sm:text-lg flex-col justify-center items-center shadow-gray-600 rounded-lg" data-aos='fade-up'>
              <p>{project.name}</p>
              <img
                src={project.src}
                alt=""
                className="rounded-md w-25 h-25 sm:w-auto sm:h-auto duration-200 hover:scale-105"
              />
              <div className="flex duration-200 hover:scale-105   m-2 flex-row items-center justify-center bg-blue-500 rounded">
                <button className=" m-1 sm:m-2 text-sm primary" onClick={() => rowSelectHandler(project)} >
                  Read More
                </button>
                <MdExpand />

              </div>
            </div>
          ))}
          <Dialog header={modelData.name} visible={showModel} className="w-80 sm:w-8/12" onHide={() => { if (!showModel) return; setShowModel(false); }}>
            <ProjectDetails project={modelData} />
          </Dialog>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Projects;