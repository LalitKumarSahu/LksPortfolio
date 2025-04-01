import React from "react";
import { motion } from "framer-motion";
import photo from "../componets/WhatsApp Image 2025-04-01 at 21.08.15_d4ed22da.jpg";
const About = () => {
  const activities = [
    "Problem Solving",
    "Reading Tech Blogs",
    "Team Management",
    "Mentoring & Guiding Others",
    "Participating in Hackathons",
    "Exploring New Technologies",
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center justify-center min-h-screen px-6 md:px-28 mt-10"
    >
      <motion.div
        className="w-full max-w-6xl flex flex-col md:flex-row gap-10"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Left Section */}
        <motion.div className="md:w-1/2">
          <motion.h1
            className="flex items-center gap-4 text-3xl font-bold text-lightGary mb-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-lightNavy font-mono">01.</span>
            <p>About Me</p>
            <motion.div className="h-[1px] w-full bg-lightGary" />
          </motion.h1>

          <motion.p
            className="text-sm text-lightGary leading-6 mb-6 text-justify"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Hello! I’m Chandan, hailing from the culturally rich city of
            Lucknow, known as the City of Nawabs. I am a curious, hardworking,
            dedicated, and goal-driven individual who believes in continuous
            growth and learning. <br /> <br />
            Along with a strong sense of responsibility, I carry good moral
            values, organizational skills, and an eye for detail. <br /> <br />
            Currently, I am pursuing my Bachelor's degree in Computer Science
            and Engineering at the University of Lucknow. My primary interests
            lie in Web Development and Data Science, where I love transforming
            ideas into real-world applications. <br /> <br />I actively
            contribute to various coding communities and have led initiatives as
            part of AlgoZenith and Coding Connoisseurs. I’ve been fortunate to
            be recognized for my consistent efforts and leadership skills.
          </motion.p>

          <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                className="flex items-center text-lightGary text-sm"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <span className="text-lightNavy font-mono mr-2">
                  0{index + 1}.
                </span>
                <p>{activity}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="md:w-1/2 flex justify-center items-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            className=" bg-lightNavy/20 w-64 grayscale hover:grayscale-0 rounded-md flex justify-center items-center    text-white text-lg shadow-lg"
            whileHover={{ scale: 1.1 }}
          >
            <img
              src={photo}
              className=" object-center object-contain rounded-lg p-2   "
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
