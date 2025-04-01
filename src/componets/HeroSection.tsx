import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react"; // Correct package
import animationhero from "./animationhero.json"; // JSON file

const HeroSection = () => {
  return (
    <motion.div
      className="flex flex-col items-start justify-center min-h-screen gap-6 px-6 md:px-28 relative"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.div className="absolute w-1/2 right-0 -z-0  bottom-40 ">
        <Lottie animationData={animationhero} loop autoplay />
      </motion.div>
      <motion.p
        className="font-mono text-lightNavy"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
      >
        Hello, This is me
      </motion.p>

      <motion.h1
        className="text-5xl md:text-8xl font-semibold font-smalltext text-lightGary"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        Chandan
      </motion.h1>

      <motion.h2
        className="text-3xl md:text-6xl font-semibold font-smalltext text-lightGary md:w-[80%]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.8 }}
      >
        I love learning, experimenting, and building stuff!
      </motion.h2>

      <motion.p
        className="text-base md:text-lg w-full md:w-2/3 font-mono text-lightNavy"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        I'm a Final Year Computer Science Engineering Student at the University
        of Lucknow, Lucknow. Primarily interested in Web Development and Data
        Science. I enjoy learning new skills and implementing them in real life!
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <button
          onClick={() => {
            window.open(
              "https://drive.google.com/file/d/1Jz9QsWBNCS664i3DhMlWsydxoCR-9n0k/view?usp=sharing"
            );
          }}
          className="border border-[#64ffda] text-lightGary rounded px-6 py-2 font-mono text-md hover:bg-[#64ffda]/10 transition duration-300 ease-in-out hover:text-[#64ffda]"
        >
          Resume
        </button>
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;
