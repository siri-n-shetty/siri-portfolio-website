import { animate, motion } from "framer-motion";

// variants
const stairAnimation = {
    initial: {
        top: "0%",
    }, 
    animate: {
        top: "100%",
    }, 
    exit: {
        top: ["100%", "0%"],
    },
}

// calculating the reverse index for staggered delay
const reverseIndex = (index) => {
    const totalSteps = 6; // total number of steps
    return totalSteps - index - 1;
}

const Stairs = () => {
  return (
    <>
      {/*
      render 6 motion divs, each representing a step f stairs:
      Each stair will have the same snimation defined b the StairAnimation object,
      The delay for each div is calculated dynamically based on its reverse index, 
      creating a staggered effect with decreasing delay for each subsequent step.
      */}

      {[...Array(6)].map((_, index) => {
        return (
        <motion.div 
          key={index}
          className="w-full h-full bg-white relative"
          variants={stairAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          custom={index}
          transition={{duration: 0.4, ease: "easeInOut", delay: reverseIndex(index) * 0.1}}
        />
        );
      })} 
    </>
  )
}

export default Stairs
