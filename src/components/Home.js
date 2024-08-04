import React, { useEffect } from "react";
import HeroImage from "../assests/profile.jpg";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaGitSquare } from "react-icons/fa";
import { Bio } from '../data/constants'

const Home = ({ AOS }) => {
    useEffect(() => {
        AOS.init({
            duration: 1500, // Animation duration
            once: false, // Whether animation should happen only once
        });
        AOS.refresh(); // Refresh animations on scroll
    }, [AOS]);
    return (
        <div
            name="home"
            className="h-screen"
        >
            <div className="max-w-screen-lg mx-auto flex flex-col-reverse items-center justify-center h-screen px-4 md:flex-row sm:flex-row">
                <div className="flex flex-col justify-center h-auto w-auto">
                    <h2 className="mtext-4xl sm:text-7xl font-bold text-white" data-aos='fade-right'
                    >
                        {Bio.name

                        }
                    </h2>
                    <p className="text-gray-500 py-1 max-w-md" data-aos='fade-up'>
                        I have 3 years of experience building and desgining software.
                        Currently, I love to work on web application using technologies like
                        React, Angular, Redux and RxJS.
                    </p>

                    <div className="flex flex-row">
                        <a href='resume.pdf' download='Resume resumr.pdf'  >
                            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer  hover:scale-125 duration-200"
                            >Get Resume</button>
                        </a>

                    </div>
                </div>

                <div className="flex flex-col justify-center h-auto w-auto items-cente">
                    <img
                        data-aos='fade-left'
                        src={HeroImage}
                        alt="my profile"
                        className="rounded-3xl mx-auto my-5  w-2/3 md:w-1/2"
                    />
                    <div className="flex flex-row justify-center h-auto w-auto space items-center text-white" data-aos='fade-left'>
                        <a target={"_blank"} rel="noreferrer" href={Bio.linkedin}>
                            <FaLinkedin className="hover:scale-150 duration-200 m-5 w-5 h-5" />
                        </a>
                        <a target={"_blank"} rel="noreferrer" href={Bio.insta}>
                            <RiInstagramFill className="hover:scale-150 duration-200 m-5 w-5 h-5" />
                        </a>
                        <a target={"_blank"} rel="noreferrer" href={Bio.facebook}>
                            <FaFacebook className="hover:scale-150 duration-200 m-5 w-5 h-5" />
                        </a>
                        <a target={"_blank"} rel="noreferrer" href={Bio.git}>
                            <FaGitSquare className="hover:scale-150 duration-200 m-5 w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;