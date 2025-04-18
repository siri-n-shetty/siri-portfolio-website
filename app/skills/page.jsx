"use client";

import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

import * as SiIcons from "react-icons/si";

{/* skills data */}
const skills = {
  title: "Skills",
  skilllist: [
    {
      icon: <SiIcons.SiPython />,
      name: "Python",
    },
    {
      icon: <SiIcons.SiC />,
      name: "C",
    },
    {
      icon: <SiIcons.SiGo />,
      name: "Golang",
    },
    {
      icon: <SiIcons.SiHtml5 />,
      name: "HTML",
    },
    {
      icon: <SiIcons.SiCss3 />,
      name: "CSS",
    },
    {
      icon: <SiIcons.SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <SiIcons.SiJavascript />,
      name: "JavaScript",
    },
    {
      icon: <SiIcons.SiReact />,
      name: "React.js",
    },
    {
      icon: <SiIcons.SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiIcons.SiDocker />,
      name: "Docker",
    },
    {
      icon: <SiIcons.SiKubernetes />,
      name: "Kubernetes",
    },
    {
      icon: <SiIcons.SiUbuntu />,
      name: "Ubuntu",
    },
    {
      icon: <SiIcons.SiNodedotjs />,
      name: "Node.js",
    },
    {
      icon: <SiIcons.SiMongodb />,
      name: "Mongo DB",
    },
    {
      icon: <SiIcons.SiMysql />,
      name: "MySQL",
    },
    {
      icon: <SiIcons.SiFlask />,
      name: "Flask",
    },
    {
      icon: <SiIcons.SiTensorflow />,
      name: "TensorFlow",
    },
    {
      icon: <SiIcons.SiScikitlearn />,
      name: "Scikit-learn",
    },
    {
      icon: <SiIcons.SiPandas />,
      name: "Pandas",
    },
    {
      icon: <SiIcons.SiNumpy />,
      name: "NumPy",
    },
    {
      icon: <SiIcons.SiPytorch />,
      name: "PyTorch",
    },
    {
      icon: <SiIcons.SiWordpress />,
      name: "WordPress",
    },
    {
      icon: <SiIcons.SiFigma />,
      name: "Figma",
    },
    {
       icon: <SiIcons.SiGit />,
       name: "Git",
    },
    {
      icon: <SiIcons.SiWireshark />,
      name: "Wireshark",
    },
    {
      icon: <SiIcons.SiBlender />,
      name: "Blender",
    },
  ]
}

{/* education */}
const education = {
  title: "Education",
  items: [
    {
      institute: "PES University, Bengaluru",
      degree: "Bachelor of Technology in Computer Science",
      duration: "2022-2026",
    },
    {
      institute: "Chethana Pre-University College, Bengaluru",
      degree: "Pre-University College - PCMB",
      duration: "2019-2021",
    },
    {
      institute: "Sindhi High School, Kempapura, Bengaluru",
      degree: "CBSE",
      duration: "2015-2019",
    },
  ],
};

{/* achievements */}
const achievements = {
  title: "Achievements",
  items: [
    {
      title: "3rd Place at CIDECODE Hackathon",
      description: "Our team secured 3rd Place at the prestigious CID < CIDECODE /> Hackathon, organized by Crime Investigation Department (CID) -Karnataka, Data Security Council of India (DSCI), and PESU, for developing a Blockchain-based Digital Evidence Chain-of-Custody Tracker for law enforcement agencies.",
    },
    {
      title: "National Finalist, Jagriti 2025, IIT-BHU",
      description: "National Finalist in Serve and Smart Hackathon 2025 (flagship AI/ML Hackathon organised as part of Jagriti 2025) - Selected among top 10 teams across India for the final round at IIT BHU.",
    },
    {
      title: "Dr. M R Doreswamy Merit Scholarship Award",
      description: "Recognized for being amongst the top 20% SGPA in the department.",
    },
    {
      title: "Distinction Award",
      description: "Recognized for having secured an SGPA of 7.75 and above.",
    },
    {
      title: "Certificate of Appreciation",
      description: "Recognized by Bangalore Sahodaya Schools Complex for securing the highest total (100/100) in Sanskrit during the All India Secondary School Examination 2019 conducted by CBSE, New Delhi.",
    },
  ],
};

const Skills = () => {
  return (
    <motion.div 
      initial={{opacity: 0}} 
      animate={{opacity: 1, transition: {
        delay: 2.4, 
        duration: 0.4, 
        ease: "easeIn"}
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="skills" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[20px]">
                <div className="flex flex-col gap-[20px] text-center xl:text-left">
                  <h3 className="text-3xl font-bold">{skills.title}</h3>
                </div>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[20px]">
                    {skills.skilllist.map((skill, index) => {
                      return (<li key={index}>
                        
                        <TooltipProvider delayDuration={100} >
                          <Tooltip>
                            
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            
                            <TooltipContent>
                              <p>{skill.name}</p>
                            </TooltipContent>
                            
                          </Tooltip>
                        </TooltipProvider>
                        
                      </li>);
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[20px] text-center xl:text-left ">
                <h3 className="text-3xl font-bold">{education.title}</h3>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 gap-[20px]">
                    {education.items.map((item, index) => (
                      <li key={index} className="bg-[#232329] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start">
                        <span className="text-white/60">{item.duration}</span>
                        <h3 className="text-accent text-xl font-semibold min-h-[40px]">{item.institute}</h3>
                        <div className="flex items-center gap-3">
                          {/*dot*/}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p>{item.degree}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            
            {/* achievements */}
            <TabsContent value="achievements" className="w-full">
              <div className="flex flex-col gap-[20px] text-center xl:text-left ">
                <h3 className="text-3xl font-bold">{achievements.title}</h3>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 gap-[20px]">
                    {achievements.items.map((item, index) => (
                      <li key={index} className="bg-[#232329] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start">
                        <h3 className="text-accent text-xl font-semibold">{item.title}</h3>
                        <p>{item.description}</p>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Skills