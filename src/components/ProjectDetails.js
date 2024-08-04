import React from 'react'
import { TbPointFilled } from "react-icons/tb";

const ProjectDetails = ({ project }) => {
    return (
        <div className='text-xs sm:text-lg'>
            <p className='font-bold'>Organization : <span className='font-normal'>{project.company}</span></p>
            <p className='font-bold'>Client : <span className='font-normal'>{project.client}</span></p>
            <p className='font-bold'>Duration : <span className='font-normal'>{project.duration}</span></p>
            <p className='font-bold'>Category : <span className='font-normal'>{project.category}</span></p>
            <p className='font-bold'>Description :<span className='font-normal'> {project.description}</span></p>
            <p className='font-bold'>Technologies :<span className='font-normal'> {project.tech.join()}</span></p>
            <p className='font-bold'>Role and Responsibilities :</p>
            <ul>

                {
                    project.responsibilities.map((role, ind) => {
                        return (
                            <li key={ind} className='flex flex-row'>
                                <TbPointFilled className='mt-1' />
                                {role}</li>

                        )
                    })
                }
            </ul>

        </div>
    )
}

export default ProjectDetails
