import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      company: "Personal Project",
      role: "Full Stack Developer",
      duration: "Feb 2025 - Present",
      work: [
        "Developed a task management web app using React, Node.js, and MongoDB.",
        "Implemented user authentication and role-based access control.",
        "Used Redux for state management and deployed the app using Vercel.",
        "Focused on responsive design and user experience enhancements.",
      ],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="mt-20 w-full px-4 md:px-16 max-w-5xl mx-auto flex flex-col gap-10 py-10">
      {/* Heading */}
      <div className="flex items-center gap-4 w-full">
        <h1 className="text-3xl font-bold text-lightGary whitespace-nowrap">
          <span className="font-mono text-lightNavy">02.</span> Experience
        </h1>
        <div className="h-[1px] w-full bg-lightGary"></div>
      </div>

      {/* Experience Section */}
      <div className="flex flex-col md:flex-row gap-8 w-full">
        {/* Sidebar Tabs */}
        <div className="relative w-full md:w-[180px] shrink-0">
          <div className="absolute left-0 top-0 w-[1px] h-full bg-lightGary"></div>
          <div
            role="tablist"
            aria-orientation="vertical"
            className="flex flex-col font-mono"
          >
            {experiences.map((exp, index) => (
              <div
                role="tab"
                key={index}
                id={`tab-${index}`}
                aria-selected={activeIndex === index}
                aria-controls={`panel-${index}`}
                onClick={() => setActiveIndex(index)}
                className={`relative cursor-pointer text-md px-4 py-2 transition-all duration-300 ease-in-out
                  ${
                    activeIndex === index
                      ? "border-l-2 border-lightNavy bg-lightNavy/10 text-lightNavy"
                      : "border-l-2 border-transparent text-lightGary hover:border-lightNavy hover:bg-lightNavy/10"
                  }`}
              >
                {exp.company}
              </div>
            ))}
          </div>
        </div>

        {/* Detail Panel */}
        <div className="flex-1 min-h-[300px] transition-all duration-300 ease-in-out">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              role="tabpanel"
              id={`panel-${activeIndex}`}
              aria-labelledby={`tab-${activeIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col gap-4 text-lightGary"
            >
              <h2 className="text-xl font-semibold text-lightNavy">
                {experiences[activeIndex].role}{" "}
                <span className="text-lightGary">
                  @ {experiences[activeIndex].company}
                </span>
              </h2>
              <p className="text-sm">{experiences[activeIndex].duration}</p>
              <ul className="list-disc ml-6 space-y-2">
                {experiences[activeIndex].work.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Experience;
