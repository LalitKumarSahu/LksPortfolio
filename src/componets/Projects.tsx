import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiApachekafka,
  SiSocketdotio,
} from "react-icons/si";
import img1 from "../assets/Screenshot 2024-08-18 165632.png";
import img2 from "../assets/Screenshot 2025-03-22 133847.png";
import img3 from "../assets/Screenshot 2025-03-22 134046.png";
import img4 from "../assets/Screenshot 2025-03-22 134336.png";
import img5 from "../assets/Screenshot 2025-03-22 134829.png";

const projects = [
  {
    title: "Clean Breath",
    description:
      "A web app promoting clean air by suggesting suitable plants to reduce pollution. Includes blogs & plant purchasing features.",
    techStack: [<FaReact />, <FaNodeJs />, <SiExpress />, <SiMongodb />],
    image: img1,
    github: "https://github.com/chandannekya/Clean-Breath",
    demo: "https://cleanbreath.netlify.app/",
  },
  {
    title: "Wagging Wonders",
    description:
      "A platform to help pet lovers find pets, connect with owners, and access services like vet assistance, training, and grooming.",
    techStack: [
      <FaReact />,
      <SiTailwindcss />,
      <FaNodeJs />,
      <SiMongodb />,
      <SiApachekafka />,
      <SiSocketdotio />,
    ],
    image: img2,
    github: "https://github.com/chandannekya/Wagging_Wonders",
    demo: "#",
  },
  {
    title: "Agent Manager",
    description:
      "A MERN stack application for efficient task management with CSV uploads, JWT authentication, and role-based access.",
    techStack: [<FaReact />, <FaNodeJs />, <SiExpress />, <SiMongodb />],
    image: img3,
    github: "https://github.com/chandannekya/Agent-Manger",
    demo: "https://agent-manger.vercel.app/",
  },
  {
    title: "Schedule EMI Calculator",
    description:
      "Calculates EMIs and displays the amortization schedule, supporting different payment frequencies.",
    techStack: [<FaReact />, <FaNodeJs />, <SiExpress />, <SiTailwindcss />],
    image: img4,
    github: "https://github.com/your-username/schedule-emi-calculator",
    demo: "http://localhost:5173",
  },
  {
    title: "Note App",
    description:
      "A note-taking app with OTP-based authentication, built using Vite and MERN stack.",
    techStack: [<FaReact />, <SiMongodb />, <SiExpress />, <SiTailwindcss />],
    image: img5,
    github: "https://github.com/chandannekya/NOTES",
    demo: "https://notes-frontend-6q0b.onrender.com/",
  },
];

const Projects = () => {
  return (
    <div className="mt-16 w-[90%] md:w-[75%] mx-auto flex flex-col gap-16">
      {/* Heading */}
      <div className="flex items-center gap-4">
        <h1 className="text-3xl font-bold text-lightGary whitespace-nowrap">
          <span className="font-mono text-lightNavy">03.</span> Projects
        </h1>
        <div className="h-[1px] w-full bg-lightGary"></div>
      </div>

      {/* Project Cards */}
      {projects.map((project, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          } gap-8 items-center`}
        >
          {/* Image with hover effect */}
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full md:w-2/3 rounded-md shadow-lg overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl"
          >
            <div className="relative">
              <img
                src={project.image}
                alt={`${project.title} Screenshot`}
                className="rounded-md w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-lightNavy/50 group-hover:bg-transparent transition-all duration-300"></div>
            </div>
          </a>

          {/* Details */}
          <div
            className={`w-full md:w-1/2 flex flex-col gap-4 ${
              index % 2 === 0
                ? "text-right md:items-end"
                : "text-left md:items-start"
            }`}
          >
            <p className="font-mono text-md text-lightNavy">Featured Project</p>
            <h2 className="text-xl font-bold text-lightGary">
              {project.title}
            </h2>
            <p className="text-lightGary bg-gray-800 p-4 rounded-sm shadow-sm max-w-md">
              {project.description}
            </p>
            <div className="text-lightNavy text-sm flex gap-2 flex-wrap">
              {project.techStack.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>
            <div className="flex gap-4 mt-2">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-lightGary hover:text-lightNavy underline transition"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-lightGary hover:text-lightNavy underline transition"
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
