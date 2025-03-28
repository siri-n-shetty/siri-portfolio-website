"use client";

import { BsArrowDownRight } from 'react-icons/bs';
import Link from 'next/link';
import { motion } from 'framer-motion';

const experiences = [
  {
    num: "01",
    title: "WiE Chair",
    company: "IEEE Student Branch PESU-ECC",
    tenure: "August 2024 - Present",
    description: [
      "Organized and led a flagship hackathon featuring both traditional hackathon tracks and Capture the Flag (CTF) challenges, achieving the highest footfall and registrations for the Fall Semester 2024.",
      "Directed workshops focusing on technical skill development and community building.",
      "Spearheaded recruitment drives, including strategizing, interviewing, and onboarding.",
    ],
    href: "https://www.instagram.com/ieee_pesuecc_sb/",
  },
  {
    num: "02",
    title: "Research Intern",
    company: "Centre of Cognitive Computing and Computational Intelligence (C3I)",
    tenure: "May 2024 - August 2024",
    description: [
      "Preprocessed and curated datasets to train and validate the neural network, ensuring data quality and relevance.",
      "Developed and implemented BERT & Graph Neural Networks for detecting hate speech in multilingual social media text, achieving an accuracy of 0.72.",
    ],
    href: "https://www.linkedin.com/posts/siri-n-shetty_im-excited-to-share-the-completion-of-my-activity-7253079149332844546-94jE?utm_source=share&utm_medium=member_desktop",
  },
  {
    num: "03",
    title: "Operations Executive",
    company: "PESU I/O",
    tenure: "August 2023 - June 2024",
    description: [
      "PESU I/O is a student initiative under PESU that offers industry-oriented courses and mentoring programs.",
      "Managed core logistics and marketing of projects, programs, and subsidiaries, impacting many students.",
      "Led intern recruitment, interviews, and onboarding, ensuring smooth team integration and task delegation.",
      "Analyzed feedback and statistics using pandas, skikit, seaborn, streamlining processes and enhancing project outcomes.",
      "Organized green room equipment setup for events, collaborated with teams, and handled scheduling and permissions.",
    ],
    href: "https://pesu.io/teams/",
  },
  {
    num: "04",
    title: "Social Media and Marketing Lead",
    company: "C-ISFCR PESU",
    tenure: "September 2023",
    description: [
      "Played a key role in organizing the CTF Hackathon at PESU, EC Campus.",
      "Contributed significantly to marketing and social media outreach, resulting in the event achieving the highest footfall and registrations among all events conducted during Fall Semester 2023.",
    ],
    href: "https://www.isfcr.pes.edu/",
  },
];

const Experience = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' }}}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {experiences.map((experience, index) => {
            return (
              <div key={index} className="flex-1 flex flex-col gap-6 group">
                {/* Top part */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {experience.num}
                  </div>
                  <Link href={experience.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                    <BsArrowDownRight className="text-primary text-3xl"/>                
                  </Link>
                </div>

                {/* Heading which tells position */}
                <h2 className="text-[32px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {experience.title}
                </h2>

                {/* Company */}
                <p className="text-white font-semibold text-[20px]">{experience.company}</p>

                {/* tenure */}
                <p className="text-white/60 italic">{experience.tenure}</p>

                {/* Description as a list */}
                <ul className="list-disc pl-6 space-y-2">
                  {experience.description.map((point, i) => (
                    <li
                      key={i}
                      className="text-white/80 leading-relaxed"
                      style={{ textIndent: '-0.1em', paddingLeft: '0.5em' }}
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

{/*Demonstrated leadership and organizational excellence, ensuring smooth execution of events and strengthening the organization’s presence on campus.*/}