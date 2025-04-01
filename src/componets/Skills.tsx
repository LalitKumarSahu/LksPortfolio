import React, { useRef, WheelEvent } from "react";
import Lottie from "lottie-react";
import animation from "./Animation - 1743248149436 (1).json";

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
} from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" size={40} /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" size={40} /> },
  {
    name: "JavaScript",
    icon: <FaJsSquare className="text-yellow-400" size={40} />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-600" size={40} />,
  },
  { name: "Java", icon: <FaJava className="text-red-600" size={40} /> },
  { name: "Python", icon: <FaPython className="text-blue-400" size={40} /> },
  { name: "C", icon: <FaDatabase className="text-gray-400" size={40} /> },
  { name: "React", icon: <FaReact className="text-blue-400" size={40} /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" size={40} /> },
  { name: "Redux", icon: <SiRedux className="text-purple-500" size={40} /> },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-teal-400" size={40} />,
  },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" size={40} /> },
  {
    name: "Express.js",
    icon: <SiExpress className="text-gray-400" size={40} />,
  },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400" size={40} /> },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="text-blue-400" size={40} />,
  },
  { name: "MySQL", icon: <SiMysql className="text-blue-600" size={40} /> },
  {
    name: "Firebase",
    icon: <SiFirebase className="text-yellow-500" size={40} />,
  },
  { name: "Git", icon: <FaGitAlt className="text-orange-500" size={40} /> },
  { name: "GitHub", icon: <FaGithub className="text-white" size={40} /> },
  {
    name: "Postman",
    icon: <SiPostman className="text-orange-400" size={40} />,
  },
  { name: "NPM", icon: <FaNpm className="text-red-500" size={40} /> },
  { name: "SQL", icon: <FaDatabase className="text-indigo-400" size={40} /> },
  {
    name: "Kafka",
    icon: <SiApachekafka className="text-indigo-400" size={40} />,
  },
  {
    name: "Sequelize",
    icon: <SiSequelize className="text-blue-500" size={40} />,
  },
  { name: "Prisma", icon: <SiPrisma className="text-gray-500" size={40} /> },
  {
    name: "Socket.IO",
    icon: <SiSocketdotio className="text-gray-400" size={40} />,
  },
  { name: "Docker", icon: <SiDocker className="text-blue-500" size={40} /> },
  { name: "Figma", icon: <SiFigma className="text-pink-500" size={40} /> },
  { name: "Linux", icon: <SiLinux className="text-yellow-400" size={40} /> },
];

const Skills: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleWheel = (e: WheelEvent<HTMLDivElement>) => {
    const container = scrollRef.current;
    if (!container) return;

    const isScrollable = container.scrollWidth > container.clientWidth;

    if (isScrollable) {
      e.preventDefault();
      container.scrollLeft += e.deltaY;
    }
  };

  return (
    <div className="mt-16 w-[90%] md:w-[75%] mx-auto flex flex-col  items-center gap-12 relative">
      <h1 className="text-3xl text-lightGary font-bold text-center border-b border-lightNavy pb-4">
        Skills
      </h1>

      {/* Animation */}
      <div className="absolute inset-0 -z-0 flex justify-center items-center top-30 bottom-30  flex-wrap">
        {[...Array(9)].map((_, index) => (
          <div key={index} className="">
            <Lottie
              animationData={animation}
              loop
              autoplay
              className="w-full h-40 opacity-80"
            />
          </div>
        ))}
      </div>

      {/* Skills List */}
      <div
        ref={scrollRef}
        onWheel={handleWheel}
        className="grid grid-cols-6 gap-8  no-scrollbar  p-8 scroll-smooth "
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex grayscale hover:grayscale-0 flex-col items-center gap-2 hover:scale-110 transition-transform duration-300 min-w-[100px]"
          >
            {skill.icon}
            <p className="text-sm text-lightGary">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
