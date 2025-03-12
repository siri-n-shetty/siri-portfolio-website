"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSlidingBtns from "@/components/WorkSlidingBtns";

const projects = [
  {
    num: "01",
    title: "Void Ink Studio",
    descriptiton: "Void Ink Studio is a responsive and visually stunning website built using React.js. It is a creative tattoo studio specializing in custom, intricate tattoo designs that blend artistic expression with personal storytelling, delivering unique and meaningful body art.",
    stack: [{name: "React.js"}, {name: "Framer Motion"}, {name: "Tailwind CSS"}],
    image: "/assets/projects/vis.jpg",
    live: "https://voidinkstudio.vercel.app/",
    github: "https://github.com/siri-n-shetty/void-ink-studio",
  },
  {
    num: "02",
    title: "Connect Four",
    descriptiton: "Developed a fully functional two-player Connect Four game, implemented using BreezyPythonGUI for input handling. Crafted algorithms to determine game outcomes, used MySQL, BreezyPythonGUI, and the ‘tabulate’ module for dynamic board display and enhanced user experience.",
    stack: [{name: "Python"}, {name: "MySQL"}],
    image: "/assets/projects/cf.jpg",
    live: "",
    github: "https://github.com/siri-n-shetty/Connect-Four-Mini-Project-Sem-1",
  },
  {
    num: "03",
    title: "PESU Event Management System",
    descriptiton: "Built a centralized scalable platform to streamline event registrations and recruitments for 100+ university clubs. Replaces Google Forms by automating student data retrieval with user-friendly interface & role-based access control(RBAC).",
    stack: [{name: "React.js"}, {name: "Tailwind CSS"}, {name: "MySQL"}, {name: "Flask"}],
    image: "/assets/projects/piems.jpg",
    live: "",
    github: "https://github.com/siri-n-shetty/PESU_Integrated_Event_Management_System",
  },
  {
    num: "04",
    title: "PESUfy",
    descriptiton: "Developed a website that serves as a resource for incoming juniors at PESU. It streamlines their college experience by providing clear information about the academics and facilities provided by the college.",
    stack: [{name: "JavaScript"}, {name: "Golang"}, {name: "Netlify"}],
    image: "/assets/projects/pesufy.jpg",
    live: "https://pesufy.netlify.app/",
    github: "https://github.com/siri-n-shetty/pesufy",
  },
  {
    num: "05",
    title: "Live Chat Application",
    descriptiton: "Implemented sockets in Flask backend, (using Flask-SocketIO library) and frontend code in HTML, JavaScript. It uses Flask's session management to store information about the user's name and the room they have joined.",
    stack: [{name: "Python"}, {name: "Flask"}, {name: "HTML/CSS"}, {name: "JavaScript"}],
    image: "/assets/projects/lca.jpg",
    live: "",
    github: "https://github.com/siri-n-shetty/Live-Chat-App-using-Flask",
  },
  {
    num: "06",
    title: "Arcade Game",
    descriptiton: "Interstellar Evasion is a simple arcade-style game where the player controls a red rectangle to avoid falling stars coming from above. The game keeps track of the time spent playing, and the player can move the rectangle left and right using the arrow keys to dodge the stars.",
    stack: [{name: "Python"}],
    image: "/assets/projects/ag.jpg",
    live: "",
    github: "https://github.com/siri-n-shetty/Arcade-Game-using-Pygame",
  },
  {
    num: "07",
    title: "Smart Bands System using Cooja",
    descriptiton: "The system consists of parent and child bands that communicate wirelessly to monitor the child's status and alert the parent in case of emergencies such as falls or prolonged absence.",
    stack: [{name: "Cooja Simulator"}, {name: "Contiki OS"}],
    image: "/assets/projects/sms.jpg",
    live: "",
    github: "https://github.com/siri-n-shetty/Smart-Bands-System-using-Cooja",
  },
];

const Projects = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
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
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[20px] h-[50%]">
              {/** Project Number */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">{project.num}</div>
              {/** Project Title */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{project.title}</h2>
              {/** Project Description */}
              <p className="text-white/60">{project.descriptiton}</p>
              {/** Project Stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index)=>{
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && <span className="text-white/60">,</span>}
                    </li>
                  );
                })}
              </ul>
              {/** Project Border */}
              <div className="border border-white/20"></div>
              {/** Buttons */}
              <div className="flex items-center gap-4">
                {/** Project Live Preview */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/** Project GitHub Preview */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent"/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub Repository</p>
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
              {projects.map((project, index)=>{
                return (<SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    {/* overlay */}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    {/* Image */}
                    <div className="relative w-full h-full">
                      <Image src={project.image} fill className="object-contain" alt={project.title}/>
                    </div>
                  </div>
                </SwiperSlide>);
              })}
              {/*slider buttons*/}
              <WorkSlidingBtns 
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                buttonStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Projects
