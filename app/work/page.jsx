"use client"

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
    {
        num: "CG1111A",
        category: "frontend",
        title: "A-maze-ing Race",
        description: "Built a robot to find its way through a maze in the shortest time possible. The robot will face several colour challenges at intermediate waypoints while attempting to complete the maze. To complete the maze, the robot has to successfully decipher all the colours accurately at these waypoints that direct the robot to the end of the maze while bumping the walls as little as possible.",
        stack: [{name: "C"}, {name: "Arduino"}, {name: "Circuit Design"}],
        image: "/assets/projects/cg1111a.JPG",
        live: "",
        github: "https://github.com/brand0nnn/Amazing-Race",
    },
    {
        num: "CG2111A",
        category: "frontend",
        title: "Search and Rescue",
        description: "Designed a tele-operated robotic vehicle to perform a search and rescue mission in a simulated environment. The robot is equipped with multiple sensors to map out its surroundings. It has to explore and search for different objects and identify their colours and park at a designated zone under a certain time limit with minimal collisions with the obstacles.",
        stack: [{name: "C"}, {name: "ATMega2560"}, {name: "UART"}, {name: "LiDAR"}, {name: "TLS"}, {name: "RPi"}],
        image: "/assets/projects/cg2111a.JPG",
        live: "",
        github: "https://github.com/brand0nnn/Search-and-Rescue",
    },
    {
        num: "EE2026",
        category: "frontend",
        title: "Mahjong Game",
        description: "Developed a Mahjong Game on four FPGAs using Verilog in a team. Responsible for designing a Serial Communication Protocol using UART for the transmisison of game data across the boards, and utilized Finite State Machines (FSMs) to manage game flow.",
        stack: [{name: "FPGA"}, {name: "Verilog"}, {name: "FSMs"}],
        image: "/assets/projects/ee2026.JPG",
        live: "",
        github: "",
    },
]

const Work = () => {
    const [project, setProject] = useState(projects[0]);
    const handleSlideChange = (swiper) => {
        const currentIndex = swiper.activeIndex;
        setProject(projects[currentIndex]);
    }
    return (
        <motion.section
            initial={{opacity: 0}}
            animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}}}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            {/* outline num */}
                            <div className="text-8xl leading-none font-extrabold">
                                {project.num}
                            </div>
                            {/* project category */}
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                                {project.title}
                            </h2>
                            {/* project description */}
                            <p className="text-white/60">
                                {project.description}
                            </p>
                            {/* stack */}
                            <ul className="flex gap-4">
                                {project.stack.map((item, index) => {
                                    return (
                                        <li key={index} className="text-xl text-accent">
                                           {item.name}
                                           {/* remove the last comma */}
                                           {index !== project.stack.length - 1 && ","}
                                        </li>
                                    );
                                })}
                            </ul>
                            {/* border */}
                            <div className="border border-white/20"></div>
                            {/* buttons */}
                            <div className="flex items-center gap-4">
                                {/* live project button */}
                                <Link href={project.live}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Live Project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                                {/* github button */}
                                <Link href={project.github}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsGithub className="text-white text-3xl group-hover:text-accent"/>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Github repository</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            className="xl:h-[520px] mb-12"
                            onSlideChange={handleSlideChange}
                        >
                            {projects.map((project, index) => {
                                return (
                                    <SwiperSlide key={index} className="w-full">
                                        <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                            {/* overlay */}
                                            <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                            {/* image */}
                                            <div>
                                                <Image
                                                    src={project.image}
                                                    fill
                                                    className="object-cover"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                            {/* slider button */}
                            <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"/>
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Work;