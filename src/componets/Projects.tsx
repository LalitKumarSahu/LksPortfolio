import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiApachekafka,
  SiSocketdotio,
} from "react-icons/si";
import img1 from "../assets/WONDERLUST.png";
import img2 from "../assets/lms img.jpeg";

import img3 from "../assets/react.png";
import img4 from "../assets/ecomerce.png";
import img5 from "../assets/rejouice.png";
import img6 from "../assets/youtube.png";




const projects = [
  {
    title: "WonderLust",
    description:
      "WonderLust is a full stack travel listing web app built Node.js, Express.js, MongoDB, and EJS. it features user authentication, CRUD operations,  reviews with ratings, and image uploads via Cloudinary. The app follows MVC architecture with RESTful routes, error handling, and responsive Bootstrap design",
    techStack: [<FaReact />, <FaNodeJs />, <SiExpress />, <SiMongodb />],
    image: img1,
    github: "https://github.com/LalitKumarSahu/WonderLust.git",
    demo: "https://wonderlust-1-ne7w.onrender.com/listings",
  },
  {
  title: "LMS (Learning Management System)",
  description:
    "A full stack Learning Management System built using React.js, Node.js, Express.js, and MongoDB. It features role-based access for Admin, Instructor, and Student, course creation and management, video uploads, and secure Stripe integration for paid courses. The app includes responsive dashboards, authentication, and clean UI design.",
  techStack: [<FaReact />, <FaNodeJs />, <SiExpress />, <SiMongodb />],
  image: img2,
  github: "https://github.com/LalitKumarSahu/fullstack-lms-app", 
  },

  
  {
    title: "React Weather App",
    description:
      "React Weather App Buil a responsive weather application using React.js and Material UI that fetches real-time API. Features include city-based search, dynamic weather dispaly, and responsive design for all screen sizes",
  
    techStack: [
      <FaReact />,
      <SiTailwindcss />,
      <FaNodeJs />,
      <SiMongodb />,
      <SiApachekafka />,
      <SiSocketdotio />,
    ],
    image: img3,
    github: "#",
    demo: "https://lalit-kr.netlify.app/",
  },
  {
    title: "Ecomerce website",
    description:
      "Built a fully responsive online shopping website with product listing, search, filters, and cart functionality using LocalStorage. Features include dynamic UI, category-based filtering, and mobile-friendly design",
    techStack: [<FaReact />, <FaNodeJs />, <SiExpress />, <SiMongodb />],
    image: img4,
    github: "#",
    demo: "https://coderlalit.netlify.app/",
  },
 
  {
    title: "Rejouice website clone",
    description:
      "Cloned the Rejouice landing page with pixel-perfect design, smooth animations, and responsive layout using vanilla HTML, CSS, and JS. Showcases modern UI/UX replication and frontend skills.",
    techStack: [<FaReact />, <FaNodeJs />, <SiExpress />, <SiMongodb />],
    image: img5,
    github: "#",
    demo: "https://lkrejouice.netlify.app/",
  },
  {
    title: "YouTube clone",
    description:
      "A front-end clone of YouTube built with HTML, CSS, and vanilla JavaScript. It features a responsive layout, video thumbnails, a sidebar menu, a styled search bar, and interactive UI elements. This project helped me strengthen my skills in responsive design, DOM manipulation, and modern web layouts",
    techStack: [<FaReact />, <FaNodeJs />, <SiExpress />, <SiMongodb />],
    image: img6,
    github: "https://github.com/LalitKumarSahu/YouTube-Clone",
    demo: "https://lkyoutube.netlify.app/",
  },
  
];

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mt-16 w-[90%] md:w-[75%] mx-auto flex flex-col gap-16"
    >
      {/* Heading */}
      <div className="flex items-center gap-4">
        <h1 className="text-3xl font-bold text-lightGary whitespace-nowrap">
          <span className="font-mono text-lightNavy">03.</span> Projects
        </h1>
        <div className="h-[1px] w-full bg-lightGary"></div>
      </div>

      {/* Project Cards */}
      {projects.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={`flex flex-col md:flex-row ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          } gap-8 items-center`}
        >
          {/* Image with hover effect */}
          <motion.a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="group w-full md:w-2/3 rounded-md shadow-lg overflow-hidden cursor-pointer transition-transform duration-300"
          >
            <div className="relative">
              <img
                src={project.image}
                alt={`${project.title} Screenshot`}
                className="rounded-md w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-lightNavy/50 group-hover:bg-transparent transition-all duration-300"></div>
            </div>
          </motion.a>

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
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Projects;
