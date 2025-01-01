"use client";

import CountUp from "react-countup";

const stats = [
    {
        num: 0,
        text: "Years of Experience",
    },
    {
        num: 7,
        text: "Projects Completed",
    },
    {
        num: 14,
        text: "Technologies Mastered",
    },
    {
        num: 500,
        text: "Code Commits",
    },
]

const Stats = () => {
  return (
    <section className="pt-0 pb-10 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
            {stats.map((item, index)=> {
                return (
                <div key={index} className="flex-1 flex gap-4 items-center justify-center xl:justify-start">
                    <CountUp 
                        end={item.num} 
                        duration={5} 
                        delay={2} 
                        className="text-4xl xl:text-6xl font-extrabold" 
                    />
                    <p className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug`}>{item.text}</p>
                </div>
                );
            })}
        </div>
      </div>
    </section>
  )
}

export default Stats
