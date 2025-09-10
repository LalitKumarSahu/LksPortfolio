import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaNpm,
  FaJava,
  FaPython,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiRedux,
  SiNextdotjs,
  SiPostman,
  SiTypescript,
  SiFirebase,
  SiApachekafka,
  SiPostgresql,
  SiMysql,
  SiSequelize,
  SiPrisma,
  SiSocketdotio,
  SiDocker,
  SiFigma,
  SiLinux,
  SiVercel,
  SiNetlify,
  SiRender,
} from "react-icons/si";

// Skill categories
const skillCategories = {
  Frontend: [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" size={25} /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" size={25} /> },
    {
      name: "JavaScript",
      icon: <FaJsSquare className="text-yellow-400" size={25} />,
    },
  
    { name: "React", icon: <FaReact className="text-blue-400" size={25} /> },
    { name: "Redux", icon: <SiRedux className="text-purple-500" size={25} /> },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-teal-400" size={25} />,
    },
  ],
  Backend: [
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-green-500" size={25} />,
    },
    {
      name: "Express.js",
      icon: <SiExpress className="text-gray-400" size={25} />,
    },
    {
      name: "Socket.IO",
      icon: <SiSocketdotio className="text-gray-400" size={25} />,
    },
    {
      name: "Kafka",
      icon: <SiApachekafka className="text-indigo-400" size={25} />,
    },
    {
      name: "Sequelize",
      icon: <SiSequelize className="text-blue-500" size={25} />,
    },
    { name: "Prisma", icon: <SiPrisma className="text-gray-500" size={25} /> },
  ],
  Database: [
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-green-400" size={25} />,
    },
  
    { name: "MySQL", icon: <SiMysql className="text-blue-600" size={25} /> },

    { name: "SQL", icon: <FaDatabase className="text-indigo-400" size={25} /> },
  ],
  Programming: [
    { name: "Java", icon: <FaJava className="text-red-600" size={25} /> },
    { name: "Python", icon: <FaPython className="text-blue-400" size={25} /> },
    { name: "C", icon: <FaDatabase className="text-gray-400" size={25} /> },
  ],

  Tools: [
    { name: "Git", icon: <FaGitAlt className="text-orange-500" size={25} /> },
    { name: "GitHub", icon: <FaGithub className="text-white" size={25} /> },
    {
      name: "Postman",
      icon: <SiPostman className="text-orange-400" size={25} />,
    },
    { name: "NPM", icon: <FaNpm className="text-red-500" size={25} /> },
    { name: "Figma", icon: <SiFigma className="text-pink-500" size={25} /> },
  ],
  "Hosting & Deployment": [
    { name: "Vercel", icon: <SiVercel className="text-white" size={25} /> },
    {
      name: "Netlify",
      icon: <SiNetlify className="text-teal-400" size={25} />,
    },
    { name: "Render", icon: <SiRender className="text-blue-400" size={25} /> },
  ],
};

const Skills: React.FC = () => {
  return (
    <div className="mt-16 w-[90%] md:w-[75%] mx-auto flex flex-col items-center gap-12 relative">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl text-lightGary font-bold text-center border-b border-lightNavy pb-4"
      >
        Skills
      </motion.h1>

      <div className="flex flex-col gap-12 w-full">
        {Object.entries(skillCategories).map(
          ([categoryName, skills], categoryIndex) => (
            <motion.div
              key={categoryName}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-semibold text-center text-lightGary mb-6">
                {categoryName}
              </h2>
              <div className="flex flex-wrap justify-center gap-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={`${categoryName}-${index}`}
                    whileHover={{ scale: 1.1 }}
                    className="min-w-[120px] p-2 flex items-center justify-center rounded-md transition-transform duration-300"
                  >
                    <div className="flex flex-col items-center gap-2">
                      {skill.icon}
                      <p className="text-sm text-lightGary">{skill.name}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )
        )}
      </div>
    </div>
  );
};

export default Skills;
